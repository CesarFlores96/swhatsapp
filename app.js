const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');

router.get('/', async (req, res) => {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();
        await page.goto('https://example.com');
        await browser.close();

        res.json({ message: 'Puppeteer se ejecutó correctamente' });
    } catch (error) {
        console.error('Error con Puppeteer:', error);
        res.status(500).json({ error: 'Error ejecutando Puppeteer' });
    }
});

module.exports = router;

