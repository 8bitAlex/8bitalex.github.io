import { expect, test } from '@playwright/test'

test.describe('Projects', () => {
  test('projects listing page renders', async ({ page }) => {
    await page.goto('/projects')
    await expect(page.getByText('Projects').first()).toBeVisible()
  })

  test('at least one project title is visible', async ({ page }) => {
    await page.goto('/projects')
    await expect(page.getByRole('heading', { level: 2 }).first()).toBeVisible()
  })

  test('each project has a "Find out more" link', async ({ page }) => {
    await page.goto('/projects')
    const links = page.getByRole('link', { name: 'Find out more' })
    await expect(links.first()).toBeVisible()
  })

  test('clicking "Find out more" navigates to project detail', async ({ page }) => {
    await page.goto('/projects')
    await page.getByRole('link', { name: 'Find out more' }).first().click()
    await expect(page).toHaveURL(/\/projects\/.+/)
  })

  test('Pixelated Realms project page renders', async ({ page }) => {
    await page.goto('/projects/pixelated-realms')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('Pixelated Realms page shows title containing "Pixelated"', async ({ page }) => {
    await page.goto('/projects/pixelated-realms')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Pixelated')
  })

  test('project detail page renders status', async ({ page }) => {
    await page.goto('/projects/pixelated-realms')
    await expect(page.getByText(/Ongoing|Completed|Active/i).first()).toBeVisible()
  })

  test('website project page renders', async ({ page }) => {
    await page.goto('/projects/website')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('alderman project page renders', async ({ page }) => {
    await page.goto('/projects/alderman')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })
})
