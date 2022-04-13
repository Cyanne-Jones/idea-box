class Idea {
  constructor(userTitle, userBody) {
    this.id = Date.now;
    this.title = userTitle;
    this.body = userBody;
    this.star = false;
  }
  updateIdea() {
    this.star = true;
  }
}
