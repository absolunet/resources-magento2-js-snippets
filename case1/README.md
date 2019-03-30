# Case 1 - Magento 2 Widgets - Modification

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

### Scenario 1 - Via a custom THEME

There are two ways to achieve this.  
You can find the Widget's name in the original module's ```requirejs-config.js```.

##### 1 - Using a mixin (Recommended)
- [THEME/MODULE/requirejs-config.js](app/design/frontend/Absolunet/theme/Magento_Catalog/requirejs-config.js)
- [THEME/MODULE/web/js/catalog-add-to-cart-theme-mixin.js](app/design/frontend/Absolunet/theme/Magento_Catalog/web/js/catalog-add-to-cart-theme-mixin.js)

_CAUTION - The mixin's filename must be different from the original file._

##### 2 - Overriding the file (NOT Recommended)
- [THEME/MODULE/web/js/catalog-add-to-cart.js](app/design/frontend/Absolunet/theme/Magento_Catalog/web/js/catalog-add-to-cart.js)
- [THEME/MODULE/requirejs-config.js](app/design/frontend/Absolunet/theme/Magento_Catalog/requirejs-config.js) (Optional - If different filename)
- [THEME/MODULE/web/js/catalog-add-to-cart-theme-override.js](app/design/frontend/Absolunet/theme/Magento_Catalog/web/js/catalog-add-to-cart-theme-override.js) (Optional - If different filename)

_The filename of the override should be the same as the original file._  
_If the filename has to be different, use RequireJS to specify a new name._

When you absolutely have to override the file, don't forget to add ```// comments``` to make it clear what was changed.  
This will help you update your files once the original code needs to be updated.

```
// Absolunet Custom Code
CUSTOM CODE
// /Absolunet Custom Code
```

### Scenario 2 - Via a custom MODULE

There are two ways to achieve this.  
You can find the Widget's name in the original module's ```requirejs-config.js```.

_CAUTION - Be sure to add the original module to your ```<sequence>``` in ```etc/module.xml```._  
[CODE/MODULE/etc/module.xml](app/code/Absolunet/Module/etc/module.xml)

##### 1 - Using a mixin (Recommended)
- [CODE/MODULE/view/frontend/requirejs-config.js](app/code/Absolunet/Module/view/frontend/requirejs-config.js)
- [CODE/MODULE/view/frontend/web/js/catalog-add-to-cart-module-mixin.js](app/code/Absolunet/Module/view/frontend/web/js/catalog-add-to-cart-module-mixin.js)

##### 2 - Overriding the file (NOT Recommended)
- [CODE/MODULE/view/frontend/requirejs-config.js](app/code/Absolunet/Module/view/frontend/requirejs-config.js)
- [CODE/MODULE/view/frontend/web/js/catalog-add-to-cart-module-override.js](app/code/Absolunet/Module/view/frontend/web/js/catalog-add-to-cart-module-override.js)

When you absolutely have to override the file, don't forget to add ```// comments``` to make it clear what was changed.  
This will help you update your files once the original code needs to be updated.

```
// Absolunet Custom Code
CUSTOM CODE
// /Absolunet Custom Code
```

### A word about Magento 2 Mixins

>A Magento 2 RequireJS “mixin” allows you to programmatically listen for the initial instantiation of any RequireJS module and manipulate that module before returning it.

Using a mixin on the file prevents having to override the original file.  
You can then pinpoint what method you want to modify.

**Sources**

- [Magento - JavaScript mixins](https://devdocs.magento.com/guides/v2.3/javascript-dev-guide/javascript/js_mixins.html)
- [Alan Storm - The Curious Case of Magento 2 Mixins](https://alanstorm.com/the-curious-case-of-magento-2-mixins/)

### A word about extending a Widget

Technically, you can also extend a Widget and apply your modifications.
However, extensions are normally used on new features that are based on existing Widgets.
That is why we recommend using mixins for any modifications.

### A word about RequireJS

- It manages the dependencies between JavaScript files and improves the speed and quality of the code.
- It combines and minifies the modules into one script for an optimized experience.
- It reduces code complexity in large applications.
- It gathers different JavaScript files from different modules at the time of compilation.
- It allows for easy debugging as it loads the files from plain script tags.

**Sources**

- [Alan Storm - Magento 2 and RequireJS](https://alanstorm.com/magento_2_and_requirejs/)
- [Magento - JavaScript resources in Magento](https://devdocs.magento.com/guides/v2.3/javascript-dev-guide/javascript/js-resources.html)
- [RequireJS Tutorial](https://www.tutorialspoint.com/requirejs/)
