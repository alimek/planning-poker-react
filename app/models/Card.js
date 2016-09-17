
class Card {
  /**
   * @param {string} value
   */
  constructor(value) {
    this.value = value;
  }

  toggle() {
    this.selected = !this.selected;
  }

  isSelected() {
    return this.selected;
  }
}

export default Card;
