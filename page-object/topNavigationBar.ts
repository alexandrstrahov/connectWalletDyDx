import {WebPage} from "./webPage";
import { Locator, Page, BrowserContext} from '@playwright/test';

export class TopNavigationBar extends WebPage {
  readonly metamaskAddress: Locator;

  constructor(page: Page, context?: BrowserContext) {
    super(page, context);
    this.metamaskAddress = page.locator('[class="_13SqfWnXEUlQ2NrDbVDTer"]')
  }
}
