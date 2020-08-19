import browser from 'webextension-polyfill';

/**
 * Background script recieves this message as soon as popup is clicked
 */

browser.runtime.onMessage.addListener(({ type }) => {
  switch (type) {
    case 'INIT':
      return 'initialized';
    default:
      return 'invalid action';
  }
});
