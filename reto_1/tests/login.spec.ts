import { expect, test } from '@playwright/test'

//page=fixture

test('login to hrm', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin')
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible()

})

test('login failed to hrm', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin')
    await page.getByRole('textbox', { name: 'Password' }).fill('admin124')
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page.getByRole('alert', { name: '' })).toBeVisible()

})