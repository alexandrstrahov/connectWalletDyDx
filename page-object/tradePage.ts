import {WebPage} from "./webPage";
import test, { Locator, Page, BrowserContext} from '@playwright/test';
import {testData} from '../testData/dataForTrading'

export class TradePage extends WebPage {
  readonly depositButton: Locator;
  readonly confirmDepositButton: Locator;
  readonly confirmationOfDepositPopup: Locator;
  readonly amountField: Locator;
  readonly limitPrice: Locator;
  readonly placeLimitOrderButton: Locator;
  readonly limitPopupToaster: Locator;

  constructor(page: Page, context?: BrowserContext) {
    super(page, context);
    this.depositButton = page.locator('[class="Button-sc-g18v27-0 fLNopS"]');
    this.confirmDepositButton = page.locator('[class="Button-sc-g18v27-0 jxfiQd"]');
    this.confirmationOfDepositPopup = page.locator('[class="_2ToEd9aNhFrJ-P7X43CyEL"]');
    this.amountField = page.locator('//*[@id="root"]/div/main/div[1]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div/input');
    this.limitPrice = page.locator('//*[@id="root"]/div/main/div[1]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div[1]/div[3]/div[2]/input')
    this.placeLimitOrderButton = page.locator('[class="Button-sc-g18v27-0 jKcMKm"]');
    this.limitPopupToaster = page.locator('[class="_1T_ELsmlDNBuJyhddoh6f0"]');

  }

async makeADeposit() {
    await this.depositButton.click();
    await this.confirmDepositButton.click();
}
  
async placeLimitOrder() {
    await this.amountField.fill(testData.amountOfTokens);
    await this.limitPrice.fill(testData.limitPrice);
    await this.placeLimitOrderButton.click();
}
};