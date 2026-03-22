import { expect, test } from '@playwright/test'

test.describe('Home page', () => {
  test('renders hero banner with heading', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Alex Salerno')
  })

  test('renders "Software Engineer." in red', async ({ page }) => {
    await page.goto('/')
    const span = page.locator('span.text-red-700').first()
    await expect(span).toContainText('Software Engineer.')
  })

  test('renders About Me section', async ({ page }) => {
    await page.goto('/')
    await page.getByText('About Me').first().scrollIntoViewIfNeeded()
    await expect(page.getByText('About Me').first()).toBeVisible()
  })

  test('renders Blog Posts section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Blog Posts')).toBeVisible()
  })

  test('renders Skills & Technology section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Skills & Technology').first()).toBeVisible()
  })

  test('renders Values section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Values').first()).toBeVisible()
  })

  test('renders Projects section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Projects').first()).toBeVisible()
  })

  test('page has correct document title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Alex Salerno/)
  })

  test('renders Perfection quote', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText(/Perfection is achieved/)).toBeVisible()
  })
})
