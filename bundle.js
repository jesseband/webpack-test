/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Administrator on 2015/9/23.
	 */
	__webpack_require__(1)
	var sw = __webpack_require__(9);

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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html {\r\n\tfont-size: 100%;\r\n\toverflow-y: scroll;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-ms-text-size-adjust: 100%\r\n}\r\n\r\narticle,aside,details,figcaption,figure,footer,header,hgroup,nav,section {\r\n\tdisplay: block\r\n}\r\n\r\nb,strong {\r\n\tfont-weight: 700\r\n}\r\n\r\nblockquote {\r\n\tmargin: 1em 40px\r\n}\r\n\r\nhr {\r\n\tdisplay: block;\r\n\theight: 1px;\r\n\tborder: 0;\r\n\tborder-top: 1px solid #ccc;\r\n\tmargin: 1em 0;\r\n\tpadding: 0\r\n}\r\n\r\ncode,kbd,pre,samp {\r\n\tfont-size: 16px;\r\n\tfont-family: monospace,serif\r\n}\r\n\r\npre {\r\n\twhite-space: pre;\r\n\twhite-space: pre-wrap;\r\n\tword-wrap: break-word\r\n}\r\n\r\nsmall {\r\n\tfont-size: 85%\r\n}\r\n\r\nsub,sup {\r\n\tfont-size: 75%;\r\n\tline-height: 0;\r\n\tposition: relative;\r\n\tvertical-align: baseline\r\n}\r\n\r\nsup {\r\n\ttop: -.5em\r\n}\r\n\r\nsub {\r\n\tbottom: -.25em\r\n}\r\n\r\nol,ul {\r\n\tmargin: 1em 0;\r\n\tpadding: 0\r\n}\r\n\r\nnav ol,nav ul {\r\n\tlist-style: none;\r\n\tlist-style-image: none;\r\n\tmargin: 0;\r\n\tpadding: 0\r\n}\r\n\r\nimg {\r\n\tborder: 0;\r\n\t-ms-interpolation-mode: bicubic;\r\n\tvertical-align: middle\r\n}\r\n\r\n\r\nfieldset,figure,form {\r\n\tborder: 0;\r\n\tmargin: 0;\r\n\tpadding: 0\r\n}\r\n\r\nlabel {\r\n\tcursor: pointer\r\n}\r\n\r\nlegend {\r\n\tborder: 0;\r\n\tpadding: 0\r\n}\r\n\r\nbutton,input,select,textarea {\r\n\tfont-size: 100%;\r\n\tmargin: 0;\r\n\tvertical-align: baseline\r\n}\r\n\r\nbutton,input {\r\n\tline-height: normal\r\n}\r\n\r\nbutton,input[type=button],input[type=reset],input[type=submit] {\r\n\tcursor: pointer;\r\n\t-webkit-appearance: button\r\n}\r\n\r\ninput[type=checkbox],input[type=radio] {\r\n\tbox-sizing: border-box;\r\n\tpadding: 0\r\n}\r\n\r\ninput[type=search] {\r\n\t-webkit-appearance: textfield;\r\n\t-moz-box-sizing: content-box;\r\n\t-webkit-box-sizing: content-box;\r\n\tbox-sizing: content-box\r\n}\r\n\r\ninput[type=search]::-webkit-search-decoration {\r\n\t-webkit-appearance: none\r\n}\r\n\r\nbutton::-moz-focus-inner,input::-moz-focus-inner {\r\n\tborder: 0;\r\n\tpadding: 0\r\n}\r\n\r\ntextarea {\r\n\toverflow: auto;\r\n\tvertical-align: top;\r\n\tresize: vertical\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0\r\n}\r\n\r\ntable td {\r\n\tvertical-align: top\r\n}\r\n\r\n* {\r\n\t-moz-box-sizing: border-box;\r\n\t-webkit-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n\t-webkit-tap-highlight-color: transparent;\r\n\t-webkit-text-size-adjust: none;\r\n\t-webkit-touch-callout: none\r\n}\r\n\r\nbody,button,input,select,textarea {\r\n\tfont-family: ff-meta-serif-web-pro,serif;\r\n\tcolor: #3f3f3f;\r\n\tmargin: 0;\r\n\tfont-size: 1em;\r\n\tline-height: 1.4;\r\n\tbackground-color: #191919\r\n}\r\n\r\narticle {\r\n\tpadding: 0 20px;\r\n\tmargin: 0 auto;\r\n\tmax-width: 720px;\r\n\toverflow: hidden\r\n}\r\n\r\narticle small {\r\n\tfont-size: .9em;\r\n\tfont-family: proxima-nova,sans-serif;\r\n\tmargin: 0 0 1.5em;\r\n\tdisplay: block;\r\n\ttext-align: center\r\n}\r\n\r\nh1 {\r\n\tfont-size: 2.5em;\r\n\tmargin: .9em 0 .1em;\r\n\tcolor: #212121;\r\n\tline-height: 1;\r\n\tfont-family: proxima-nova,sans-serif\r\n}\r\n\r\nh2 {\r\n\tcolor: #14a8e5;\r\n\tfont-weight: 600;\r\n\tfont-size: 1.6em;\r\n\tmargin: 1.5em 0 .4em;\r\n\tfont-family: proxima-nova,sans-serif;\r\n\tline-height: 1.2\r\n}\r\n\r\nh3 {\r\n\tfont-family: museo-slab,serif;\r\n\tmargin: 1.8em 0 .5em;\r\n\tcolor: #404040;\r\n\tfont-size: 1.2em;\r\n\tfont-weight: 500\r\n}\r\n\r\nh6 {\r\n\tfont-family: museo-slab,serif;\r\n\tfont-size: 1.3em;\r\n\tmargin: 0 0 .3em;\r\n\tfont-weight: 400;\r\n\tcolor: #8c9397;\r\n\tmargin-bottom: 40px;\r\n\tfont-style: italic\r\n}\r\n\r\np {\r\n\tfont-size: 1.05em;\r\n\tmargin: 0 0 1.5em\r\n}\r\n\r\na,a:visited {\r\n\tcolor: #14a8e5;\r\n\ttext-decoration: none\r\n}\r\n\r\na:active,a:focus,a:hover,a:visited:active,a:visited:focus,a:visited:hover {\r\n\toutline: 0;\r\n\ttext-decoration: underline\r\n}\r\n\r\na.alt,a:visited.alt {\r\n\tcolor: #8c9397\r\n}\r\n\r\nblockquote {\r\n\tfont-style: italic;\r\n\tfont-weight: 300;\r\n\tfont-size: 19px;\r\n\tfont-family: museo-slab;\r\n\tmargin: 1.2em 0 1.7em 1.5em;\r\n\tcolor: #a6a9ab\r\n}\r\n\r\n.preview,pre.code {\r\n\tmargin: 1.2em 0 2em;\r\n\tborder: 1px solid;\r\n\tborder-color: #cdd2d6 #bfc6cb #b3bbc1 #bfc6cb;\r\n\tborder-radius: 2px;\r\n\tposition: relative;\r\n\tbox-shadow: 0 1px 1px rgba(0,0,0,.08)\r\n}\r\n\r\n.two-column .preview.preview,.two-column pre.code.preview {\r\n\tmargin-right: 20px\r\n}\r\n\r\n.preview label,pre.code label {\r\n\tfont-family: sans-serif;\r\n\tfont-weight: 700;\r\n\tfont-size: 13px;\r\n\tcolor: #4b555c;\r\n\tposition: absolute;\r\n\tleft: 1px;\r\n\ttop: 16px;\r\n\ttext-align: center;\r\n\twidth: 60px\r\n}\r\n\r\n.preview code,pre.code code {\r\n\tfont-family: Inconsolata,Monaco,Consolas,\"Andale Mono\",\"Bitstream Vera Sans Mono\",\"Courier New\",Courier,monospace;\r\n\tdisplay: block;\r\n\tmargin: 0 0 0 60px;\r\n\tpadding: 15px 16px 14px;\r\n\tborder-left: 1px #e5eaee solid;\r\n\toverflow-x: auto;\r\n\tfont-size: 13px;\r\n\tline-height: 19px;\r\n\tcolor: #333\r\n}\r\n\r\n.preview.code-css code,pre.code.code-css code {\r\n\tcolor: #d84400\r\n}\r\n\r\n.preview.code-html code,pre.code.code-html code {\r\n\tcolor: #4576d5\r\n}\r\n[data-zoom]:after {\r\n\tcontent: attr(data-zoom);\r\n\tcolor: #ddd;\r\n\tfont-family: proxima-nova,sans-serif;\r\n\tfont-size: 15px;\r\n\tfont-weight: 700;\r\n\tposition: absolute;\r\n\ttop: 10px;\r\n\tleft: 12px;\r\n\ttext-transform: uppercase\r\n}\r\n\r\n.button,.button:active,.button:visited {\r\n\tmargin: 0;\r\n\tpadding: 13px 30px 12px;\r\n\tborder-radius: 4px;\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n\tcolor: #494f50!important;\r\n\ttext-decoration: none!important;\r\n\tborder: 1px #97a2a4 solid;\r\n\tborder-top: 1px #a4b0b4 solid;\r\n\tborder-bottom: 1px #8f9698 solid;\r\n\tbox-shadow: 0 1px 0 rgba(0,0,0,.05),inset 0 1px 0 #fff;\r\n\tbackground-color: #ececec;\r\n\tbackground-image: -webkit-gradient(linear,left top,left bottom,from(#f9f9f9),to(#e0e0e0));\r\n\tbackground-image: -webkit-linear-gradient(top,#f9f9f9,#e0e0e0);\r\n\tbackground-image: -moz-linear-gradient(top,#f9f9f9,#e0e0e0);\r\n\tbackground-image: -ms-linear-gradient(top,#f9f9f9,#e0e0e0);\r\n\tbackground-image: -o-linear-gradient(top,#f9f9f9,#e0e0e0);\r\n\tbackground-image: linear,top,#f9f9f9,#e0e0e0;\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#F9F9F9', EndColorStr='#E0E0E0');\r\n\tfont-size: 17px;\r\n\tfont-weight: 700;\r\n\ttext-shadow: 0 1px 0 #fff;\r\n\tfont-family: proxima-nova;\r\n\ttext-transform: none;\r\n\tletter-spacing: 0\r\n}\r\n\r\n.button:active:hover,.button:hover,.button:visited:hover {\r\n\ttext-decoration: none\r\n}\r\n\r\n.dark {\r\n\tbackground-color: #191919\r\n}\r\n\r\n.dark header a,.dark header a:visited {\r\n\tcolor: #2b2e30;\r\n\tfont-weight: 700\r\n}\r\n\r\n.dark header a:hover,.dark header a:visited:hover {\r\n\tcolor: #43484b\r\n}\r\n\r\n.dark header a.logo,.dark header a:visited.logo {\r\n\tbackground: #373b3e;\r\n\tcolor: #191919\r\n}\r\n\r\n.dark header a.logo:hover,.dark header a:visited.logo:hover {\r\n\tbackground: #4f5559\r\n}\r\n\r\n.dark article h1 {\r\n\tcolor: #fff\r\n}\r\n\r\n.dark article img {\r\n\tmargin: 0 0 4em;\r\n\tbox-shadow: 0 1px 3px #000;\r\n\tborder-radius: 4px;\r\n\tmax-width: 100%\r\n}\r\n\r\n.dark footer a {\r\n\tcolor: #2b2e30!important;\r\n\tfont-weight: 700\r\n}\r\n\r\n.dark footer a:hover {\r\n\tcolor: #43484b!important\r\n}\r\n\r\n.page-swipe header {\r\n\tbackground-color: #191919;\r\n\tpadding-bottom: 25px\r\n}\r\n\r\n.page-swipe header a,.page-swipe header a:visited {\r\n\tcolor: #2b2e30;\r\n\tfont-weight: 700\r\n}\r\n\r\n.page-swipe header a:hover,.page-swipe header a:visited:hover {\r\n\tcolor: #43484b\r\n}\r\n\r\n.page-swipe header a.logo,.page-swipe header a:visited.logo {\r\n\tbackground: #373b3e;\r\n\tcolor: #191919\r\n}\r\n\r\n.page-swipe header a.logo:hover,.page-swipe header a:visited.logo:hover {\r\n\tbackground: #4f5559\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n\t.page-swipe header {\r\n\t\tpadding: 15px 0\r\n\t}\r\n}\r\n\r\n.page-swipe header #slider {\r\n\tmax-height: 395px;\r\n\tmargin-top: 40px\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n\t.erweima img {\r\n\t\tdisplay: none\r\n\t}\r\n\r\n\t.page-swipe header #slider {\r\n\t\tmargin-top: 40px;\r\n\t}\r\n}\r\n\r\n.page-swipe header #slider figure {\r\n\tdisplay: block\r\n}\r\n\r\n.page-swipe header #slider figure div.wrap {\r\n\tmax-width: 640px;\r\n\theight: 360px;\r\n\tdisplay: block;\r\n\tmargin: 20px auto 15px;\r\n\tposition: relative\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n\t.page-swipe header #slider figure div.wrap {\r\n\t\tmax-width: 480px;\r\n\t\theight: 240px;\r\n\t\tmargin-bottom: 5px\r\n\t}\r\n}\r\n\r\n.page-swipe header #slider figure div.image {\r\n\tdisplay: block;\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,.85),inset 0 0 1px rgba(255,255,255,.35);\r\n\tmargin: 0 10px;\r\n\tborder-radius: 5px;\r\n\theight: inherit\r\n}\r\n\r\n.page-swipe header #slider figure a {\r\n\ttext-transform: none;\r\n\tfont-weight: 400;\r\n\tletter-spacing: 0;\r\n\tposition: absolute;\r\n\tbottom: 10px;\r\n\tright: 20px;\r\n\tfont-size: 12px;\r\n\tcolor: #fff;\r\n\tbackground: #000;\r\n\tpadding: 2px 5px;\r\n\tborder-radius: 3px;\r\n\topacity: .45;\r\n\tfont-family: franklin-gothic-urw,sans-serif\r\n}\r\n\r\n.page-swipe header #slider figure a:hover {\r\n\topacity: .85;\r\n\ttext-decoration: none\r\n}\r\n\r\n.page-swipe header nav {\r\n\tposition: relative;\r\n\tmax-width: 680px;\r\n\tmargin: 7px auto 0\r\n}\r\n\r\n.page-swipe header nav a {\r\n\tfont-style: normal;\r\n\tcolor: #555!important\r\n}\r\n\r\n.page-swipe header nav #position {\r\n\ttext-align: center;\r\n\tlist-style: none;\r\n\tmargin: 0;\r\n\tpadding: 0\r\n}\r\n\r\n.page-swipe header nav #position li {\r\n\tdisplay: inline-block;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tborder-radius: 10px;\r\n\tbackground: #141414;\r\n\tbox-shadow: inset 0 1px 3px #000,0 0 1px 1px #202020;\r\n\tmargin: 0 2px;\r\n\tcursor: pointer\r\n}\r\n\r\n.page-swipe header nav #position li.on {\r\n\tbox-shadow: inset 0 1px 3px -1px #28b4ea,0 1px 2px rgba(0,0,0,.5);\r\n\tbackground-color: #1293dc;\r\n\tbackground-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#1293dc),color-stop(100%,#0f6297));\r\n\tbackground-image: -webkit-linear-gradient(top,#1293dc,#0f6297);\r\n\tbackground-image: -moz-linear-gradient(top,#1293dc,#0f6297);\r\n\tbackground-image: -ms-linear-gradient(top,#1293dc,#0f6297);\r\n\tbackground-image: -o-linear-gradient(top,#1293dc,#0f6297);\r\n\tbackground-image: linear-gradient(top,#1293dc,#0f6297)\r\n}\r\n\r\n.page-swipe article {\r\n\ttext-align: center;\r\n\tpadding-bottom: 60px\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n\t.page-swipe article {\r\n\t\tpadding-left: 10px;\r\n\t\tpadding-right: 10px\r\n\t}\r\n}\r\n\r\n.page-swipe article h1 {\r\n\tfont-size: 36px;\r\n\tmargin: 35px 0 10px;\r\n\tline-height: 1.1em\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n\t.page-swipe article h1 {\r\n\t\tmargin-top: 20px;\r\n\t\tfont-size: 32px\r\n\t}\r\n}\r\n\r\n.page-swipe article h2 {\r\n\tcolor: #14a8e5;\r\n\tfont-size: 17px;\r\n\tmargin: 0\r\n}\r\n\r\n.page-swipe article h2 span {\r\n\tmargin: 0 6px\r\n}\r\n\r\n.page-swipe article h3 {\r\n\tcolor: #929a9f;\r\n\tfont-size: 16px\r\n}\r\n\r\n.page-swipe article .twitter {\r\n\tmargin: 20px 0 20px 8px;\r\n\tpadding-bottom: 50px;\r\n\ttext-align: center\r\n}\r\n\r\n.page-swipe article .twitter iframe {\r\n\tmargin: 0 10px;\r\n\tmax-width: 273px\r\n}\r\n\r\n.page-swipe article .whos-using {\r\n\tmargin: 18px 0 80px;\r\n\tlist-style: none;\r\n\tfont-size: 0\r\n}\r\n\r\n.page-swipe article .whos-using li {\r\n\tdisplay: inline-block;\r\n\twidth: 170px;\r\n\theight: 140px;\r\n\ttext-indent: -999em;\r\n\tbackground-size: 170px 140px;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat\r\n}\r\n\r\n@media only screen and (max-width:470px) {\r\n\t.page-swipe article .whos-using li {\r\n\t\tdisplay: block;\r\n\t\twidth: auto!important;\r\n\t\theight: 120px\r\n\t}\r\n}\r\n\r\n.page-swipe article #twitter-widget-2,.page-swipe article #twitter-widget-3,.page-swipe article #twitter-widget-4,.page-swipe article #twitter-widget-5 {\r\n\tdisplay: inline-block!important;\r\n\tmax-width: 320px!important;\r\n\tvertical-align: top!important;\r\n\tmargin: 12px!important;\r\n\twidth: auto!important;\r\n\tborder-radius: 4px!important;\r\n\tbox-shadow: 0 1px 1px rgba(0,0,0,.05)!important\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n\t.page-swipe article #twitter-widget-2,.page-swipe article #twitter-widget-3,.page-swipe article #twitter-widget-4,.page-swipe article #twitter-widget-5 {\r\n\t\tmargin-left: 0!important;\r\n\t\tmargin-right: 0!important\r\n\t}\r\n}\r\n\r\n.page-swipe footer {\r\n\tbackground-color: #191919;\r\n\tpadding: 30px 0 30px\r\n}\r\n\r\n.page-swipe footer a {\r\n\tcolor: #2b2e30!important;\r\n\tfont-weight: 700\r\n}\r\n\r\n.page-swipe footer a:hover {\r\n\tcolor: #43484b!important\r\n}\r\n\r\n.page-swipe footer .button,.page-swipe footer .button:active,.page-swipe footer .button:visited {\r\n\tcolor: #4c565a!important;\r\n\tborder: 0;\r\n\tbox-shadow: 0 1px 1px rgba(0,0,0,.65),inset 0 1px 2px -1px rgba(255,255,255,.2);\r\n\tbackground-color: #252829;\r\n\tbackground-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#252829),color-stop(100%,#1e2021));\r\n\tbackground-image: -webkit-linear-gradient(top,#252829,#1e2021);\r\n\tbackground-image: -moz-linear-gradient(top,#252829,#1e2021);\r\n\tbackground-image: -ms-linear-gradient(top,#252829,#1e2021);\r\n\tbackground-image: -o-linear-gradient(top,#252829,#1e2021);\r\n\tbackground-image: linear-gradient(top,#252829,#1e2021);\r\n\ttext-shadow: 0 -1px 0 rgba(0,0,0,.35);\r\n\tmargin-bottom: 25px\r\n}\r\n\r\n.post-together header {\r\n\tbackground-color: #1b1818;\r\n\t/*background-image: url(../assets/together-header-bkgd.jpg);*/\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tmargin-bottom: 50px;\r\n\theight: 543px;\r\n\tposition: relative\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n\t.post-together header {\r\n\t\theight: 400px;\r\n\t\tmargin-bottom: 30px\r\n\t}\r\n}\r\n\r\n.post-together header a,.post-together header a:visited {\r\n\tcolor: rgba(255,255,255,.65);\r\n\tfont-weight: 700;\r\n\t-webkit-font-smoothing: antialiased\r\n}\r\n\r\n.post-together header a:hover,.post-together header a:visited:hover {\r\n\tcolor: #fff\r\n}\r\n\r\n.post-together header a.logo,.post-together header a:visited.logo {\r\n\tbackground: #fc6d60;\r\n\tcolor: #fff;\r\n\tcolor: rgba(255,255,255,.9)\r\n}\r\n\r\n.post-together header a.logo:hover,.post-together header a:visited.logo:hover {\r\n\tbackground: #fc6d60\r\n}\r\n\r\n.post-together header h1 {\r\n\tcolor: #fff;\r\n\tmargin-top: 216px;\r\n\tfont-size: 45px;\r\n\t-webkit-font-smoothing: antialiased;\r\n\tpadding-left: 20px;\r\n\tpadding-right: 20px\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n\t.post-together header h1 {\r\n\t\tmargin-top: 120px;\r\n\t\tfont-size: 36px\r\n\t}\r\n}\r\n\r\n.post-together header h6 {\r\n\tcolor: #fc6d60;\r\n\tfont-size: 21px;\r\n\tmargin-top: .4em;\r\n\tfont-style: normal;\r\n\t-webkit-font-smoothing: antialiased\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n\t.post-together header h6 {\r\n\t\tfont-size: 18px\r\n\t}\r\n}\r\n\r\n.post-together header .photo-by {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tcolor: rgba(255,255,255,.6);\r\n\tfont-size: 12px;\r\n\tfont-weight: 400;\r\n\tfont-family: proxima-nova,sans-serif;\r\n\tfont-weight: 700;\r\n\t-webkit-font-smoothing: antialiased\r\n}\r\n\r\n.post-together header .photo-by a,.post-together header .photo-by a:visited {\r\n\tpadding: 0;\r\n\tcolor: rgba(255,255,255,.6);\r\n\ttext-transform: none;\r\n\tletter-spacing: 0;\r\n\tvertical-align: top;\r\n\tfont-weight: 700;\r\n\t-webkit-font-smoothing: antialiased\r\n}\r\n\r\n.post-together header .photo-by a:hover,.post-together header .photo-by a:visited:hover {\r\n\tcolor: #fff\r\n}\r\n\r\n.post-together article a {\r\n\tcolor: #fc6d60\r\n}\r\n\r\n.post-together article small a {\r\n\tcolor: #1a8dc4\r\n}\r\n\r\n.post-together article h2 {\r\n\tcolor: #1a8dc4\r\n}\r\n\r\n.post-tech-together header {\r\n\tbackground-color: #2c3c8f;\r\n\tmargin-bottom: 50px;\r\n\theight: 543px;\r\n\tposition: relative\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n\t.post-tech-together header {\r\n\t\theight: 400px;\r\n\t\tmargin-bottom: 30px\r\n\t}\r\n}\r\n\r\n.post-tech-together header a,.post-tech-together header a:visited {\r\n\tcolor: #4a83c5;\r\n\tfont-weight: 700\r\n}\r\n\r\n.post-tech-together header a:hover,.post-tech-together header a:visited:hover {\r\n\tcolor: #fff\r\n}\r\n\r\n.post-tech-together header a.logo,.post-tech-together header a:visited.logo {\r\n\tbackground: #4a83c5;\r\n\tcolor: #2c3c8f\r\n}\r\n\r\n.post-tech-together header a.logo:hover,.post-tech-together header a:visited.logo:hover {\r\n\tbackground: #fff\r\n}\r\n\r\n.post-tech-together header h1 {\r\n\tmargin-top: 106px;\r\n\tfont-size: 45px;\r\n\tfont-family: katarine-web,sans-serif;\r\n\ttext-transform: uppercase;\r\n\t-webkit-font-smoothing: antialiased;\r\n\tpadding-left: 20px;\r\n\tpadding-right: 20px;\r\n\ttext-align: center;\r\n\tletter-spacing: 3px;\r\n\tcolor: #4a83c5\r\n}\r\n\r\n.post-tech-together header h1 span {\r\n\tdisplay: block;\r\n\tfont-size: 154px;\r\n\tfont-weight: 700;\r\n\ttext-transform: none;\r\n\tmargin-top: -30px;\r\n\tmargin-bottom: 10px;\r\n\tcolor: #fff;\r\n\tletter-spacing: 0;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\ttext-shadow: 0 0 0 #d9d9d9,0 1px 0 silver,0 2px 0 #a8a8a8,0 3px 0 #909090,0 4px 3px rgba(0,0,0,.1),0 4px 1px rgba(0,0,0,.5),0 0 3px rgba(0,0,0,.2)\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n\t.post-tech-together header h1 {\r\n\t\tmargin-top: 70px;\r\n\t\tfont-size: 26px\r\n\t}\r\n\r\n\t.post-tech-together header h1 span {\r\n\t\tfont-size: 110px;\r\n\t\tmargin-top: -20px\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width:560px) {\r\n\t.post-tech-together header {\r\n\t\theight: 300px\r\n\t}\r\n\r\n\t.post-tech-together header h1 {\r\n\t\tmargin-top: 40px;\r\n\t\tfont-size: 22px\r\n\t}\r\n\r\n\t.post-tech-together header h1 span {\r\n\t\tfont-size: 90px;\r\n\t\tmargin-top: -20px\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width:470px) {\r\n\t.post-tech-together header {\r\n\t\theight: 280px\r\n\t}\r\n\r\n\t.post-tech-together header h1 {\r\n\t\tmargin-top: 35px;\r\n\t\tfont-size: 24px\r\n\t}\r\n\r\n\t.post-tech-together header h1 span {\r\n\t\tmargin-top: -5px;\r\n\t\tfont-size: 60px;\r\n\t\tmargin-bottom: 15px\r\n\t}\r\n}\r\n\r\n.post-tech-together header h6 {\r\n\tcolor: #fc6d60;\r\n\tfont-size: 21px;\r\n\tmargin-top: .4em;\r\n\tfont-style: normal;\r\n\t-webkit-font-smoothing: antialiased\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n\t.post-tech-together header h6 {\r\n\t\tfont-size: 18px\r\n\t}\r\n}\r\n\r\n.post-tech-together header h6 a,.post-tech-together header h6 a:visited {\r\n\tpadding: 0;\r\n\tcolor: rgba(255,255,255,.6);\r\n\ttext-transform: none;\r\n\tletter-spacing: 0;\r\n\tvertical-align: top;\r\n\tfont-weight: 700;\r\n\t-webkit-font-smoothing: antialiased\r\n}\r\n\r\n.post-tech-together header h6 a:hover,.post-tech-together header h6 a:visited:hover {\r\n\tcolor: #fff\r\n}\r\n\r\n.post-tech-together article p {\r\n\tfont-family: proxima-nova,sans-serif;\r\n\tfont-size: 1.2em\r\n}\r\n\r\n.post-tech-together article a {\r\n\tcolor: #fc6d60\r\n}\r\n\r\n.post-tech-together article h2 {\r\n\tcolor: #4a83c5;\r\n\tfont-family: katarine-web,sans-serif;\r\n\tfont-size: 30px;\r\n\tmargin-bottom: .3em\r\n}\r\n\r\nheader {\r\n\ttext-align: center;\r\n\tpadding: 30px 0 80px\r\n}\r\n\r\nheader a,header a:visited {\r\n\ttext-decoration: none;\r\n\tcolor: #c6cacd;\r\n\tfont-size: 12px;\r\n\tletter-spacing: 1px;\r\n\ttext-transform: uppercase;\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n\tfont-weight: 600;\r\n\tpadding: 7px 15px 5px;\r\n\tfont-family: proxima-nova,sans-serif\r\n}\r\n\r\nheader a:hover,header a:visited:hover {\r\n\tcolor: #8c9397;\r\n\ttext-decoration: none\r\n}\r\n\r\nheader a.logo,header a:visited.logo {\r\n\tfont-family: ddt,sans-serif;\r\n\tcolor: #fff;\r\n\tfont-size: 24px;\r\n\tline-height: 28px;\r\n\tpadding: 8px 13px 7px;\r\n\tborder-radius: 25px;\r\n\tbackground: #14a8e5;\r\n\tletter-spacing: 0\r\n}\r\n\r\n.stories {\r\n\tmargin-top: 50px\r\n}\r\n\r\n.stories a {\r\n\tdisplay: block;\r\n\tpadding: 20px 0;\r\n\ttext-decoration: none\r\n}\r\n\r\n.stories a span {\r\n\tfont-family: proxima-nova,sans-serif;\r\n\tfont-size: 23px;\r\n\tcolor: #272727;\r\n\tfont-weight: 600;\r\n\tdisplay: block\r\n}\r\n\r\n.stories a em {\r\n\tdisplay: block;\r\n\tcolor: #8c9397;\r\n\tfont-family: museo-slab,serif\r\n}\r\n\r\n.stories a:hover span {\r\n\tcolor: #14a8e5;\r\n\ttext-decoration: underline\r\n}\r\n\r\n.three-column {\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n\twidth: 210px;\r\n\tmargin: 0 0 3em\r\n}\r\n\r\n.qr-button {\r\n\ttext-align: center\r\n}\r\n\r\n.qr-button .button {\r\n\tfont-size: 14px;\r\n\tpadding: 11px 18px;\r\n\tborder-radius: 3px\r\n}\r\n\r\n.qr {\r\n\tmargin: 1.2em 0;\r\n\tborder: 1px solid;\r\n\tborder-color: #cdd2d6 #bfc6cb #b3bbc1 #bfc6cb;\r\n\tborder-radius: 2px;\r\n\tbox-shadow: 0 1px 1px rgba(0,0,0,.08)\r\n}\r\n\r\n.tweet-button {\r\n\ttext-align: center;\r\n\tmargin: 30px 0 0\r\n}\r\n\r\n.tweet-button .fb-like {\r\n\ttop: -4px;\r\n\tposition: relative\r\n}\r\n\r\nfooter {\r\n\ttext-align: center;\r\n\tpadding: 80px 0 30px;\r\n\tdisplay: block\r\n}\r\n\r\nfooter a {\r\n\tcolor: #d1d4d6!important;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 13px;\r\n\tletter-spacing: 2px;\r\n\tfont-weight: 600;\r\n\tfont-family: proxima-nova,sans-serif;\r\n\ttext-decoration: none\r\n}\r\n\r\nfooter a:hover {\r\n\tcolor: #8c9397!important;\r\n\ttext-decoration: none\r\n}\r\n.swipe {\r\n\toverflow: hidden;\r\n\tvisibility: hidden;\r\n\tposition: relative;\r\n}\r\n.swipe-wrap {\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n}\r\n.swipe-wrap > figure {\r\n\tfloat: left;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\r\n\r\n.erweima {text-align:center;}\r\n.erweima img {border:6px solid #FFF; margin-right:20px;}\r\n\r\n.title {background-color:#222; width:100%; position:fixed; top:0; left:0; font-size:12px; font-family:Verdana, Geneva, sans-serif; z-index:99999;}\r\n.title a {color:#999; text-decoration:none; line-height:24px; padding:0 10px; letter-spacing: 1px;}\r\n.title_r {float:right;}\r\n.title_l {float:left;}\r\n.title a:hover {background:#000;}\r\n.img1 {\r\n\tbackground:url(" + __webpack_require__(4) + ") center no-repeat;\r\n\tbackground-size: cover;\r\n}\r\n.img2 {\r\n\tbackground:url(" + __webpack_require__(5) + ") center no-repeat;\r\n\tbackground-size: cover;\r\n}\r\n.img3 {\r\n\tbackground:url(" + __webpack_require__(6) + ") center no-repeat;\r\n\tbackground-size: cover;\r\n}\r\n.img4 {\r\n\tbackground:url(" + __webpack_require__(7) + ") center no-repeat;\r\n\tbackground-size: cover;\r\n}\r\n\r\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "18da6874a3402f7b2e9a86a9a19a196c.jpg"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "12ec94fd417b777e37e4a2bdba46b78b.jpg"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e1d6061151d46ccf0508aad8c8d60d3d.jpg"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9f669ab998198a96f61a04d9e83309b0.jpg"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
	 * Swipe 2.0
	 *
	 * Brad Birdsall
	 * Copyright 2013, MIT License
	 *
	*/

	function Swipe(container, options) {

	  "use strict";

	  // utilities
	  var noop = function() {}; // simple no operation function
	  var offloadFn = function(fn) { setTimeout(fn || noop, 0) }; // offload a functions execution
	  
	  // check browser capabilities
	  var browser = {
	    addEventListener: !!window.addEventListener,
	    touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
	    transitions: (function(temp) {
	      var props = ['transformProperty', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'];
	      for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
	      return false;
	    })(document.createElement('swipe'))
	  };

	  // quit if no root element
	  if (!container) return;
	  var element = container.children[0];
	  var slides, slidePos, width;
	  options = options || {};
	  var index = parseInt(options.startSlide, 10) || 0;
	  var speed = options.speed || 300;
	  options.continuous = options.continuous ? options.continuous : true;

	  function setup() {

	    // cache slides
	    slides = element.children;

	    // create an array to store current positions of each slide
	    slidePos = new Array(slides.length);

	    // determine width of each slide
	    width = container.getBoundingClientRect().width || container.offsetWidth;

	    element.style.width = (slides.length * width) + 'px';

	    // stack elements
	    var pos = slides.length;
	    while(pos--) {

	      var slide = slides[pos];

	      slide.style.width = width + 'px';
	      slide.setAttribute('data-index', pos);

	      if (browser.transitions) {
	        slide.style.left = (pos * -width) + 'px';
	        move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
	      }

	    }

	    if (!browser.transitions) element.style.left = (index * -width) + 'px';

	    container.style.visibility = 'visible';

	  }

	  function prev() {

	    if (index) slide(index-1);
	    else if (options.continuous) slide(slides.length-1);

	  }

	  function next() {

	    if (index < slides.length - 1) slide(index+1);
	    else if (options.continuous) slide(0);

	  }

	  function slide(to, slideSpeed) {

	    // do nothing if already on requested slide
	    if (index == to) return;
	    
	    if (browser.transitions) {

	      var diff = Math.abs(index-to) - 1;
	      var direction = Math.abs(index-to) / (index-to); // 1:right -1:left

	      while (diff--) move((to > index ? to : index) - diff - 1, width * direction, 0);

	      move(index, width * direction, slideSpeed || speed);
	      move(to, 0, slideSpeed || speed);

	    } else {

	      animate(index * -width, to * -width, slideSpeed || speed);

	    }

	    index = to;

	    offloadFn(options.callback && options.callback(index, slides[index]));

	  }

	  function move(index, dist, speed) {

	    translate(index, dist, speed);
	    slidePos[index] = dist;

	  }

	  function translate(index, dist, speed) {

	    var slide = slides[index];
	    var style = slide && slide.style;

	    if (!style) return;

	    style.webkitTransitionDuration = 
	    style.MozTransitionDuration = 
	    style.msTransitionDuration = 
	    style.OTransitionDuration = 
	    style.transitionDuration = speed + 'ms';

	    style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
	    style.msTransform = 
	    style.MozTransform = 
	    style.OTransform = 'translateX(' + dist + 'px)';

	  }

	  function animate(from, to, speed) {

	    // if not an animation, just reposition
	    if (!speed) {
	      
	      element.style.left = to + 'px';
	      return;

	    }
	    
	    var start = +new Date;
	    
	    var timer = setInterval(function() {

	      var timeElap = +new Date - start;
	      
	      if (timeElap > speed) {

	        element.style.left = to + 'px';

	        if (delay) begin();

	        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

	        clearInterval(timer);
	        return;

	      }

	      element.style.left = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';

	    }, 4);

	  }

	  // setup auto slideshow
	  var delay = options.auto || 0;
	  var interval;

	  function begin() {

	    interval = setTimeout(next, delay);

	  }

	  function stop() {

	    delay = 0;
	    clearTimeout(interval);

	  }


	  // setup initial vars
	  var start = {};
	  var delta = {};
	  var isScrolling;      

	  // setup event capturing
	  var events = {

	    handleEvent: function(event) {

	      switch (event.type) {
	        case 'touchstart': this.start(event); break;
	        case 'touchmove': this.move(event); break;
	        case 'touchend': offloadFn(this.end(event)); break;
	        case 'webkitTransitionEnd':
	        case 'msTransitionEnd':
	        case 'oTransitionEnd':
	        case 'otransitionend':
	        case 'transitionend': offloadFn(this.transitionEnd(event)); break;
	        case 'resize': offloadFn(setup.call()); break;
	      }

	      if (options.stopPropagation) event.stopPropagation();

	    },
	    start: function(event) {

	      var touches = event.touches[0];

	      // measure start values
	      start = {

	        // get initial touch coords
	        x: touches.pageX,
	        y: touches.pageY,

	        // store time to determine touch duration
	        time: +new Date

	      };
	      
	      // used for testing first move event
	      isScrolling = undefined;

	      // reset delta and end measurements
	      delta = {};

	      // attach touchmove and touchend listeners
	      element.addEventListener('touchmove', this, false);
	      element.addEventListener('touchend', this, false);

	    },
	    move: function(event) {

	      // ensure swiping with one touch and not pinching
	      if ( event.touches.length > 1 || event.scale && event.scale !== 1) return

	      if (options.disableScroll) event.preventDefault();

	      var touches = event.touches[0];

	      // measure change in x and y
	      delta = {
	        x: touches.pageX - start.x,
	        y: touches.pageY - start.y
	      }

	      // determine if scrolling test has run - one time test
	      if ( typeof isScrolling == 'undefined') {
	        isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
	      }

	      // if user is not trying to scroll vertically
	      if (!isScrolling) {

	        // prevent native scrolling 
	        event.preventDefault();

	        // stop slideshow
	        stop();

	        // increase resistance if first or last slide
	        delta.x = 
	          delta.x / 
	            ( (!index && delta.x > 0               // if first slide and sliding left
	              || index == slides.length - 1        // or if last slide and sliding right
	              && delta.x < 0                       // and if sliding at all
	            ) ?                      
	            ( Math.abs(delta.x) / width + 1 )      // determine resistance level
	            : 1 );                                 // no resistance if false
	        
	        // translate 1:1
	        translate(index-1, delta.x + slidePos[index-1], 0);
	        translate(index, delta.x + slidePos[index], 0);
	        translate(index+1, delta.x + slidePos[index+1], 0);

	      }

	    },
	    end: function(event) {

	      // measure duration
	      var duration = +new Date - start.time;

	      // determine if slide attempt triggers next/prev slide
	      var isValidSlide = 
	            Number(duration) < 250               // if slide duration is less than 250ms
	            && Math.abs(delta.x) > 20            // and if slide amt is greater than 20px
	            || Math.abs(delta.x) > width/2;      // or if slide amt is greater than half the width

	      // determine if slide attempt is past start and end
	      var isPastBounds = 
	            !index && delta.x > 0                            // if first slide and slide amt is greater than 0
	            || index == slides.length - 1 && delta.x < 0;    // or if last slide and slide amt is less than 0
	      
	      // determine direction of swipe (true:right, false:left)
	      var direction = delta.x < 0;

	      // if not scrolling vertically
	      if (!isScrolling) {

	        if (isValidSlide && !isPastBounds) {

	          if (direction) {

	            move(index-1, -width, 0);
	            move(index, slidePos[index]-width, speed);
	            move(index+1, slidePos[index+1]-width, speed);
	            index += 1;

	          } else {

	            move(index+1, width, 0);
	            move(index, slidePos[index]+width, speed);
	            move(index-1, slidePos[index-1]+width, speed);
	            index += -1;

	          }

	          options.callback && options.callback(index, slides[index]);

	        } else {

	          move(index-1, -width, speed);
	          move(index, 0, speed);
	          move(index+1, width, speed);

	        }

	      }

	      // kill touchmove and touchend event listeners until touchstart called again
	      element.removeEventListener('touchmove', events, false)
	      element.removeEventListener('touchend', events, false)

	    },
	    transitionEnd: function(event) {

	      if (parseInt(event.target.getAttribute('data-index'), 10) == index) {
	        
	        if (delay) begin();

	        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

	      }

	    }

	  }

	  // trigger setup
	  setup();

	  // start auto slideshow if applicable
	  if (delay) begin();


	  // add event listeners
	  if (browser.addEventListener) {
	    
	    // set touchstart event on element    
	    if (browser.touch) element.addEventListener('touchstart', events, false);

	    if (browser.transitions) {
	      element.addEventListener('webkitTransitionEnd', events, false);
	      element.addEventListener('msTransitionEnd', events, false);
	      element.addEventListener('oTransitionEnd', events, false);
	      element.addEventListener('otransitionend', events, false);
	      element.addEventListener('transitionend', events, false);
	    }

	    // set resize event on window
	    window.addEventListener('resize', events, false);

	  } else {

	    window.onresize = function () { setup() }; // to play nice with old IE

	  }

	  // expose the Swipe API
	  return {
	    setup: function() {

	      setup();

	    },
	    slide: function(to, speed) {

	      slide(to, speed);

	    },
	    prev: function() {

	      // cancel slideshow
	      stop();

	      prev();

	    },
	    next: function() {

	      stop();

	      next();

	    },
	    getPos: function() {

	      // return current index position
	      return index;

	    },
	    kill: function() {

	      // cancel slideshow
	      stop();

	      // reset element
	      element.style.width = 'auto';
	      element.style.left = 0;

	      // reset slides
	      var pos = slides.length;
	      while(pos--) {

	        var slide = slides[pos];
	        slide.style.width = '100%';
	        slide.style.left = 0;

	        if (browser.transitions) translate(pos, 0, 0);

	      }

	      // removed event listeners
	      if (browser.addEventListener) {

	        // remove current event listeners
	        element.removeEventListener('touchstart', events, false);
	        element.removeEventListener('webkitTransitionEnd', events, false);
	        element.removeEventListener('msTransitionEnd', events, false);
	        element.removeEventListener('oTransitionEnd', events, false);
	        element.removeEventListener('otransitionend', events, false);
	        element.removeEventListener('transitionend', events, false);
	        window.removeEventListener('resize', events, false);

	      }
	      else {

	        window.onresize = null;

	      }

	    }
	  }

	}


	if ( window.jQuery || window.Zepto ) {
	  (function($) {
	    $.fn.Swipe = function(params) {
	      return this.each(function() {
	        $(this).data('Swipe', new Swipe($(this)[0], params));
	      });
	    }
	  })( window.jQuery || window.Zepto )
	}


	/*** EXPORTS FROM exports-loader ***/
	module.exports = Swipe

/***/ }
/******/ ]);