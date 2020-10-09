export class Todo {
  private _done: boolean;

  public constructor(public name: string) {
    this._done = false;
  }

  public done(): boolean;
  public done(isDone: boolean): undefined;
  public done(isDone?: boolean | undefined): boolean | undefined {
    if (typeof isDone === "undefined") {
      return this._done;
    }

    this._done = !!isDone;
  }
}

export default Todo;
