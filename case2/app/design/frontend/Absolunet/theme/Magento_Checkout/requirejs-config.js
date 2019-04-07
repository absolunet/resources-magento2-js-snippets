/**
 * @author    Mikhaël Bois <mbois@absolunet.com>
 * @copyright Copyright (c) 2019 Absolunet (http://www.absolunet.com)
 * @link      http://www.absolunet.com
 */
var config = {
    map: {
        '*': {
            'Magento_Checkout/js/view/minicart': 'Magento_Checkout/js/view/minicart-theme-override' // Override example
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/minicart': {
                'Magento_Checkout/js/view/minicart-theme-mixin': true // Mixin example
            }
        }
    }
};
