import { Page } from "@playwright/test";

/**
 * Represents the product detail page.
 */
export class ProductDetailPage {
  private readonly ADD_TO_CHAR_BUTTON = 'text=Add To Cart';
  private page: Page;
  private _addToChartButton: any = null;

  /**
   * Constructs a new instance of the ProductDetailPage class.
   * @param page The page object associated with the product detail page.
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Gets the "Add to Cart" button element.
   * @returns The "Add to Cart" button element.
   */
  get addToChartButton() {
    if (this._addToChartButton === null) {
      this._addToChartButton = this.page.locator(this.ADD_TO_CHAR_BUTTON);
    }
    return this._addToChartButton;
  }

  /**
   * Adds the product to the cart.
   */
  async addProductToCart() {
    await this.page.waitForLoadState();
    await this.addToChartButton.click();
  }
}
