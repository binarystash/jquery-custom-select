[![Build Status](https://travis-ci.org/binarystash/jquery-custom-select.svg?branch=master)](https://travis-ci.org/binarystash/jquery-custom-select)

# jQuery Custom Select

Custom Select is a jQuery plugin for customizing the appearance of select elements.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/binarystash/jquery-custom-select/master/dist/jquery.custom-select.min.js
[max]: https://raw.github.com/binarystash/jquery-custom-select/master/dist/jquery.custom-select.js

## Installation

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
	jQuery(function($) {
	  $('select').customSelect();
	});
	```

3. You can customize the appearance by editing custom-select.css.

## Support
Report bugs at https://github.com/binarystash/custom-select/issues.



