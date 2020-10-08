import angular from "angular";
import {
  componentName as appName,
  componentOptions as appOptions,
} from "./app";

export const moduleName = "components";

export const module = angular
  .module(moduleName, [])
  .component(appName, appOptions);

export default moduleName;
