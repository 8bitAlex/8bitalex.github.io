import { expect, test } from '@playwright/test'

test.describe('External and internal links', () => {
  test('GitHub social link has correct href', async ({ page }) => {
    await page.goto('/')
    const ghLink = page.getByRole('link', { name: 'GitHub' }).first()
    await expect(ghLink).toHaveAttribute('href', 'https://github.com/8bitAlex')
  })

  test('LinkedIn social link has correct href', async ({ page }) => {
    await page.goto('/')
    const liLink = page.getByRole('link', { name: 'LinkedIn' }).first()
    await expect(liLink).toHaveAttribute('href', 'https://www.linkedin.com/in/8bitalex/')
  })

  test('Buy Me a Coffee social link has correct href', async ({ page }) => {
    await page.goto('/')
    const coffeeLink = page.getByRole('link', { name: 'Buy Me a Coffee' }).first()
    await expect(coffeeLink).toHaveAttribute('href', 'https://www.buymeacoffee.com/8bitalex')
  })

  test('Projects page has anchor quick-links to each project', async ({ page }) => {
    await page.goto('/projects')
    // QuickLinks renders one chip per project, each linking to an in-page anchor
    // matching the project's slug (the section card sets matching id={slug}).
    const anchorChip = page.locator('a[href^="#"]').first()
    await expect(anchorChip).toBeVisible()
    const href = await anchorChip.getAttribute('href')
    expect(href).toMatch(/^#[a-z0-9-]+$/)
  })

  test('404 page home link points to /', async ({ page }) => {
    await page.goto('/this-does-not-exist')
    await expect(page.getByRole('link', { name: 'Go to the home page' })).toHaveAttribute('href', '/')
  })

  test('footer home link points to /', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('footer').getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
  })

  test('footer Blog link points to /blog', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('footer').getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog')
  })

  test('footer Pixelated Realms link points to /projects/pixelated-realms', async ({ page }) => {
    await page.goto('/')
    const link = page.locator('footer').getByRole('link', { name: 'Pixelated Realms Podcast' })
    await expect(link).toHaveAttribute('href', '/projects/pixelated-realms')
  })
})
