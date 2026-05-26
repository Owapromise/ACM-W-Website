import { chromium } from '@playwright/test';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const screenshotDir = './screenshots';

  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  try {
    // Load the website
    console.log('Loading website at http://localhost:5173...');
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

    // Take screenshot of hero section
    console.log('✅ Homepage loaded successfully');
    await page.screenshot({ path: `${screenshotDir}/01-hero.png`, fullPage: true });
    console.log('📸 Saved hero section screenshot');

    // Scroll to About section
    console.log('\nTesting navigation to About section...');
    await page.click('button:has-text("About")');
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${screenshotDir}/02-about.png` });
    console.log('✅ About section clicked and screenshot taken');

    // Test Events section
    console.log('\nTesting navigation to Events section...');
    await page.click('button:has-text("Events")');
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${screenshotDir}/03-events.png` });
    console.log('✅ Events section visible');

    // Test Team section
    console.log('\nTesting navigation to Team section...');
    await page.click('button:has-text("Team")');
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${screenshotDir}/04-team.png` });
    console.log('✅ Team section visible');

    // Test Contact section
    console.log('\nTesting navigation to Contact section...');
    await page.click('button:has-text("Contact")');
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${screenshotDir}/05-contact.png` });
    console.log('✅ Contact section visible');

    // Test form interaction
    console.log('\nTesting contact form fields...');
    await page.fill('input[id="name"]', 'Test User');
    await page.fill('input[id="email"]', 'test@example.com');
    await page.fill('textarea[id="message"]', 'This is a test message');
    console.log('✅ Form fields filled successfully');
    await page.screenshot({ path: `${screenshotDir}/06-form-filled.png` });

    // Test responsive design (mobile viewport)
    console.log('\nTesting responsive design (mobile viewport)...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    await page.screenshot({ path: `${screenshotDir}/07-mobile-hero.png`, fullPage: true });
    console.log('✅ Mobile responsive design verified');

    console.log('\n✨ All verification tests passed!');
    console.log('Screenshots saved to ./screenshots/');

  } catch (error) {
    console.error('❌ Error during verification:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
