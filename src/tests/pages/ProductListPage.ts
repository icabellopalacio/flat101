import { Page } from "@playwright/test";

/**
 * Represents a page that displays a list of products.
 */
export class ProductListPage {

  private readonly PRODUCT_LIST_ID = '#tbodyid a';
  private _productList: any = null;
  private page: Page;

  /**
   * Constructs a new instance of the ProductListPage class.
   * @param page - The page object representing the web page.
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Gets the product list element.
   * @returns The product list element.
   */
  get productList() {
    if (this._productList === null) {
        this._productList = this.page.locator(this.PRODUCT_LIST_ID);
    }
    return this._productList;
  }

  /**
   * Selects the first product in the list.
   */
  async selectFirstProduct() {
    await this.productList.first().click(); 
  }
}
