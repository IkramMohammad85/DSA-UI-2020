function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dropdown =
/*#__PURE__*/
function () {
  function dropdown() {
    _classCallCheck(this, dropdown);

    this.trigger = document.querySelectorAll('.dropdown');
    this.target = document.querySelectorAll('.dropdown [data-dropdown]');
    this.mainNav = document.querySelector('nav#main-nav');
    this.normal_logo = header.querySelector('img.logo').getAttribute('src');
    this.dark_logo = header.querySelector('img.logo').getAttribute('data-dark');
    this.headerHome = document.querySelector("div#wrapper.home");
    this.init();
  }

  _createClass(dropdown, [{
    key: "init",
    value: function init() {
      var _this = this;

      for (var i = 0; i < this.trigger.length; i++) {
        this.handleClick(this.trigger[i]);

        if (this.trigger[i].querySelector('[data-closebtn]')) {
          this.trigger[i].querySelector('[data-closebtn]').addEventListener('click', function (event) {
            event.stopPropagation();
            var openDropdowns = document.querySelectorAll('.dropdown.open');

            for (var _i = 0; _i < openDropdowns.length; _i++) {
              openDropdowns[_i].classList.remove('open');

              openDropdowns[_i].querySelector('[data-dropdown]').classList.remove('d-block');
            }
          });
        }
      }

      window.addEventListener('click', function (event) {
        event.stopPropagation();

        _this.closeAllDropdowns();
      });
    }
  }, {
    key: "closeAllDropdowns",
    value: function closeAllDropdowns() {
      var openDropdowns = document.querySelectorAll('.dropdown.open');

      for (var i = 0; i < openDropdowns.length; i++) {
        if (!openDropdowns[i].contains(event.target)) {
          if (window.scrollY < 50) this.mainNav.classList.remove("white");
          this.mainNav.querySelector('img.logo').src = this.normal_logo;
          openDropdowns[i].classList.remove('open');
          openDropdowns[i].querySelector('[data-dropdown]').classList.remove('d-block');
        }
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(el) {
      var _this2 = this;

      if (el.querySelector('[data-trigger]')) {
        el.querySelector('[data-trigger]').addEventListener('click', function (event) {
          _this2.closeAllDropdowns();

          event.preventDefault();
          event.stopPropagation();

          _this2.doDropdownAction(el, event);
        });
      } //apply mouse hover event for navbar

      /*
      if(el.parentNode.classList.contains("navbar"))
      {
        el.addEventListener('mouseover', (event) => {
          el.querySelector('[data-trigger]').click();
        });
      }
      */

    }
  }, {
    key: "doDropdownAction",
    value: function doDropdownAction(el, event) {
      if (event.target != el && event.target.parentNode != el || event.target.hasAttribute('data-trigger')) {
        el.classList.toggle('open');
        el.querySelector('[data-dropdown]').classList.toggle('d-block');
        /*
         if(event.target.hasAttribute('data-turn-header-white') && window.innerWidth>991 && this.headerHome){
          if(document.querySelector('nav#main-nav.white')===null){
            this.mainNav.classList.add("white");this.mainNav.querySelector('img.logo').src = this.dark_logo;
          }
          } else {
            this.mainNav.classList.remove("white");this.mainNav.querySelector('img.logo').src = this.normal_logo;
          }
        */
      }
    }
  }]);

  return dropdown;
}();

var accordion =
/*#__PURE__*/
function () {
  function accordion(el) {
    _classCallCheck(this, accordion);

    this.accordionElement = el;
    this.items = el.querySelectorAll('.accordion-item');
    this.init();
  }

  _createClass(accordion, [{
    key: "init",
    value: function init() {
      var pageURL = window.location.href;
      var accordionElement = this.accordionElement;
      [].forEach.call(this.items, function (item) {
        item.querySelector('.accordion-heading').addEventListener('click', function (event) {
          if (accordionElement.hasAttribute("data-autoclose")) {
            var itemsOpen = accordionElement.querySelectorAll('.accordion-item.open');
            [].forEach.call(itemsOpen, function (item) {
              item.classList.toggle('open');
            });
          }

          item.classList.toggle('open');
        }, false); //checking to see if their are any active elements on the accordion

        var activeDom = item.querySelector("a[href='" + pageURL + "']");

        if (activeDom) {
          activeDom.parentNode.classList.add("active");
          item.classList.toggle('open');
        }
      });
    }
  }]);

  return accordion;
}();

var openEls = document.querySelectorAll("[data-open]");
var closeEls = document.querySelectorAll("[data-close]");
var isVisible = "is-visible";
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = openEls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var el = _step.value;
    el.addEventListener("click", function () {
      var modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = closeEls[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _el = _step2.value;

    _el.addEventListener("click", function () {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

document.addEventListener("click", function (e) {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
document.addEventListener("keyup", function (e) {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
var tab = {
  nav: null,
  // holds all tabs
  txt: null,
  // holds all text containers
  init: function init() {
    // tab.init() : init tab interface
    // Get all tabs + contents
    tab.nav = document.getElementById("tab-nav").getElementsByClassName("tabnav");
    tab.txt = document.getElementById("tab-contents").getElementsByClassName("tabtxt"); // Error checking

    if (tab.nav.length == 0 || tab.txt.length == 0 || tab.nav.length != tab.txt.length) {
      console.log("ERROR STARTING TABS");
    } else {
      // Attach onclick events to navigation tabs
      for (var i = 0; i < tab.nav.length; i++) {
        tab.nav[i].dataset.pos = i;
        tab.nav[i].addEventListener("click", tab.switch);
      } // Default - show first tab


      tab.nav[0].classList.add("active");
      tab.txt[0].classList.add("active");
    }
  },
  switch: function _switch() {
    // tab.switch() : change to another tab
    // Hide all tabs & text
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = tab.nav[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var t = _step3.value;
        t.classList.remove("active");
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = tab.txt[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var t = _step4.value;
        t.classList.remove("active");
      } // Set current tab

    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    tab.nav[this.dataset.pos].classList.add("active");
    tab.txt[this.dataset.pos].classList.add("active");
  }
};
var tabsNav = document.getElementById("tab-nav");
var tabsContents = document.getElementById("tab-contents");

if (tabsNav && tabsContents) {
  window.addEventListener("load", tab.init);
} //Feature: Header effect on scroll


var scrollpos = window.scrollY;
var header = document.querySelector("nav#main-nav");
var headerHome = document.querySelector("div#wrapper.home"); //apply this effect only to homepage

/*
if(header && headerHome){
      const header_height = header.offsetHeight
      const normal_logo=header.querySelector('img.logo').getAttribute('src')
      const dark_logo=header.querySelector('img.logo').getAttribute('data-dark')
      const add_class_on_scroll = () => { header.classList.add("white");header.querySelector('img.logo').src = dark_logo; }
      const remove_class_on_scroll = () => { header.classList.remove("white");header.querySelector('img.logo').src = normal_logo; }
      window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;

      const changeColorExceptionsScroll=document.querySelector(".navbar .dropdown.open");
      if (scrollpos >= header_height) { if(!changeColorExceptionsScroll) add_class_on_scroll() }
      else { if(!changeColorExceptionsScroll) remove_class_on_scroll() }
      })
}
*/
//Feature: Homepage Big Banner Slider

var glideElements = document.querySelectorAll(".glide");

if (typeof Glide != "undefined" && glideElements) {
  [].forEach.call(glideElements, function (glideItem) {
    if (glideItem.classList.contains('big-banner')) {
      new Glide('section.big-banner.glide', {
        type: 'carousel',
        autoplay: 10000,
        animationDuration: 1,
        gap: 0,
        startAt: 0,
        perView: 1,
        animationTimingFunc: 'ease',
        breakpoints: {
          300: {
            perView: 1
          },
          992: {
            perView: 1
          }
        }
      }).mount();
    } else {
      var glideClass = '.' + glideItem.className.toString().split(' ').join('.');
      var perView = 4;
      if (glideItem.getAttribute('data-preView')) perView = glideItem.getAttribute('data-preView');
      var breakpoints = {
        992: {
          perView: 1
        },
        1200: {
          perView: 3
        }
      };
      console.log(glideItem.hasAttribute('data-homeevents'));

      if (glideItem.hasAttribute('data-homeevents')) {
        breakpoints = {
          992: {
            perView: 1
          },
          1260: {
            perView: 2
          }
        };
      }

      new Glide(glideClass, {
        type: 'carousel',
        autoplay: 10000,
        animationDuration: 1000,
        gap: 0,
        startAt: 0,
        perView: perView,
        peek: 0,
        animationTimingFunc: 'ease',
        breakpoints: breakpoints
      }).mount();
    }
  });
} //Feature: List.js


var listElements = document.querySelectorAll(".listJS");

if (typeof List != "undefined" && listElements) {
  [].forEach.call(listElements, function (item) {
    var recordsPerPage = 10;
    if (item.getAttribute('data-page')) recordsPerPage = item.getAttribute('data-page');
    var options = {
      valueNames: ['title', 'description'],
      page: recordsPerPage,
      pagination: true
    };
    new List(item.getAttribute('id'), options);
  });
} //Hamburger Menu Click Event Listener


document.querySelector(".hamburger-menu").addEventListener('click', function () {
  this.classList.toggle('open');
  openContainer = this.getAttribute("data-open");

  if (openContainer) {
    openContainerNode = document.querySelector('.' + openContainer);
    if (openContainerNode) openContainerNode.classList.toggle('open');
  }
}); //cookie policy accept

var cookiesPoligyAccept = document.getElementById('cookiesPoligyAccept');

if (typeof cookiesPoligyAccept != 'undefined' && cookiesPoligyAccept != null) {
  cookiesPoligyAccept.addEventListener('click', function () {
    setCookie("user_accepted_cookie_policy", "yes", 100);
  });
} //Components: dropdown,accordion


window.addEventListener('load', function () {
  //Initiate the dropdown, the component will auto initiate all the dropdowns
  //Custom for dezshira.com layout ONLY
  new dropdown(); //Scan all the pages for accordion and initiate

  var accordions = document.querySelectorAll('.accordion-wrapper');

  if (accordions) {
    [].forEach.call(accordions, function (item) {
      new accordion(item);
    });
  }
}, false); //Helper Functions

function setCookie(t, e, i) {
  var n = new Date();
  n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3);
  var s = "expires=" + n.toUTCString();
  document.cookie = t + "=" + e + ";" + s + ";path=/";
}

function getCookie(t) {
  for (var e = t + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
    for (var s = i[n]; " " == s.charAt(0);) {
      s = s.substring(1);
    }

    if (0 == s.indexOf(e)) return s.substring(e.length, s.length);
  }

  return "";
}

ScrollReveal().reveal('.scroll-reveal', {
  delay: 200
}); //CTA scroll

function scrollToDiv() {
  document.getElementById("CTA_form").scrollIntoView({
    scrollToFixed: 150,
    behavior: 'smooth'
  });
}