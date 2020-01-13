function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}var dropdown=function(){function e(){_classCallCheck(this,e),this.trigger=document.querySelectorAll(".dropdown"),this.target=document.querySelectorAll(".dropdown [data-dropdown]"),this.mainNav=document.querySelector("nav#main-nav"),this.normal_logo=header.querySelector("img.logo").getAttribute("src"),this.dark_logo=header.querySelector("img.logo").getAttribute("data-dark"),this.headerHome=document.querySelector("div#wrapper.home"),this.init()}return _createClass(e,[{key:"init",value:function(){for(var t=this,e=0;e<this.trigger.length;e++)this.handleClick(this.trigger[e]),this.trigger[e].querySelector("[data-closebtn]")&&this.trigger[e].querySelector("[data-closebtn]").addEventListener("click",function(e){e.stopPropagation();for(var t=document.querySelectorAll(".dropdown.open"),o=0;o<t.length;o++)t[o].classList.remove("open"),t[o].querySelector("[data-dropdown]").classList.remove("d-block")});window.addEventListener("click",function(e){e.stopPropagation(),t.closeAllDropdowns()})}},{key:"closeAllDropdowns",value:function(){for(var e=document.querySelectorAll(".dropdown.open"),t=0;t<e.length;t++)e[t].contains(event.target)||(window.scrollY<50&&this.mainNav.classList.remove("white"),this.mainNav.querySelector("img.logo").src=this.normal_logo,e[t].classList.remove("open"),e[t].querySelector("[data-dropdown]").classList.remove("d-block"))}},{key:"handleClick",value:function(t){var o=this;t.querySelector("[data-trigger]").addEventListener("click",function(e){o.closeAllDropdowns(),e.preventDefault(),e.stopPropagation(),o.doDropdownAction(t,e)})}},{key:"doDropdownAction",value:function(e,t){(t.target!=e&&t.target.parentNode!=e||t.target.hasAttribute("data-trigger"))&&(e.classList.toggle("open"),e.querySelector("[data-dropdown]").classList.toggle("d-block"),t.target.hasAttribute("data-turn-header-white")&&991<window.innerWidth&&this.headerHome?null===document.querySelector("nav#main-nav.white")&&(this.mainNav.classList.add("white"),this.mainNav.querySelector("img.logo").src=this.dark_logo):(this.mainNav.classList.remove("white"),this.mainNav.querySelector("img.logo").src=this.normal_logo))}}]),e}(),accordion=function(){function t(e){_classCallCheck(this,t),this.accordionElement=e,this.items=e.querySelectorAll(".accordion-item"),this.init()}return _createClass(t,[{key:"init",value:function(){var t=window.location.href,r=this.accordionElement;[].forEach.call(this.items,function(o){o.querySelector(".accordion-heading").addEventListener("click",function(e){if(r.hasAttribute("data-autoclose")){var t=r.querySelectorAll(".accordion-item.open");[].forEach.call(t,function(e){e.classList.toggle("open")})}o.classList.toggle("open")},!1);var e=o.querySelector("a[href='"+t+"']");e&&(e.parentNode.classList.add("active"),o.classList.toggle("open"))})}}]),t}(),scrollpos=window.scrollY,header=document.querySelector("nav#main-nav"),headerHome=document.querySelector("div#wrapper.home");if(header&&headerHome){var header_height=header.offsetHeight,normal_logo=header.querySelector("img.logo").getAttribute("src"),dark_logo=header.querySelector("img.logo").getAttribute("data-dark"),add_class_on_scroll=function(){header.classList.add("white"),header.querySelector("img.logo").src=dark_logo},remove_class_on_scroll=function(){header.classList.remove("white"),header.querySelector("img.logo").src=normal_logo};window.addEventListener("scroll",function(){scrollpos=window.scrollY;var e=document.querySelector(".navbar .dropdown.open");header_height<=scrollpos?e||add_class_on_scroll():e||remove_class_on_scroll()})}var glideElements=document.querySelectorAll(".glide");"undefined"!=typeof Glide&&glideElements&&[].forEach.call(glideElements,function(e){if(e.classList.contains("big-banner"))new Glide("section.big-banner.glide",{type:"carousel",autoplay:1e4,animationDuration:1,gap:0,startAt:0,perView:1,animationTimingFunc:"ease",breakpoints:{300:{perView:1},992:{perView:1}}}).mount();else{var t="."+e.className.toString().split(" ").join("."),o=4;e.getAttribute("data-preView")&&(o=e.getAttribute("data-preView")),new Glide(t,{type:"carousel",autoplay:1e4,animationDuration:1e3,gap:0,startAt:0,perView:o,animationTimingFunc:"ease",breakpoints:{992:{perView:1},1200:{perView:3}}}).mount()}});var listElements=document.querySelectorAll(".listJS");function setCookie(e,t,o){var r=new Date;r.setTime(r.getTime()+24*o*60*60*1e3);var n="expires="+r.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"}function getCookie(e){for(var t=e+"=",o=document.cookie.split(";"),r=0;r<o.length;r++){for(var n=o[r];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return""}"undefined"!=typeof List&&listElements&&[].forEach.call(listElements,function(e){var t=10;e.getAttribute("data-page")&&(t=e.getAttribute("data-page"));var o={valueNames:["title","description"],page:t,pagination:!0};new List(e.getAttribute("id"),o)}),document.querySelector(".hamburger-menu").addEventListener("click",function(){this.classList.toggle("open"),openContainer=this.getAttribute("data-open"),openContainer&&(openContainerNode=document.querySelector("."+openContainer),openContainerNode&&openContainerNode.classList.toggle("open"))}),document.querySelector("#cookiesPoligyAccept").addEventListener("click",function(){setCookie("user_accepted_cookie_policy","yes",100)}),window.addEventListener("load",function(){new dropdown;var e=document.querySelectorAll(".accordion-wrapper");e&&[].forEach.call(e,function(e){new accordion(e)})},!1);