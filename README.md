# storybook-qr

Adds QR code for current story to your storybook panel.

I find it helpful to be able to test stories on mobile devices. This makes it very fast & easy, as it creates a QR code that is just the story (no storybook UI.)

On iOS, use the camera app, on Android use ["Barcode Scanner" from ZXing}(https://play.google.com/store/apps/details?id=com.google.zxing.client.android).

## installation

`npm i -D storybook-qr`

Then in your `.storybook/addons.js`:

```js
import qr from 'storybook-qr/register'

qr('http://192.168.0.5:6006/') // The URL that your phone can reach your storybook at
```

Now you should have a new panel labeled "QR CODE" on your storybook.
