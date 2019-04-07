/**
 * @author    Mikhaël Bois <mbois@absolunet.com>
 * @copyright Copyright (c) 2019 Absolunet (http://www.absolunet.com)
 * @link      http://www.absolunet.com
 */

define([
    /* [...] */
], function() {
    'use strict';

    return function(target) {
        return target.extend({

            getCartItems: function() {
                console.log('Mixin Component -- Before getCartItems');

                var items = this._super();

                console.log('Mixin Component -- After getCartItems');
                console.log(items);
            }

        });
    };
});
