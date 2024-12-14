abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}

  abstract getNickName(): void;

  protected getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName(): void {
    this.getFullName();
    console.log(this.nickname);
  }
}

class King extends Player {
  removeUser(): void {}
}

const nico = new Player("nico", "las", "니꼬");
