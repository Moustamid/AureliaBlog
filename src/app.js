import {PLATFORM} from "aurelia-pal";

export class App {
  
  constructor()
  {
    this. message = 'Hello Karim !';  
  }
  
  configureRouter(config, router)
  {
    config.title = 'Karim\'s Blog';
    config.map([
      {route : '' , name : 'home' ,  moduleId: PLATFORM.moduleName('posts/index') , title : 'All Posts'}
    ]);
  }
  
}
