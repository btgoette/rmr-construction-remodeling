const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const readline = require('readline');

// Function to recursively get all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

// Function to filter out non-page files
function filterPageFiles(files) {
    return files.filter((file) => {
        const fileName = path.basename(file);
        return fileName !== '_app.jsx' && fileName !== '_document.jsx' && fileName.endsWith('.jsx');
    });
}

// Function to get the list of pages
function getPagesList() {
    // Directory where pages are located
    const pagesDirectory = path.join(process.cwd(), 'pages');

    // Get all files in the pages directory
    const allFiles = getAllFiles(pagesDirectory);

    // Filter out non-page files
    const pageFiles = filterPageFiles(allFiles);

    // Return the list of page files
    return pageFiles.map((file) => {
        // Remove the pages directory and extension
        let url = file.replace(pagesDirectory, '').replace('.jsx', '').replace(/\\/g, '/'); // Replace backslashes with forward slashes for consistency

        // Check if the page has an index.jsx file and remove '/index' from URL
        if (path.basename(file) === 'index.jsx' && url !== '/index') {
            url = url.replace('/index', '');
        }

        // Ensure each URL ends with a trailing slash
        if (!url.endsWith('/')) {
            url += '/';
        }

        return url;
    });
}

// Function to generate sitemap
async function generateSitemap(hostname) {
    // Initialize sitemap stream
    const stream = new SitemapStream({ hostname }); // Use the hostname provided by the user

    // Get the list of pages
    const pages = getPagesList();

    // Add pages to sitemap
    pages.forEach((page) => {
        stream.write({ url: page, changefreq: 'daily', priority: 0.7 }); // Adjust changefreq and priority as needed
    });

    // End stream
    stream.end();

    // Return the sitemap as string
    return streamToPromise(stream).then((sitemap) => sitemap.toString());
}

// Create a readline interface to prompt the user for the hostname
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the hostname (e.g., https://example.com): ', (hostname) => {
    generateSitemap(hostname)
        .then((sitemap) => {
            fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
            console.log('Sitemap generated successfully!');
        })
        .catch((error) => {
            console.error('Error generating sitemap:', error);
        })
        .finally(() => {
            rl.close();
        });
});
