import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryItems: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async isLoaded() {
    await expect(this.page.locator('.title')).toHaveText(/Products/i);
  }

  async addItemByName(name: string) {
    const item = this.page.locator('.inventory_item').filter({ hasText: name });
    await item.locator('button:has-text("Add to cart")').click();
  }

  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async assertCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }
}
