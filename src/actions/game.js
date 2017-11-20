import store from '../stores/store';
import PokerAPI from '../services/poker-api';
// import { createServer } from '../actions/socket';

import {
  SET_ACTIVE_TASK,
  SET_ACTIVE_TASK_STATUS,
  GAME_CREATED,
  GAME_LOADED,
  GAME_STARTED,
  TASK_FLIPPED,
  GAME_FINISHED,
} from './types';
import { setActiveTask } from './task';
import { getNextTask } from '../utils/task';

export const createGame = name => async (dispatch) => {
  const newGame = await PokerAPI.post('/games', { name });
  const { data } = newGame;

  dispatch({ type: GAME_CREATED, newGame: data });
  return data;
};

export const getGame = id => async (dispatch) => {
  const gameResponse = await PokerAPI.get(`/games/${id}`);
  const game = gameResponse.data;

  // AppStore.game.fromResponse(game);
  // AppStore.io = createServer();

  dispatch({ type: GAME_LOADED, game });

  return game;
  //
  //   if (AppStore.game.tasks.length > 0) {
  //     const task = game.tasks.find((curVal) => curVal.id === game.current_task_id);
  //     store.dispatch({ type: SET_ACTIVE_TASK, task });
  //
  //     task.votes.forEach((taskPlayer) => {
  //       const player = AppStore.game.getPlayerByGUID(taskPlayer.player.guid);
  //       player.isReady.set(true);
  //       if (task.status === 'flipped') {
  //         player.pickedCard.set(taskPlayer.value);
  //       } else {
  //         player.pickedCard.set(null);
  //       }
  //     });
  //   }
  //   return game;
  // });
};

export const startGame = () => async (dispatch) => {
  const { game } = store.getState();
  try {
    await PokerAPI.patch(`/games/${game.id}/start`);
    dispatch({ type: GAME_STARTED });
    dispatch(setActiveTask(game.tasks[0]));
  } catch (e) {
    throw new Error('Error while starting game', e);
  }
};

export const onGameStarted = () => {
  const { game } = store.getState();

  store.dispatch({ type: SET_ACTIVE_TASK, task: game.tasks[0] });
  // AppStore.game.resetPlayersCards();
};

export const flip = () => async (dispatch) => {
  const { game, activeTask } = store.getState();
  await PokerAPI.patch(`/games/${game.id}/tasks/${activeTask.id}/flip`);

  try {
    const nextTask = getNextTask(game, activeTask);

    dispatch({
      type: TASK_FLIPPED,
      task: activeTask,
      nextTask,
    });
  } catch (e) {
    dispatch({ type: GAME_FINISHED, game, task: activeTask });
  }
};

export const onFlip = (message) => {
  // const { activeTask } = store.getState();

  store.dispatch({ type: SET_ACTIVE_TASK_STATUS, status: message.status });
  // AppStore.game.resetPlayersCards();
  // AppStore.game.setPickedCards(message.votes, activeTask.status);
};
