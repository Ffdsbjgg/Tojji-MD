import { ApifyClient } from 'apify-client';

// Initialize the ApifyClient with your Apify API token
const client = new ApifyClient({
    token: '<YOUR_API_TOKEN>',
});

// Prepare Actor input
const input = {
    "startUrls": [بنترست.]
        "https://www.pinterest.com/pin/1054827543951238554/",
        "https://www.pinterest.com/ideas/beauty/935541271955/",
        "https://www.pinterest.com/dudadelsanto/",
        "https://www.pinterest.com/dudadelsanto/nail-inspo/",
        "https://www.pinterest.com/search/pins/?q=Valentine%E2%80%99s%20Nail%20Art&rs=hub_page"
    ],
    "maxItems": 20,
    "endPage": 1,
    "extendOutputFunction": ($) => { return {} },
    "customMapFunction": (object) => { return {...object} },
    "proxy": {
        "useApifyProxy": true
    }
};

(async () => {
    // Run the Actor and wait for it to finish
    const run = await client.actor("epctex/pinterest-scraper").call(input);

    // Fetch and print Actor results from the run's dataset (if any)
    console.log('Results from dataset');
    console.log(`💾 Check your data here: https://console.apify.com/storage/datasets/${run.defaultDatasetId}`);
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item);
    });
})();

// 📚 Want to learn more 📖? Go to → https://docs.apify.com/api/client/js/docs
