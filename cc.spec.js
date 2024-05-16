// @ts-check

const { test, expect } = require('@playwright/test');
test.beforeEach(async({page})=>{
    await page.goto('https://www.geeksforgeeks.org/');
    
});

test('has title GeeksforGeeks', async ({ page }) => {
    await expect(page).toHaveTitle(/GeeksforGeeks/);
  });

test('Testing the search bar',async({page})=>{
   await page.fill('.ant-input','Python');
   await page.click('.ant-input-group-addon');
   await page.waitForLoadState('networkidle');

});

test('Test dark mode button', async({page})=>{
    await page.click('gfg-icon_dark-mode');
    await page.waitForLoadState('networkidle');
    const isDarkModeEnabled = await page.evaluate(() => {
        const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
        return isDarkMode(bodyBackgroundColor);
      });
    
      expect(isDarkModeEnabled).toBe(true);
    });
    
    function isDarkMode(color) {
      const rgb = color.match(/\d+/g).map(Number);
      const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
      return brightness <= 125;
    }


test('Testing article navigation', async({page})=>{
    await page.goto('https://www.geeksforgeeks.org/data-structures/');
    

    await page.click('a[href="#advanced-data-structures"]');
    await page.waitForTimeout(1000);
    const isSectionInView = await page.evaluate(() => {
        const section = document.getElementById('#advanced-data-structures');
        const bounding = section.getBoundingClientRect();
        return (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      });
    
      // Assert that the specified section is in view
      expect(isSectionInView).toBeTruthy();


});



  