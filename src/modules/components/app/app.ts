import { IController } from "angular";
import { Todo } from "../../model";

import buttonTemplate from "./app.template.html";

export const componentName = "myApp";

export const componentClass = class App implements IController {
  private todos: Todo[];

  public constructor() {
    this.todos = [new Todo("Hello"), new Todo("World!")];
  }

  public $onInit(): void {
    this.todos[1]?.done?.(true);
  }

  public change(todo: Todo) {
    console.log(todo);
  }
};

export const componentOptions: angular.IComponentOptions = {
  template: buttonTemplate,
  controller: componentClass,
};
