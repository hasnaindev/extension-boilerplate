import browser from 'webextension-polyfill';

/**
 * Sends message to background script as soon as this is clicked
 */

const run = async () => {
  await browser.runtime.sendMessage(null, { type: 'INIT' }, null);
};

run();
