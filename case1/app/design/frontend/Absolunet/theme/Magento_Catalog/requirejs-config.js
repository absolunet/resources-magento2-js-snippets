/**
 * @author    Mikhaël Bois <mbois@absolunet.com>
 * @copyright Copyright (c) 2019 Absolunet (http://www.absolunet.com)
 * @link      http://www.absolunet.com
 */
var config = {
    map: {
        '*': {
            catalogAddToCart: 'Magento_Catalog/js/catalog-add-to-cart-theme-override' // Override example (Optional - If different filename)
        }
    },
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart-extend': {
                'Magento_Catalog/js/catalog-add-to-cart-theme-mixin': true  // Mixin example
            }
        }
    }
};
