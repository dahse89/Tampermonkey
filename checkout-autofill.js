// ==UserScript==
// @name         Checkout contact fill
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/app_dev.php/buchung/anfrage/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function hash(){
        return (new Date()).getTime().toString(16).split('').reverse().join('');
    }

    $(function(){
        $('#form_firstName').val(hash());
        $('#form_lastName').val(hash());
        $('#form_email').val('philipp.dahse@beauty-spotter.de');
        $('#form_phone').val('321');
        $('#form_confirm').prop('checked', true);
        $('[type=submit]').focus();
    });

})();
