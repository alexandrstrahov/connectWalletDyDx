import { WebPage } from "./webPage";
import { Locator, Page, BrowserContext, expect } from "@playwright/test";
import { MetamaskPage } from "./actions/metamaskPage";
import { timeouts } from "../helpers/timeouts";

export class ConnectWalletScreen extends WebPage {
  readonly connectWalletButton: Locator;
  readonly connectViaMetamaskButton: Locator;
  readonly connectViaMetamaskButtonSelector: string = '[src="/wallets/metamask.svg"]';
  readonly getStartedButton: Locator;
  readonly metamaskPage: MetamaskPage;
  readonly connectedStatusButton: Locator;
  readonly helpPopUpButton: Locator;
  readonly loaderIcon: Locator;
  readonly emptySpaceClosePopup: Locator;
  readonly networkDropdown: Locator;
  readonly showHideNetworkButton: Locator;
  readonly sendRequestsButton: Locator;
  readonly sendRequestsButtonSelector: string = '[class="LinkWalletStep__ButtonContents-sc-90zxqz-8 kNuNYP"]';
  readonly iAgreeButton: Locator;

  constructor(page: Page, context?: BrowserContext) {
    super(page, context);
    this.metamaskPage = new MetamaskPage(page, context);
    this.connectWalletButton = page.locator('[class="Button-sc-g18v27-0 jqhWOT"]');
    this.connectViaMetamaskButton = page.locator(this.connectViaMetamaskButtonSelector);
    this.getStartedButton = page.locator('[class="StyledSteps__ButtonFooter-sc-hv5gtc-1 fPVeBR"]');
    this.connectedStatusButton = page.locator('[id="web3-status-connected"]');
    this.helpPopUpButton = page.locator('[data-testid="launcher"]');
    this.loaderIcon = page.locator('img[alt="Loading..."]');
    this.sendRequestsButton = page.locator(this.sendRequestsButtonSelector);
    this.iAgreeButton = page.locator('[class="Button-sc-g18v27-0 bXfrUi"]');

  }

  async clickConnectWalletButton() {
    await this.connectWalletButton.click();
  }

  async clickGetStartedButton() {
    await this.getStartedButton.click();
  }

  async clickConnectViaMetamaskButton() {
    await this.connectViaMetamaskButton.click();
  }

  async connectpopupMetamask(openedMetamaskPage: Page) {
    await Promise.all([
      this.context
        .waitForEvent("page", { timeout: timeouts.shortTimeout })
        .then(async () => {
          this.context.pages()[3];
          await this.metamaskPage.connectMetamask();
        })
        .catch(async () => {
          this.context.pages()[3];
          await this.metamaskPage.connectMetamask();
        }),

      openedMetamaskPage.click(
        this.metamaskPage.metamaskElements.connectMetamaskPopUpButton
      ),
    ]);
  }

  async signpopupMetamask(openedMetamaskPage: Page) {
    await Promise.all([
      this.context
        .waitForEvent("page", { timeout: timeouts.shortTimeout })
        .then(async () => {
          this.context.pages()[3];
          await this.metamaskPage.signMetamask();
        })
        .catch(async () => {
          this.context.pages()[3];
          await this.metamaskPage.signMetamask();
        }),

      openedMetamaskPage.click(
        this.metamaskPage.metamaskElements.signMetamaskRequestPopUpButton
      ),
    ]);
  }

  async connectMetaMask() {
    await this.clickConnectWalletButton();
    await this.clickGetStartedButton()

    const metamaskPopUpPage = await this.openNewPageByClick(
      this.page,
      this.connectViaMetamaskButtonSelector
    );
    await metamaskPopUpPage.click(
      this.metamaskPage.metamaskElements.nextMetamaskPopUpButton
    );
    
    await this.connectpopupMetamask(metamaskPopUpPage);
    // await this.iAgreeButton.click();

    const firstsignmetamaskPopUpPage = await this.openNewPageByClick(
      this.page,
      this.sendRequestsButtonSelector
    );

    const secondsignmetamaskPopUpPage = await this.openNewPageByClick(
      firstsignmetamaskPopUpPage, 
      this.metamaskPage.metamaskElements.signMetamaskRequestPopUpButton
      );
    await secondsignmetamaskPopUpPage.click(
      this.metamaskPage.metamaskElements.signMetamaskRequestPopUpButton
    );

  }
}
