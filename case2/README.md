# Case 2 - Magento 2 Components - Modification

_The method is found inside a ```Component.extend()```_

__Example__  
You want to modify the method `getCartItems()` in `vendor/magento/module-checkout/view/frontend/web/js/view/minicart.js`

```javascript
define([
    /* [...] */
], function(/* [...] */) {
    'use strict';

    return Component.extend({

        getCartItems: function() {
            /* [...] */
        }

    });
});
```
In this case, the component was initialised via a layout.
```xml
<block class="Magento\Checkout\Block\Cart\Sidebar" name="minicart" as="minicart" after="logo" template="Magento_Checkout::cart/minicart.phtml">
    <arguments>
        <argument name="jsLayout" xsi:type="array">
            <item name="types" xsi:type="array"/>
            <item name="components" xsi:type="array">
                <item name="minicart_content" xsi:type="array">
                    <item name="component" xsi:type="string">Magento_Checkout/js/view/minicart</item>
```
[Magento/Checkout/view/frontend/layout/default.xml](https://github.com/magento/magento2/blob/2.2.8/app/code/Magento/Checkout/view/frontend/layout/default.xml)

### Scenario 1 - Via a custom THEME

There are two ways to achieve this.

##### 1 - Using a mixin (Recommended)
- [THEME/MODULE/requirejs-config.js](app/design/frontend/Absolunet/theme/Magento_Checkout/requirejs-config.js)
- [THEME/MODULE/web/js/view/minicart-theme-mixin.js](app/design/frontend/Absolunet/theme/Magento_Checkout/web/js/view/minicart-theme-mixin.js)

_Recommendation - The mixin's filename should be different from the original file._  
Using a mixin on the file prevents having to override the original file.  
You can then pinpoint what method you want to modify.

##### 2 - Overriding the file (NOT Recommended)
- [THEME/MODULE/requirejs-config.js](app/design/frontend/Absolunet/theme/Magento_Checkout/requirejs-config.js)
- [THEME/MODULE/web/js/view/minicart-theme-override.js](app/design/frontend/Absolunet/theme/Magento_Checkout/web/js/view/minicart-theme-override.js)

_CAUTION - The override's filename must be different from the original file._

When you absolutely have to override the file, don't forget to add ```// comments``` to make it clear what was changed.  
This will help you update your files once the original code needs to be updated.

```
// Absolunet Custom Code
CUSTOM CODE
// /Absolunet Custom Code
```

### Scenario 2 - Via a custom MODULE

There are two ways to achieve this.

_CAUTION - Be sure to add the original module to your ```<sequence>``` in ```etc/module.xml```._  
[CODE/MODULE/etc/module.xml](app/code/Absolunet/Module/etc/module.xml)

##### 1 - Using a mixin (Recommended)
- [CODE/MODULE/view/frontend/requirejs-config.js](app/code/Absolunet/Module/view/frontend/requirejs-config.js)
- [CODE/MODULE/view/frontend/web/js/view/minicart-module-mixin.js](app/code/Absolunet/Module/view/frontend/web/js/view/minicart-module-mixin.js)

Using a mixin on the file prevents having to override the original file.  
You can then pinpoint what method you want to modify.

##### 2 - Overriding the file (NOT Recommended)
- [CODE/MODULE/view/frontend/requirejs-config.js](app/code/Absolunet/Module/view/frontend/requirejs-config.js)
- [CODE/MODULE/view/frontend/web/js/view/minicart-module-override.js](app/code/Absolunet/Module/view/frontend/web/js/view/minicart-module-override.js)

When you absolutely have to override the file, don't forget to add ```// comments``` to make it clear what was changed.  
This will help you update your files once the original code needs to be updated.

```
// Absolunet Custom Code
CUSTOM CODE
// /Absolunet Custom Code
```

### A word about Magento 2 Components

**Sources**

- [Magento - Use custom JavaScript](https://devdocs.magento.com/guides/v2.3/javascript-dev-guide/javascript/custom_js.html)
- [Magento - Locate JavaScript components](https://devdocs.magento.com/guides/v2.3/javascript-dev-guide/javascript/js_debug.html)
- [Utilizing JavaScript component](https://belvg.com/blog/utilizing-javascript-component-in-magento-2.html)

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
