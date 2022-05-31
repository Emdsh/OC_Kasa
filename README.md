# Kasa

## How to run the development environment

### 1. Clone the project locally:
HTTPS: `git clone https://github.com/Emdsh/OC_Kasa.git`\
SSH: `git clone git@github.com:Emdsh/OC_Kasa.git`

### 2. Go to the `dev` branch
`git checkout dev`

### 3. Download all the dependencies
`npm install` or `npm i`

### 4. Prepare your browser
As the project was developed with a JSON mockup of the back-end, and in order to take advantage of it without having to copy it locally, we need to temporarily disable CORS on our browser.

We'll be using Chrome on Windows ([click here for the guide's source](https://alfilatov.com/posts/run-chrome-without-cors/)):

1. Create a new shortcut for Chrome
2. Edit the target to be `"[PATH_TO_CHROME]\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp`
3. Save

It's recommended to rename the new shortcut to **`UNSAFE`** to not confuse the "safe" and "unsafe" shortcuts.

**If Chrome is your default browser and is already running when you launch the project, you'll need to close it before launching the `UNSAFE` shortcut so CORS is effectively disabled.**

You may run into an error when launching Chrome with the `UNSAFE` shortcut regarding the inability to write data to its temp directory, you can safely ignore it.

CORS is automatically re-enabled once you close the "unsafe" browser and open Chrome again with a "safe" shortcut.

### 5. Run `npm start`
If the project doesn't automatically open in the browser, go to `http://localhost:3000/`

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
