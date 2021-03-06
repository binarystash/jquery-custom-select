[![Build Status](https://travis-ci.org/binarystash/jquery-custom-select.svg?branch=master)](https://travis-ci.org/binarystash/jquery-custom-select)

# jQuery Custom Select

Custom Select is a jQuery plugin for customizing the appearance of select elements.

##Demo

Play with a [fiddle](http://jsfiddle.net/binarystash/4Nuce/) or see a [demo](http://binarystash.github.io/jquery-custom-select/).

## Installation

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/binarystash/jquery-custom-select/master/dist/jquery.custom-select.min.js
[max]: https://raw.github.com/binarystash/jquery-custom-select/master/dist/jquery.custom-select.js

In your webpage:

```html
	<script src="jquery.js"></script>
	<script src="dist/custom-select.min.js"></script>
	<link href="stylesheet" href="css/custom-select.css" />
```
## Usage

1. Suppose you have the following.

	```html
	<select>
		<option>Value 1</option>
		<option>Value 2</option>
	</select>
	```
2. Call the plugin.

	```javascript
	jQuery('select').customSelect();
	```

3. You can customize the appearance by editing custom-select.css.

##Compatibility
Tested on IE8; latest versions of Firefox and Chrome

## Support
Report bugs at https://github.com/binarystash/custom-select/issues.



