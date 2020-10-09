import { IController } from "angular";
import { Todo } from "../../model";

import buttonTemplate from "./app.template.html";

export const componentName = "myApp";

export const componentClass = class App implements IController {
  private todoName: string;
  private todos: Todo[];

  public constructor() {
    this.todoName = "";
    this.todos = [];
  }

  public $onInit(): void {
    //
  }

  public change(todo: Todo): void {
    console.log(todo);
  }

  public submit(): void {
    if (this.todoName.trim().length > 0) {
      this.todos.push(new Todo(this.todoName));
      this.todoName = "";
    }
  }
};

export const componentOptions: angular.IComponentOptions = {
  template: buttonTemplate,
  controller: componentClass,
};
