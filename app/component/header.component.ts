import { expect } from "@playwright/test";
import { Component } from "../abstract";

export class Header extends Component {
  private container = this.page.locator("header.header");
  private searchField = this.container.getByRole("textbox", {
    name: "Search Products",
  });

  async expectLoaded() {
    await expect(this.container).toBeVisible();
    await expect(this.searchField).toBeVisible();
  }

  async search(query: string) {
    await this.searchField.pressSequentially(query);
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
  }
}

interface LoadableComponent {
  expectLoaded: () => Promise<void>;
}

class Header2 extends Component implements LoadableComponent {
  private container = this.page.locator("header.header");
  private searchField = this.container.getByRole("textbox", {
    name: "Search Products",
  });

  async expectLoaded() {
    await expect(this.container).toBeVisible();
    await expect(this.searchField).toBeVisible();
  }

  async search(query: string) {
    await this.searchField.pressSequentially(query);
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
  }
}
