# ecologize.css

## this project has recently changed its focus

## it is now a sass boilerplate with a reset integrated

![Image of ecology](https://github.com/eversthomas/ecologize.css/blob/master/src/HTMLandPHP/img/ecology_logo-350-trans.png)

### the reset is based on normalize.css

With my modified version of the normalize.css v8.0.1, by [Nicolas Gallagher](https://github.com/necolas)

### Changes

In the scss file: integrate some base variables (soon some standard mixins, f.e. a site wrapper)

1. Integrate some base css variables: fontcolor, linkcolor, linkhovercolor, bodybackgroundcolor (only in scss)
2. Making border-box to the global standard
3. In html: Font-size to 16px as a root element (for rem's), chaged everything to rem's
4. Body: make max-width to 100vw;set the padding to 0; the font-size to 1rem; a standard font-weight to 400; the text color to a variable; text-align: left; the background-color to a variable
5. display: block on header, main, aside, footer
6. img2max-width: 100%and height: auto

## in dist folder you get:

1. in CSS: css, min.css, map.css of the hole sass boiler
2. in CSS: an ecologize.css only, and minified, if you want to use this reset only
3. in HTML: index.html with css integration
4. in PHP: index.php with css integration
5. all sass files, so that you can work with them, if you like

Remember to change the pathes in html and php files to work with css

## in src folder you can work with gulp

see it here later
