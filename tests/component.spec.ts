import test from "@playwright/test";
import { App } from "../app";

const shopTest = test.extend<{ app: App }>({
  app: ({ page }, use) => {
    use(new App(page));
  },
});

shopTest("admin test", async ({ app: { home } }) => {
  await home.open();
  await home.header.expectLoaded();
});
