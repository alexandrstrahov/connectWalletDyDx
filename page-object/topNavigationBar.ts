import {WebPage} from "./webPage";
import { Locator, Page, BrowserContext} from '@playwright/test';

export class TopNavigationBar extends WebPage {
  readonly farmingLink: Locator;

  constructor(page: Page, context?: BrowserContext) {
    super(page, context);
    this.farmingLink = page.locator('[src="/wallets/metamask.svg"]')
  }
}
