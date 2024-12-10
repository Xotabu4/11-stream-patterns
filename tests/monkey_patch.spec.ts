import { test, expect } from "@playwright/test";
import { Home } from "../app/home.page";

test("admin test", async ({ page }) => {
  // @ts-expect-error monkey patching object
  page.context().ROLE = "admin";
  const homePage = new Home(page);
  await homePage.open();
  const title = await page.title();
  expect(title).toBe("MERN Store");
});

test("user test", async ({ page }) => {
  // @ts-expect-error monkey patching object
  page.context().ROLE = "user";
  const homePage = new Home(page);
  await homePage.open();
  const title = await page.title();
  expect(title).toBe("MERN Store");
});
