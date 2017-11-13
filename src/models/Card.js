class Card {
  /**
   * @param {string} value
   */
  constructor(value) {
    this.value = value;
    this.selected = false;
  }

  toggle() {
    this.selected = !this.selected;
  }

  isSelected() {
    return this.selected;
  }
}

export default Card;
