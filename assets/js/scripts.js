function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}var dropdown=function(){function e(){_classCallCheck(this,e),this.trigger=document.querySelectorAll(".dropdown"),this.target=document.querySelectorAll(".dropdown [data-dropdown]"),this.mainNav=document.querySelector("nav#main-nav"),this.normal_logo=header.querySelector("img.logo").getAttribute("src"),this.dark_logo=header.querySelector("img.logo").getAttribute("data-dark"),this.headerHome=document.querySelector("div#wrapper.home"),this.init()}return _createClass(e,[{key:"init",value:function(){for(var t=this,e=0;e<this.trigger.length;e++)this.handleClick(this.trigger[e]),this.trigger[e].querySelector("[data-closebtn]")&&this.trigger[e].querySelector("[data-closebtn]").addEventListener("click",function(e){e.stopPropagation();for(var t=document.querySelectorAll(".dropdown.open"),o=0;o<t.length;o++)t[o].classList.remove("open"),t[o].querySelector("[data-dropdown]").classList.remove("d-block")});window.addEventListener("click",function(e){e.stopPropagation(),t.closeAllDropdowns()})}},{key:"closeAllDropdowns",value:function(){for(var e=document.querySelectorAll(".dropdown.open"),t=0;t<e.length;t++)e[t].contains(event.target)||(window.scrollY<50&&this.mainNav.classList.remove("white"),this.mainNav.querySelector("img.logo").src=this.normal_logo,e[t].classList.remove("open"),e[t].querySelector("[data-dropdown]").classList.remove("d-block"))}},{key:"handleClick",value:function(t){var o=this;t.querySelector("[data-trigger]").addEventListener("click",function(e){o.closeAllDropdowns(),e.preventDefault(),e.stopPropagation(),o.doDropdownAction(t,e)})}},{key:"doDropdownAction",value:function(e,t){(t.target!=e&&t.target.parentNode!=e||t.target.hasAttribute("data-trigger"))&&(e.classList.toggle("open"),e.querySelector("[data-dropdown]").classList.toggle("d-block"))}}]),e}(),accordion=function(){function t(e){_classCallCheck(this,t),this.accordionElement=e,this.items=e.querySelectorAll(".accordion-item"),this.init()}return _createClass(t,[{key:"init",value:function(){var t=window.location.href,r=this.accordionElement;[].forEach.call(this.items,function(o){o.querySelector(".accordion-heading").addEventListener("click",function(e){if(r.hasAttribute("data-autoclose")){var t=r.querySelectorAll(".accordion-item.open");[].forEach.call(t,function(e){e.classList.toggle("open")})}o.classList.toggle("open")},!1);var e=o.querySelector("a[href='"+t+"']");e&&(e.parentNode.classList.add("active"),o.classList.toggle("open"))})}}]),t}(),openEls=document.querySelectorAll("[data-open]"),closeEls=document.querySelectorAll("[data-close]"),isVisible="is-visible",_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=openEls[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var el=_step.value;el.addEventListener("click",function(){var e=this.dataset.open;document.getElementById(e).classList.add(isVisible)})}}catch(e){_didIteratorError=!0,_iteratorError=e}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _step2,_iterator2=closeEls[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){var _el=_step2.value;_el.addEventListener("click",function(){this.parentElement.parentElement.parentElement.classList.remove(isVisible)})}}catch(e){_didIteratorError2=!0,_iteratorError2=e}finally{try{_iteratorNormalCompletion2||null==_iterator2.return||_iterator2.return()}finally{if(_didIteratorError2)throw _iteratorError2}}document.addEventListener("click",function(e){e.target==document.querySelector(".modal.is-visible")&&document.querySelector(".modal.is-visible").classList.remove(isVisible)}),document.addEventListener("keyup",function(e){"Escape"==e.key&&document.querySelector(".modal.is-visible")&&document.querySelector(".modal.is-visible").classList.remove(isVisible)});var tab={nav:null,txt:null,init:function(){if(tab.nav=document.getElementById("tab-nav").getElementsByClassName("tabnav"),tab.txt=document.getElementById("tab-contents").getElementsByClassName("tabtxt"),0==tab.nav.length||0==tab.txt.length||tab.nav.length!=tab.txt.length)console.log("ERROR STARTING TABS");else{for(var e=0;e<tab.nav.length;e++)tab.nav[e].dataset.pos=e,tab.nav[e].addEventListener("click",tab.switch);tab.nav[0].classList.add("active"),tab.txt[0].classList.add("active")}},switch:function(){var e=!0,t=!1,o=void 0;try{for(var r,a=tab.nav[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){r.value.classList.remove("active")}}catch(e){t=!0,o=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw o}}var n=!0,i=!1,l=void 0;try{for(var s,c=tab.txt[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){s.value.classList.remove("active")}}catch(e){i=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(i)throw l}}tab.nav[this.dataset.pos].classList.add("active"),tab.txt[this.dataset.pos].classList.add("active")}},tabsNav=document.getElementById("tab-nav"),tabsContents=document.getElementById("tab-contents");tabsNav&&tabsContents&&window.addEventListener("load",tab.init);var scrollpos=window.scrollY,header=document.querySelector("nav#main-nav"),headerHome=document.querySelector("div#wrapper.home"),glideElements=document.querySelectorAll(".glide");"undefined"!=typeof Glide&&glideElements&&[].forEach.call(glideElements,function(e){if(e.classList.contains("big-banner"))new Glide("section.big-banner.glide",{type:"carousel",autoplay:1e4,animationDuration:1,gap:0,startAt:0,perView:1,animationTimingFunc:"ease",breakpoints:{300:{perView:1},992:{perView:1}}}).mount();else{var t="."+e.className.toString().split(" ").join("."),o=4;e.getAttribute("data-preView")&&(o=e.getAttribute("data-preView")),new Glide(t,{type:"carousel",autoplay:1e4,animationDuration:1e3,gap:0,startAt:0,perView:o,animationTimingFunc:"ease",breakpoints:{992:{perView:1},1200:{perView:3}}}).mount()}});var listElements=document.querySelectorAll(".listJS");"undefined"!=typeof List&&listElements&&[].forEach.call(listElements,function(e){var t=10;e.getAttribute("data-page")&&(t=e.getAttribute("data-page"));var o={valueNames:["title","description"],page:t,pagination:!0};new List(e.getAttribute("id"),o)}),document.querySelector(".hamburger-menu").addEventListener("click",function(){this.classList.toggle("open"),openContainer=this.getAttribute("data-open"),openContainer&&(openContainerNode=document.querySelector("."+openContainer),openContainerNode&&openContainerNode.classList.toggle("open"))});var cookiesPoligyAccept=document.getElementById("cookiesPoligyAccept");function setCookie(e,t,o){var r=new Date;r.setTime(r.getTime()+24*o*60*60*1e3);var a="expires="+r.toUTCString();document.cookie=e+"="+t+";"+a+";path=/"}function getCookie(e){for(var t=e+"=",o=document.cookie.split(";"),r=0;r<o.length;r++){for(var a=o[r];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""}void 0!==cookiesPoligyAccept&&null!=cookiesPoligyAccept&&cookiesPoligyAccept.addEventListener("click",function(){setCookie("user_accepted_cookie_policy","yes",100)}),window.addEventListener("load",function(){new dropdown;var e=document.querySelectorAll(".accordion-wrapper");e&&[].forEach.call(e,function(e){new accordion(e)})},!1);