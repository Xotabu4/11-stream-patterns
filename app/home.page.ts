import { step } from "../utils/stepDecorator";
import { Header } from "./component/header.component";
import { AbstractPage } from "./abstract";

export class Home extends AbstractPage {
  header = new Header(this.page);

  async expectLoaded() {
    // Some implementation here...
  }
  @step
  async open() {
    await this.page.goto("/");
  }
}
