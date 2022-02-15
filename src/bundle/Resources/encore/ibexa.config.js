const path = require('path');

module.exports = (Encore) => {
    Encore.addEntry('ibexa-automated-translation-js', [path.resolve(__dirname, '../public/admin/js/ibexa-automated-translation.js')]);
    Encore.addEntry('ibexa-automated-translation-css', [path.resolve(__dirname, '../public/admin/css/ibexa-automated-translation.scss')]);
};
