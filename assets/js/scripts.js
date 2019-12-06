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
    this.init();
  }

  _createClass(dropdown, [{
    key: "init",
    value: function init() {
      var _this = this;

      closeButtons = document.querySelectorAll('.dropdown [data-closeBtn]');

      var _loop = function _loop(i) {
        _this.handleClick(_this.trigger[i]);

        var closeBtn = _this.trigger[i].querySelector('[data-closeBtn]');

        if (closeBtn) {
          closeBtn.addEventListener('click', function (event) {
            _this.handleClose(_this.target[i]);
          });
        }
      };

      for (var i = 0; i < this.trigger.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(el) {
      var _this2 = this;

      el.addEventListener('click', function (event) {
        elHandler = el.querySelector('[data-trigger]');
        event.stopPropagation();
        event.preventDefault();
        elHandler.parentNode.classList.toggle('open');
        elHandler.nextElementSibling.classList.toggle('d-block');
        var changeColorExceptionsClick = document.querySelector(".header-menu.open");

        if (elHandler.hasAttribute('data-turn-header-white') && !changeColorExceptionsClick) {
          header.classList.add("white");
          header.querySelector('img.logo').src = 'assets/img/logo-black.png';
        }

        for (var i = 0; i < _this2.target.length; i++) {
          _this2.handleClose(_this2.target[i]);
        }
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose(el) {
      window.addEventListener('mouseup', function (event) {
        if (event.target != el && event.target.parentNode != el) {
          if (el.classList.contains('d-block')) {
            var changeColorExceptionsClick = document.querySelector(".header-menu.open");

            if (!changeColorExceptionsClick) {
              header.classList.remove("white");
              header.querySelector('img.logo').src = 'assets/img/logo.png';
            }

            el.parentNode.classList.remove('open');
            el.classList.remove('d-block');
          }
        }
      });
    }
  }]);

  return dropdown;
}(); //Feature: Header effect on scroll


var scrollpos = window.scrollY;
var header = document.querySelector("nav#main-nav");

if (header) {
  var header_height = header.offsetHeight;

  var add_class_on_scroll = function add_class_on_scroll() {
    header.classList.add("white");
    header.querySelector('img.logo').src = 'assets/img/logo-black.png';
  };

  var remove_class_on_scroll = function remove_class_on_scroll() {
    header.classList.remove("white");
    header.querySelector('img.logo').src = 'assets/img/logo.png';
  };

  window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    var changeColorExceptionsScroll = document.querySelector(".navbar .dropdown.open");

    if (scrollpos >= header_height) {
      if (!changeColorExceptionsScroll) add_class_on_scroll();
    } else {
      if (!changeColorExceptionsScroll) remove_class_on_scroll();
    }
  });
} //Feature: Homepage Big Banner Slider


if (typeof Glide != "undefined") {} // new Glide('section.big-banner.glide', {
//       type:'carousel',
//       autoplay: 10000,
//       animationDuration:1000,
//       gap:0,
//       startAt: 0,
//       perView: 1,
//       animationTimingFunc: 'ease',
//     }).mount();
//Hamburger Menu Click Event Listener


document.querySelector(".hamburger-menu").addEventListener('click', function () {
  this.classList.toggle('open');
  openContainer = this.getAttribute("data-open");

  if (openContainer) {
    openContainerNode = document.querySelector('.' + openContainer);
    if (openContainerNode) openContainerNode.classList.toggle('open');
  }
}); //Component: dropdown

window.addEventListener('load', function () {
  new dropdown();
}, false);