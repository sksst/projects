require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('page/common/nav-side/index.js');
var navSide         = require('page/common/nav-side/index.js');

$(function() {
    navSide.init({
        name: 'user-center'
    })
});