# Magento 2 - JS Snippets

## Requirements

- Magento 2.2.X

## How to use

We will provide you with some cases you might find useful when you need to extend a **Magento 2 JavaScript** element.

## Case 1 - Magento 2 Widgets - Modification

_The method is found inside a ```$.widget()```_

__Example__  
You want to modify the method `ajaxSubmit()` in `vendor/magento/module-catalog/view/frontend/js/catalog-add-to-cart.js`

```javascript
define([
    /* [...] */
], function (/* [...] */) {
    'use strict';

    $.widget('mage.catalogAddToCart', {        

        ajaxSubmit: function(form) {
            /* [...] */
        }

    });

    return $.mage.catalogAddToCart;
});
```

#### Go to [Case 1](case1/README.md).

## Case 2

You want to add a new function in `vendor/magento/module-catalog/view/frontend/web/js/...`

```
CODE BLOCK
```

Go to [Case 2](case2/case2.md).

## Authors

* **Mikhaël Bois** - [Email](mailto:mikhaelbois@gmail.com)

## About this project

This project was created to help people play better with JavaScript in the [Magento 2 Framework](https://github.com/magento/magento2).

It will mostly be used for the teams at [Absolunet](https://absolunet.com/), but is made public in case it can help other people! ♥
