import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { users } from '../../src/data/users';

test.describe('Login', () => {
  test('logs in with valid user', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login(users.standard.username, users.standard.password);
    await inventory.isLoaded();
  });

  test('shows error with invalid password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.standard.username, 'wrong_password');
    await login.assertErrorContains('Username and password do not match');
  });
});
