class Idea {
  constructor(userTitle, userBody) {
    this.id = date.now;
    this.title = userTitle;
    this.body = userBody;
    this.star = false;
  }
  updateIdea() {
    this.star = true;
  }
}
