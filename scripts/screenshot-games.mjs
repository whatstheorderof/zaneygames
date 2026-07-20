import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const games = [
  { slug: "zaney-sudoku", url: "https://www.zaneysudoku.com/" },
  { slug: "zaney-tarot", url: "https://www.zaneytarot.com/" },
  { slug: "zaney-links", url: "https://zaneylinks.vercel.app/" },
  { slug: "zaney-cube", url: "https://zaneycube.vercel.app/" },
  { slug: "zaney-word", url: "https://zaneyword.vercel.app/" },
  { slug: "zaney-search", url: "https://zaneysearch.vercel.app/" },
  { slug: "zaney-logic", url: "https://zaneylogic.vercel.app/" },
  { slug: "zaney-strands", url: "https://zaneystrands.vercel.app/" },
  { slug: "zaney-kakuro", url: "https://zaneykakuro.vercel.app/" },
  { slug: "zaney-aquarium", url: "https://zaneyaquarium.vercel.app/" },
  { slug: "say-more", url: "https://saymoregame.com/" },
  { slug: "saz-sky-roads", url: "https://sazskyroads.vercel.app/" },
  { slug: "witch-please", url: "https://witchplease.vercel.app/" },
  { slug: "dbl-games", url: "https://dblgames.vercel.app/" },
];

const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "screenshots");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const game of games) {
  const dest = path.join(outDir, `${game.slug}.png`);
  console.log(`Capturing ${game.url} -> ${dest}`);
  try {
    await page.goto(game.url, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(1000);
    const skipButton = page.getByRole("button", { name: /^skip$/i });
    if (await skipButton.isVisible().catch(() => false)) {
      await skipButton.click();
      await page.waitForTimeout(300);
    }
    const startButton = page.getByText(/^start$/i);
    if (await startButton.isVisible().catch(() => false)) {
      await startButton.click();
      await page.waitForTimeout(1500);
    }
    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);
    await page.screenshot({ path: dest });
  } catch (err) {
    console.error(`Failed to capture ${game.url}:`, err.message);
  }
}

await browser.close();
console.log("Done.");
