import {WebPage} from "./webPage";
import test, { Locator, Page, BrowserContext, expect} from '@playwright/test';
import { testData } from '../testData/dataForTrading'

export class TradePage extends WebPage {
  readonly depositButton: Locator;
  readonly confirmDepositButton: Locator;
  readonly confirmationOfDepositPopup: Locator;
  readonly amountField: Locator;
  readonly limitPriceField: Locator;
  readonly placeLimitOrderButton: Locator;
  readonly limitPopupToaster: Locator;
  readonly ordersButton: Locator;
  readonly amountColumn: Locator;
  readonly priceColumn: Locator;

  constructor(page: Page, context?: BrowserContext) {
    super(page, context);
    this.depositButton = page.locator('[class="Button-sc-g18v27-0 fLNopS"]');
    this.confirmDepositButton = page.locator('[class="Button-sc-g18v27-0 jxfiQd"]');
    this.confirmationOfDepositPopup = page.locator('[class="_2ToEd9aNhFrJ-P7X43CyEL"]');
    this.amountField = page.locator('(//*[contains(@class, "trade-box")]//input)[1]');
    this.limitPriceField = page.locator('(//*[contains(@class, "trade-box")]//input)[3]')
    this.placeLimitOrderButton = page.locator('[class="Button-sc-g18v27-0 jKcMKm"]');
    this.limitPopupToaster = page.locator('[class="_1T_ELsmlDNBuJyhddoh6f0"]');
    this.ordersButton = page.locator('//*[contains(text(),"Orders")]//div');
    this.amountColumn = page.locator('//*[@class="ALf30MHd8KnZyeBD-Rv3X _2oMYIpmpA6g5vhAtgmdTP_"]/span[1]');
    this.priceColumn = page.locator('//*[contains(@class, "ALf30MHd8KnZyeBD-Rv3X")]//span[contains(text(),"$")]');
   
  }

async clickOnADepositButton() {
    await this.depositButton.click();
}

async confirmDeposit() {
    await this.confirmDepositButton.click();
}
  
async fillingAmountField(amountOfTokens) {
  await this.amountField.fill(amountOfTokens);
  
}

async fillingLimitPriceField (limitPrice) {
  await this.limitPriceField.fill(limitPrice);
}

async placeLimitOrder() {
    await this.placeLimitOrderButton.click();
}

async clickOrdersButton() {
  await this.ordersButton.click();

}

};