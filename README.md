# storybook-qr

Adds QR code for current story to your storybook panel.

I find it helpful to be able to test web stories on mobile devices. This makes it very fast & easy, as it creates a QR code that is just the story (no storybook UI.)

On iOS, use the camera app, on Android use ["Barcode Scanner" from ZXing](https://play.google.com/store/apps/details?id=com.google.zxing.client.android).

## installation

`npm i -D storybook-qr`

Then in your `.storybook/addons.js`:

```js
// other stuff in your addons:
import '@storybook/addon-options/register'
import '@storybook/addon-actions/register'
import '@storybook/addon-knobs/register'
import 'storybook-qr/register'

```

The addon will use the current url, so go to your local-wifi address, but if it's incorrect or you are building for another system, you can set the storybook URL with `process.env.STORYBOOK_URL`

You can get your IP with `ifconfig | grep inet` on OSX or linux.

Now you should have a new panel labeled "QR CODE" on your storybook.
