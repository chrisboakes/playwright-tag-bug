const { test, expect } = require('@playwright/test');

test.describe('This file should run @foo', () => {
    test('should be run by tag foo', async ({ page }) => {
        expect(true).toBe(true);
    });
});
