import { expect } from "@playwright/test";
import { test } from "../fixtures/metamaskFixture";

test.describe("Check connection of wallet", () => {
  test(`Check the ability to connect Metamask`, async ({ page, connectWalletScreen, topNavigationBar }) => {
    // await page.pause()
    await connectWalletScreen.connectMetaMask();
    await expect(topNavigationBar.metamaskAddress).toBeVisible();
  });
});
