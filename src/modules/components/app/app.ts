import { IController } from "angular";

import buttonTemplate from "./app.template.html";

export const componentName = "myApp";

export const componentClass = class App implements IController {
  private user: string;
  private count: number;

  public constructor() {
    this.count = 0;
    this.user = "world";
  }

  public $onInit(): void {
    console.log("Hello " + this.user);
  }

  public onClick(event: JQuery.Event): void {
    console.log("event:", event);

    this.count += 1;
  }
};

export const componentOptions: angular.IComponentOptions = {
  template: buttonTemplate,
  controller: componentClass,
};
