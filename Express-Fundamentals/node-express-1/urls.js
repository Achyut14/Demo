const fs = require('fs-extra');
const axios = require('axios');
const { URL } = require('url');  

const readUrls = async (filename) => {
    try {
        const content = await fs.readFile(filename, 'utf-8');
        return content.split(/\r?\n/);
    } catch (error) {
        console.error(`Error reading file: ${filename}`, error);
        process.exit(1); 
    }
};

const fetchAndSavePage = async (url, filename) => {
    try {
        const response = await axios.get(url);
        await fs.writeFile(filename, response.data);
        console.log(`Saved content from ${url} to ${filename}`);
    } catch (error) {
        console.error(`Error fetching or saving content from ${url}`, error);
    }
};

const main = async () => {
    if (process.argv.length !== 3) {
        console.log("Usage: node urls.js FILENAME");
        process.exit(1);
    }
    const listFilename = process.argv[2];
    const urls = await readUrls(listFilename);

    for (const url of urls) {
        if (url.trim() === '') continue; 
        const urlObj = new URL(url);
        const hostname = urlObj.hostname;
        await fetchAndSavePage(url, hostname);
    }
};

main();



