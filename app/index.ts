import { PageHolder } from "./abstract";
import { Home } from "./home.page";
import { Login } from "./login.page";

export class App extends PageHolder {
  readonly home = new Home(this.page);
  readonly login = new Login(this.page);

  doLogin() {
    this.login.open()
    this.login.login()
    this.home.expectLoggedIn();
  }
}
