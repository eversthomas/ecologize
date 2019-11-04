# ecologize.css (.min.css, .scss, wp-*)

![Image of ecology](https://github.com/eversthomas/ecologize.css/blob/master/img/ecology_logo-350-trans.png)

## based on normalize.css

It's my modified version of the normalize.css v8.0.1, by [Nicolas Gallagher](https://github.com/necolas)

### Changes

In the scss file: integrate some base variables (soon some standard mixins, f.e. a site wrapper)

1. Integrate some base css variables: fontcolor, linkcolor, linkhovercolor, bodybackgroundcolor (only in scss)
2. Making border-box to the global standard
3. In html: Font-size to 16px as a root element (for rem's), chaged everything to rem's
4. Body: make max-width to 100vw;set the padding to 0; the font-size to 1rem; a standard font-weight to 400; the text color to a variable; text-align: left; the background-color to a variable
5. display: block on header, main, aside, footer
6. img2max-width: 100%and height: auto

### for wordpress:

integrate some typical wordpress styles thats needed for the wordpress theme directory

For more information about normalize.css see the text below:
------------------------------------------------------------

# normalize.css

<a href="https://github.com/necolas/normalize.css"><img
  src="https://necolas.github.io/normalize.css/logo.svg" alt="Normalize Logo"
  width="80" height="80" align="right"></a>

> A modern alternative to CSS resets

[![npm][npm-image]][npm-url] [![license][license-image]][license-url]
[![changelog][changelog-image]][changelog-url]
[![gitter][gitter-image]][gitter-url]


**NPM**

```sh
npm install --save normalize.css
```

**CDN**

See https://yarnpkg.com/en/package/normalize.css

**Download**

See https://necolas.github.io/normalize.css/latest/normalize.css


## What does it do?

* Preserves useful defaults, unlike many CSS resets.
* Normalizes styles for a wide range of elements.
* Corrects bugs and common browser inconsistencies.
* Improves usability with subtle modifications.
* Explains what code does using detailed comments.


## Browser support

* Chrome
* Edge
* Firefox ESR+
* Internet Explorer 10+
* Safari 8+
* Opera


## Extended details and known issues

Additional detail and explanation of the esoteric parts of normalize.css.

#### `pre, code, kbd, samp`

The `font-family: monospace, monospace` hack fixes the inheritance and scaling
of font-size for preformatted text. The duplication of `monospace` is
intentional. [Source](https://en.wikipedia.org/wiki/User:Davidgothberg/Test59).

#### `sub, sup`

Normally, using `sub` or `sup` affects the line-box height of text in all
browsers. [Source](https://gist.github.com/413930).

#### `select`

By default, Chrome on OS X and Safari on OS X allow very limited styling of
`select`, unless a border property is set. The default font weight on `optgroup`
elements cannot safely be changed in Chrome on OSX and Safari on OS X.

#### `[type="checkbox"]`

It is recommended that you do not style checkbox and radio inputs as Firefox's
implementation does not respect box-sizing, padding, or width.

#### `[type="number"]`

Certain font size values applied to number inputs cause the cursor style of the
decrement button to change from `default` to `text`.

#### `[type="search"]`

The search input is not fully stylable by default. In Chrome and Safari on
OSX/iOS you can't control `font`, `padding`, `border`, or `background`. In
Chrome and Safari on Windows you can't control `border` properly. It will apply
`border-width` but will only show a border color (which cannot be controlled)
for the outer 1px of that border. Applying `-webkit-appearance: textfield`
addresses these issues without removing the benefits of search inputs (e.g.
showing past searches).

## Contributing

Please read the [contribution guidelines](CONTRIBUTING.md) in order to make the
contribution process easy and effective for everyone involved.


[changelog-image]: https://img.shields.io/badge/changelog-md-blue.svg?style=flat-square
[changelog-url]: CHANGELOG.md
[license-image]: https://img.shields.io/npm/l/normalize.css.svg?style=flat-square
[license-url]: LICENSE.md
[npm-image]: https://img.shields.io/npm/v/normalize.css.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/normalize.css
[gitter-image]: https://img.shields.io/badge/chat-gitter-blue.svg?style=flat-square
[gitter-url]: https://gitter.im/necolas/normalize.css
