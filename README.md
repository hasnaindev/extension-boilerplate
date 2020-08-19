# Extension Boilerplate

You can use this boilerplate to create browser extensions that works almost on all browsers but the main focus is on chrome and firefox.

## Structure

The boilerplate structure is fairly straight forward. It is a webpack based boilerplate that has background script, content script and popup script initialized into it. You can also import styles into your script files if you want to include styles.

## More About Extension Development

If you want to know more about extension development, please visit [Google Extension Development Tutorial](https://developer.chrome.com/extensions/getstarted).

Things to keep in mind if you want to get started with extension development.

1. Know your `manifest.json`. This is an essential files that contains meta data about your extensions. Browsers can't run your extension without a manifest file.

2. `Popup`. Whenever you install extension, the extension icon appears right next to the address bar in the browser. Whenever you click on the icon, a popup comes out, well, that is your extension popup.

3. `Content Scripts`. These are scripts that are injected into webpages. Let's say you want to create an extension that scraps useful pieces of codes from stackoverflow, you can use inject content scripts into browser whenever you're on stackoverflow, and simply grab whatever you need using the good'ol DOM manipulation.

4. `Background Scripts`. These run independently of any browser tabs. Background scripts runs in the background of your browser whenever your browser is opened.

#### Happy Hacking