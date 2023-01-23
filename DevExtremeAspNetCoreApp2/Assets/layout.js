"use strict";

//require('@popperjs/core');
require('jquery');

// Bootstrap
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.js');

////////
//// Devextreme dependencies
require('core-js/features/url');    // IE11 polyfill

require('devextreme/dist/css/dx.common.css');
require('devextreme/dist/css/dx.light.compact.css');

// Required by Reporting
require('jquery-ui/dist/themes/base/jquery-ui.min.css');
require('jquery-ui');

// Required for client-side exporting
window.ExcelJS = require('exceljs');
require('file-saver/dist/FileSaver.js');

require('./devextreme_custom.bundle.js');

////////
// DevExtreme Reporting
window.ko = require('knockout/build/output/knockout-latest.js');
require('@devexpress/analytics-core/dist/css/dx-analytics.common.css');
require('@devexpress/analytics-core/dist/css/dx-analytics.light.css');
require('devexpress-reporting/dist/css/dx-webdocumentviewer.css');
require('@devexpress/analytics-core');
require('devexpress-reporting');
