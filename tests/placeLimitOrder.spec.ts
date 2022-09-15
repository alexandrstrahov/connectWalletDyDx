import { expect } from "@playwright/test";
import { test } from "../fixtures/metamaskFixture";

test.describe('Connect Metamask Wallet', async () => {
  test.beforeEach(async ({ connectWalletScreen, topNavigationBar }) => {
    await connectWalletScreen.connectMetaMask();
    await expect(topNavigationBar.metamaskAddress).toBeVisible();
  });

  test('Test the ability to make a Deposit for connected wallet', async ({page, tradePage }) => {
    // await page.pause()
    await tradePage.makeADeposit();
    await expect(tradePage.confirmationOfDepositPopup).toBeVisible();
    })

  test('Test the ability to Place Limit Order', async ({page, tradePage }) => {
    // await page.pause()
    await tradePage.placeLimitOrder();
    await expect(tradePage.limitPopupToaster).toBeVisible();
    })  

});