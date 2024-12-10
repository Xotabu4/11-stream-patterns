import { step } from "../utils/stepDecorator";
import { AbstractPage } from "./abstract";

export class Login extends AbstractPage {
  async expectLoaded() {
    // Some implementation here...
  }
  @step
  async open() {
    await this.page.goto("/");
  }
}
