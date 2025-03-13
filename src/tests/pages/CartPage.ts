import { Page } from "@playwright/test";

/**
 * Represents the Cart Page of the application.
 */
export class CartPage {
  
    private readonly OPEN_CART = '#cartur';
    private readonly PLACE_ORDER_BUTTON = 'button:text("Place Order")';
    private readonly PURCHASE_BUTTON = 'button:text("Purchase")';
    private readonly ORDER_MODAL = '#orderModal';
    private readonly PURCHASE_OK_PANEL = 'body > div.sweet-alert.showSweetAlert.visible'

    private readonly NAME_FIELD = '#name';
    private readonly CITY_FIELD = '#city';
    private readonly COUNTRY_FIELD = '#country';
    private readonly CARD_FIELD = '#card';
    private readonly MONTH_FIELD = '#month';
    private readonly YEAR_FIELD = '#year';

    private _openCartButton: any = null;
    private _placeOrderButton: any = null;
    private _purchaseButton: any = null;
    private _orderModal: any = null;
    private _purchaseOkPanel: any = null;
    private _nameField: any = null;
    private _countryField: any = null;
    private _cityField: any = null; 
    private _cardField: any = null;
    private _monthField: any = null;
    private _yearField: any = null;

    private page: Page;

    /**
     * Constructs a new instance of the CartPage class.
     * @param page - The page object representing the browser page.
     */
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Gets the open cart button element.
     */
    get openCartButton() {
        if (this._openCartButton === null) {
            this._openCartButton = this.page.locator(this.OPEN_CART);
        }
        return this._openCartButton;
    }

    /**
     * Gets the place order button element.
     */
    get placeOrderButton() {
        if (this._placeOrderButton === null) {
            this._placeOrderButton = this.page.locator(this.PLACE_ORDER_BUTTON);
        }
        return this._placeOrderButton;
    }

    /**
     * Gets the purchase button element.
     */
    get purchaseButton() {
        if (this._purchaseButton === null) {
            this._purchaseButton = this.page.locator(this.PURCHASE_BUTTON);
        }
        return this.page.locator(this.PURCHASE_BUTTON);
    }

    /**
     * Gets the order modal panel.
     */
    get orderModal() {
        if (this._orderModal === null) {
            this._orderModal = this.page.locator(this.ORDER_MODAL);
        }   
        return this.page.locator(this.ORDER_MODAL);
    }

    get purchaseOkPanel() {
        if (this._purchaseOkPanel === null) {
            this._purchaseOkPanel = this.page.locator(this.PURCHASE_OK_PANEL);
        }
        return this.page.locator(this.PURCHASE_OK_PANEL);
    }
    /**
     * Gets the name field element.
     */
    get nameField() {
        if (this._nameField === null) {
            this._nameField = this.page.locator(this.NAME_FIELD);
        }
        return this._nameField; 
    }

    /**
     * Gets the country field element.
     */
    get countryField() {
        if (this._countryField === null) {
            this._countryField = this.page.locator(this.COUNTRY_FIELD);
        }
        return this._countryField;
    }

    /**
     * Gets the city field element.
     */
    get cityField() {
        if (this._cityField === null) {
            this._cityField = this.page.locator(this.CITY_FIELD);
        }
        return this._cityField; 
    }

    /**
     * Gets the card field element.
     */ 
    get cardField() {
        if (this._cardField === null) {
            this._cardField = this.page.locator(this.CARD_FIELD);
        }
        return this._cardField; 
    }

    /**
     * Gets the month field element.
     */ 
    get monthField() {
        if (this._monthField === null) {
            this._monthField = this.page.locator(this.MONTH_FIELD);
        }
        return this._monthField;    
    }

    /**
     * Gets the year field element.
     */ 
    get yearField() {
        if (this._yearField === null) {
            this._yearField = this.page.locator(this.YEAR_FIELD);
        }
        return this._yearField;         
    }

    /**
     * Opens the cart.
     */
    async openCart() {
        await this.openCartButton.click();
    }

    /**
     * Places an order.
     */
    async placeOrder() {
        this.placeOrderButton.click();
    }

    /**
     * Fills the purchase data in the form.
     * @param name - The name of the purchaser.
     * @param country - The country of the purchaser.
     * @param city - The city of the purchaser.
     * @param card - The card number of the purchaser.
     * @param month - The expiration month of the card.
     * @param year - The expiration year of the card.
     */
    async fillPurchaseData(
        name: string, 
        country: string, 
        city: string, 
        card: string, 
        month: string, 
        year: string) {
            await this.nameField.fill(name);
            await this.countryField.fill(country);
            await this.cityField.fill(city);
            await this.cardField.fill(card);
            await this.monthField.fill(month);
            await this.yearField.fill(year);
    }

    /**
     * Completes the purchase.
     */
    async completePurchase() {
        await this.purchaseButton.click();
    }

    /**
     * Checks if the purchase was successful.
     */
    async isPurchaseSuccessful() {
        await this.page.waitForSelector(this.PURCHASE_OK_PANEL);
        return this.purchaseOkPanel.isVisible();
    }
}
