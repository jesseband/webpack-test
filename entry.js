/**
 * Created by Administrator on 2015/9/23.
 */
require("./style.css")
var sw = require('./swipe.js');

var slider =
    sw(document.getElementById('slider'), {
        auto: 3000,
        continuous: true,
        callback: function(pos) {

            var i = bullets.length;
            while (i--) {
                bullets[i].className = ' ';
            }
            bullets[pos].className = 'on';

        }
    });
var bullets = document.getElementById('position').getElementsByTagName('li');