import { test, expect } from "@playwright/test";

test.describe("Inshaa Engineering Homepage & Core Flow", () => {
  test("should load the homepage with correct Arabic title and syndicate ticker", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/مكتب إنشاء للاستشارات الهندسية/);

    const ticker = page.locator("text=سجل استشاري نقابة المهندسين المصرية");
    await expect(ticker).toBeVisible();

    const heroHeading = page.locator("h1");
    await expect(heroHeading).toContainText("استشارات هندسية وتصميم معماري");
  });

  test("should interact with the BIM Layer Viewer", async ({ page }) => {
    await page.goto("/");
    
    // Click on Structural layer
    const structTab = page.locator("button:has-text('المخطط والنموذج')");
    if (await structTab.isVisible()) {
      await structTab.click();
      await expect(page.locator("text=ETABS / SAFE")).toBeVisible();
    }
  });

  test("should interact with the Cost Estimator and update fees", async ({ page }) => {
    await page.goto("/calculator");
    await expect(page.locator("h1")).toContainText("حاسبة تكاليف ومقايسات المشروعات");

    // Click on commercial project
    const commercialBtn = page.locator("button:has-text('مبنى تجاري')");
    await commercialBtn.click();

    // Verify WhatsApp button is populated
    const whatsappLink = page.locator("a:has-text('إرسال المقايسة لواتساب')");
    await expect(whatsappLink).toHaveAttribute("href", /wa\.me/);
  });

  test("should navigate to services and view service details", async ({ page }) => {
    await page.goto("/services");
    await expect(page.locator("h1")).toContainText("خدمات استشارية متكاملة");

    // Click on first service
    await page.locator("a:has-text('تفاصيل ومراحل العمل')").first().click();
    await expect(page.locator("h1")).toBeVisible();
  });
});
