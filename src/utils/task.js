import { indexOf } from 'lodash';

export const getNextTask = (game, task) => {
  const prevIndex = indexOf(game.tasks, task);
  const nextIndex = prevIndex + 1;

  if (nextIndex > game.tasks.length) {
    throw new Error('There is no next task');
  }

  return prevIndex > 0 ? game.task[prevIndex + 1] : undefined;
};
