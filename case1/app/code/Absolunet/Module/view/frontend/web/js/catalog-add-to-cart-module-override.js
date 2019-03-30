/**
 * @author    Mikhaël Bois <mbois@absolunet.com>
 * @copyright Copyright (c) 2019 Absolunet (http://www.absolunet.com)
 * @link      http://www.absolunet.com
 */
define([
    /* [...] */
], function(/* [...] */) {
    'use strict';

    $.widget('mage.catalogAddToCart', {

        /* [...] */

        ajaxSubmit: function(form) {
            /* [...] */

            // Absolunet Custom Code
            console.log('Override Widget');
            // /Absolunet Custom Code

            /* [...] */
        }

    });

    return $.mage.catalogAddToCart;
});
