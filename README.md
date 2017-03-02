# hamfull
---
An hamburger-like menu, when you click over it the menu appears in fullwindow. No javascript libraries requested. Written in SASS.

## Demo & Examples
You can found a demo page in [this repository](https://github.com/NeckersBOX/hamfull-menu/blob/master/demo.html).

To get it locally:
```
git clone https://github.com/NeckersBOX/hamfull-menu
```
than open `demo.html` in your browser.

## Installation
There are three ways to get **hamfull**:
1. Clone this git repository and copy the minified css `hamfull.min.css` inside your project.
2. Configure the options inside `_config.scss` than do `gulp sass`.
3. With npm `npm install --save hamfull-menu`.

## Usage
First step, link to the css file.

```
<link rel="stylesheet" href="/path/to/hamfull.min.css" />
```

Next step, build your menu:
```
<input type="checkbox" id="hamfull-expand" />
<label class="hamfull" for="hamfull-expand">
  <i class="material-icons">menu</i>
  <ul>
    <li><a href="#">page..</a></li>
    <li><a href="#">page..</a></li>
    ...
  </ul>
</label>
```

The first `input` and the `label` tags were here for [this reason](http://stackoverflow.com/a/32721572). Instead of _material-icons_ you can use every library you want, the only important thing is to use always the `<i></i>` tag.

## Notes
To configure the style (color, animations duration, ...) see the `sass/_config.scss` file.
