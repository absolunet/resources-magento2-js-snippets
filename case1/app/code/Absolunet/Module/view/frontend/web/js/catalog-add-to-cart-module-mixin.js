/**
 * @author    Mikhaël Bois <mbois@absolunet.com>
 * @copyright Copyright (c) 2019 Absolunet (http://www.absolunet.com)
 * @link      http://www.absolunet.com
 */
define([
    'jquery'
], function($) {
    'use strict';

    return function(target) {
        $.widget('sandbox.catalogAddToCart', target, {

            ajaxSubmit: function(form) {
                console.log('Mixin Widget -- Before ajaxSubmit');

                this._super(form);

                console.log('Mixin Widget -- After ajaxSubmit');
            }

        });

        return $.sandbox.catalogAddToCart;
    };
});
