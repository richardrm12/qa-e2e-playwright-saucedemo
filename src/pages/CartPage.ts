import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded() {
    await expect(this.page.locator('.title')).toHaveText(/Your Cart/i);
  }

  async checkout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}
