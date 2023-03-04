import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'

test('Signup and Signin flow test', async ({ page }) => {
  const username = faker.internet.userName()
  await page.goto('/')
  await page.getByRole('link', { name: 'Login' }).click()
  await page.getByText('Register', { exact: true }).click()
  await page.getByLabel('Username').fill(username)
  await page.getByLabel('Password').fill('youshallpass')

  await page.getByRole('button', { name: 'Submit' }).click()
  // test if we got redirected to the dashboard page
  await expect(page).toHaveURL(/.*dashboard/)

  await page.getByRole('button', { name: 'Logout' }).click()
  await expect(page).toHaveURL(/.*login/)

  await page.getByLabel('Username').fill(username)
  await page.getByLabel('Password').fill('youshallpass')
  await page.getByRole('button', { name: 'Submit' }).click()
  await expect(page).toHaveURL(/.*dashboard/)
})
