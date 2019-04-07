/**
 * @author    Mikhaël Bois <mbois@absolunet.com>
 * @copyright Copyright (c) 2019 Absolunet (http://www.absolunet.com)
 * @link      http://www.absolunet.com
 */
var config = {
    map: {
        '*': {
            'Magento_Checkout/js/view/minicart': 'Absolunet_Module/js/view/minicart-module-override' // Override example
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/minicart': {
                'Absolunet_Module/js/view/minicart-module-mixin': true // Mixin example
            }
        }
    }
};
