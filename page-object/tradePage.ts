import { WebPage } from "./webPage";
import test, { Locator, Page, BrowserContext, expect } from "@playwright/test";
import { testData } from "../testData/dataForTrading";

export class TradePage extends WebPage {
  readonly depositButton: Locator;
  readonly confirmDepositButton: Locator;
  readonly confirmationOfDepositPopup: Locator;
  readonly amountField: Locator;
  readonly limitPriceField: Locator;
  readonly placeLimitOrderButton: Locator;
  readonly popupToaster: Locator;
  readonly ordersButton: Locator;
  readonly amountColumn: Locator;
  readonly priceColumn: Locator;
  readonly cancelOredrButton: Locator;
  readonly noOrdersText: Locator;

  constructor(page: Page, context?: BrowserContext) {
    super(page, context);
    this.depositButton = page.locator('[class="Button-sc-g18v27-0 fLNopS"]');
    this.confirmDepositButton = page.locator(
      '[class="Button-sc-g18v27-0 jxfiQd"]'
    );
    this.confirmationOfDepositPopup = page.locator(
      '[class="_2ToEd9aNhFrJ-P7X43CyEL"]'
    );
    this.amountField = page.locator(
      '(//*[contains(@class, "trade-box")]//input)[1]'
    );
    this.limitPriceField = page.locator(
      '(//*[contains(@class, "trade-box")]//input)[3]'
    );
    this.placeLimitOrderButton = page.locator(
      '[class="Button-sc-g18v27-0 jKcMKm"]'
    );
    this.popupToaster = page.locator('[class="_1T_ELsmlDNBuJyhddoh6f0"]');
    this.ordersButton = page.locator('//*[contains(text(),"Orders")]//div');
    this.amountColumn = page.locator(
      '//*[@class="KppR3Fmfb5DtjqHBvq0_h"]/div[1]/div[3]/div/span[1]/span'
    );
    this.priceColumn = page.locator(
      '//*[@class="KppR3Fmfb5DtjqHBvq0_h"]/div[1]/div[4]/div/span'
    );
    this.cancelOredrButton = page.locator(
      '//*[@class="KppR3Fmfb5DtjqHBvq0_h"]/div[1]/div[7]/div/div/div[1]/div'
    );
    this.noOrdersText = page.locator('[class="_1tKGP2FGCUh6cxrk-YWdeo"]');
  }

  async clickOnADepositButton() {
    await this.depositButton.click();
  }

  async confirmDeposit() {
    await this.confirmDepositButton.click();
  }

  async fillAmountField(amountOfTokens) {
    await this.amountField.fill(amountOfTokens);
  }

  async fillLimitPriceField(limitPrice) {
    await this.limitPriceField.fill(limitPrice);
  }

  async placeLimitOrder() {
    await this.placeLimitOrderButton.click();
  }

  async clickOrdersButton() {
    await this.ordersButton.click();
  }

  async cancelPreviusCanceledOrder() {
    await this.cancelOredrButton.click();
  }
}
