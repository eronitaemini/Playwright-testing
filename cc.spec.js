// @ts-check

const { test, expect } = require('@playwright/test');
test.beforeEach(async({page})=>{
    await page.goto('https://www.geeksforgeeks.org/');
    
});

test('Has title GeeksforGeeks testing', async ({ page }) => {
    await expect(page).toHaveTitle(/GeeksforGeeks/);
  });

test('Search bar Testing',async({page})=>{
   await page.fill('.ant-input','Python');
   await page.click('.ant-input-group-addon');
   await page.waitForLoadState('networkidle');

});

test('Dark mode button testing', async({page})=>{
  await page.locator('.gfg-icon_dark-mode').click();
  await expect(page.locator('.custom-background-white')).toHaveAttribute('data-dark-mode', 'true');
});


test('Link direction testing', async({page})=>{

  await page.getByRole('link', {name: 'Machine Learning Tutorial'}).click();
  await expect(page).toHaveURL('https://www.geeksforgeeks.org/machine-learning/?ref=outindfooter');
});

test('Sign in testing', async({page})=>{
  await page.locator('.header-main__signup').click();
  await page.fill('#luser','eronitaemini');
  await page.fill('#password', 'ee1234');
  await page.locator('.signin-button').click();
  const errorAlert=page.locator('.alert-danger');
  await expect(errorAlert).toBeVisible();
 
});


