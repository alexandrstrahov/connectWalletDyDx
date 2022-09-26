import { expect } from "@playwright/test";
import { test } from "../fixtures/metamaskFixture";
import { testData} from '../testData/dataForTrading'

test.describe('Connect Metamask Wallet', async () => {
  test.beforeEach(async ({ connectWalletScreen }) => {
    await connectWalletScreen.connectMetaMask();
  });

  test('Test the ability to make a Deposit for connected wallet', async ({page, tradePage }) => {
    // await page.pause()
    await tradePage.clickOnADepositButton();
    await tradePage.confirmDeposit();
    await expect(tradePage.confirmationOfDepositPopup).toBeVisible();
    })

  test('Test the ability to Place Limit Order', async ({page, tradePage }) => {
    // await page.pause()
    await tradePage.fillingAmountField(testData.amountOfTokens);
    await tradePage.fillingLimitPriceField(testData.limitPrice);
    await tradePage.placeLimitOrder();
    await expect(tradePage.limitPopupToaster).toBeVisible();
    await tradePage.clickOrdersButton();
    await expect(tradePage.amountColumn).toContainText(testData.amountOfTokens);
    await expect(tradePage.priceColumn).toContainText(testData.priceColumnData);
    
    })  

});