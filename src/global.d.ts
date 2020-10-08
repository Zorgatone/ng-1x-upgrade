declare global {
  import jquery from "jquery";
  import Angular from "angular";

  declare var jQuery: typeof jquery;
  declare var angular: typeof Angular;
}

interface Window {
  jQuery: typeof jQuery;
  angular: typeof angular;
}

declare module "*.html";
