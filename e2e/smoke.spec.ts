import { test, expect } from '@playwright/test'

test('Website loads and navigation works', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const heading = page.getByRole('heading', {
    name: 'Build Real World Projects To Learn Web Development',
  })
  await expect(heading).toBeVisible()

  await page
    .getByRole('listitem')
    .filter({ hasText: 'Tutorials' })
    .getByRole('link', { name: 'Tutorials' })
    .click()

  await expect(page).toHaveURL(/.*tutorials/)

  await page.getByRole('link', { name: 'Tips' }).click()
  await expect(page).toHaveURL(/.*tips/)
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Blog' })
    .getByRole('link', { name: 'Blog' })
    .click()
  await expect(page).toHaveURL(/.*blog/)

  await page.getByRole('link', { name: 'Login' }).click()
  await expect(page).toHaveURL(/.*login/)
  const loginHeading = page.getByRole('heading', {
    name: 'Sign in to your account',
  })
  await expect(loginHeading).toBeVisible()
})
