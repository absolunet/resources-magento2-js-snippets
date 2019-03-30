/**
 * @author    Mikhaël Bois <mbois@absolunet.com>
 * @copyright Copyright (c) 2019 Absolunet (http://www.absolunet.com)
 * @link      http://www.absolunet.com
 */
var config = {
    map: {
        '*': {
            catalogAddToCart: 'Absolunet_Module/js/catalog-add-to-cart-module-override' // Override example
        }
    },
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Absolunet_Module/js/catalog-add-to-cart-module-mixin': true  // Mixin example
            }
        }
    }
};
