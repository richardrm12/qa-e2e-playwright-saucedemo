import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';
import { users } from '../../src/data/users';

test('add to cart and checkout', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login(users.standard.username, users.standard.password);
  await inventory.isLoaded();

  await inventory.addItemByName('Sauce Labs Backpack');
  await inventory.assertCartCount(1);
  await inventory.openCart();
  await cart.isLoaded();
  await cart.checkout();

  await checkout.fillInformation('QA', 'Tester', '12345');
  await checkout.finish();
  await checkout.assertComplete();
});
