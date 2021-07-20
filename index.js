import axios from 'axios';
import URL from 'url-parse';

const facebookUrl = process.argv[2];
const pageName = new URL(facebookUrl).pathname.slice(1);

(async () => {
  const url = `https://m.facebook.com/${pageName}`;

  try {
    const { data: html } = await axios.get(url);

    const matches = html.match(/(page_id\.)+\d+/g);

    console.log(matches[0].replace(/page_id\./, ""));
  } catch (e) {
    console.log('Facebook page not found.');
  }
})();
