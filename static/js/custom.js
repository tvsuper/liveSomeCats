(function () {
  $(window).scroll(function () {
    var top = $(document).scrollTop();
    $(".splash").css({
      "background-position": "0px -" + (top / 3).toFixed(2) + "px"
    });
    if (top>50) $("#home > .navbar").removeClass("navbar-transparent"); else $("#home > .navbar").addClass("navbar-transparent");
  });
  $("a[href='#']").click(function (e) {
    e.preventDefault();
  });
  var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function () {
    var html = $(this).parent().html();
    html = cleanSource(html);
    $("#source-modal pre").text(html);
    $("#source-modal").modal();
  });
  $(".bs-component [data-toggle=\"popover\"]").popover();
  $(".bs-component [data-toggle=\"tooltip\"]").tooltip();
  $(".bs-component").hover(function () {
    $(this).append($button);
    $button.show();
  }, function () {
    $button.hide();
  });
  function cleanSource(html) {
    html = html.replace(/×/g, "&times;").replace(/«/g, "&laquo;").replace(/»/g, "&raquo;").replace(/←/g, "&larr;").replace(/→/g, "&rarr;");
    var lines = html.split(/\n/);
    lines.shift();
    lines.splice(-1, 1);
    var indentSize = lines[0].length - lines[0].trim().length, re = new RegExp(" {" + indentSize + "}");
    lines = lines.map(function (line) {
      if (line.match(re)) {
        line = line.substring(indentSize);
      }
      return line;
    });
    lines = lines.join("\n");
    return lines;
  }
})();
/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 */
!function (f) {
  f.fn.theiaStickySidebar = function (c) {
    function b(c, b) {
      var e = i(c, b);
      e || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), f(document).on("scroll." + c.namespace, function (c, b) {
        return function (e) {
          var T = i(c, b);
          T && f(this).unbind(e)
        }
      }(c, b)), f(window).on("resize." + c.namespace, function (c, b) {
        return function (e) {
          var T = i(c, b);
          T && f(this).unbind(e)
        }
      }(c, b)))
    }
    function i(c, b) {
      return c.initialized === !0 || !(f("body").width()<c.minWidth) && (e(c, b), !0)
    }
    function e(c, b) {
      c.initialized = !0;
      var i = f("#theia-sticky-sidebar-stylesheet-" + c.namespace);
      0 === i.length && f("head").append(f('<style id="theia-sticky-sidebar-stylesheet-' + c.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), b.each(function () {
        function b() {
          e.fixedScrollTop = 0, e.sidebar.css({"min-height": "1px"}), e.stickySidebar.css({position: "static", width: "", transform: "none"})
        }
        function i(c) {
          var b = c.height();
          return c.children().each(function () {
            b = Math.max(b, f(this).height())
          }), b
        }
        var e = {};
        if (e.sidebar = f(this), e.options = c || {}, e.container = f(e.options.containerSelector), 0 == e.container.length && (e.container = e.sidebar.parent()), e.sidebar.parents().css("-webkit-transform", "none"), e.sidebar.css({position: e.options.defaultPosition, overflow: "visible", "-webkit-box-sizing": "border-box", "-moz-box-sizing": "border-box", "box-sizing": "border-box"}), e.stickySidebar = e.sidebar.find(".theiaStickySidebar"), 0 == e.stickySidebar.length) {
          var g = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
          e.sidebar.find("script").filter(function (f, c) {
            return 0 === c.type.length || c.type.match(g)
          }).remove(), e.stickySidebar = f("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()), e.sidebar.append(e.stickySidebar)
        }
        e.marginBottom = parseInt(e.sidebar.css("margin-bottom")), e.paddingTop = parseInt(e.sidebar.css("padding-top")), e.paddingBottom = parseInt(e.sidebar.css("padding-bottom"));
        var ib = e.stickySidebar.offset().top, M = e.stickySidebar.outerHeight();
        e.stickySidebar.css("padding-top", 1), e.stickySidebar.css("padding-bottom", 1), ib -= e.stickySidebar.offset().top, M = e.stickySidebar.outerHeight() - M - ib, 0 == ib ? (e.stickySidebar.css("padding-top", 0), e.stickySidebarPaddingTop = 0) : e.stickySidebarPaddingTop = 1, 0 == M ? (e.stickySidebar.css("padding-bottom", 0), e.stickySidebarPaddingBottom = 0) : e.stickySidebarPaddingBottom = 1, e.previousScrollTop = null, e.fixedScrollTop = 0, b(), e.onScroll = function (e) {
          if (e.stickySidebar.is(":visible")) {
            if (f("body").width()<e.options.minWidth) return void b();
            if (e.options.disableOnResponsiveLayouts) {
              var g = e.sidebar.outerWidth("none" == e.sidebar.css("float"));
              if (g + 50>e.container.width()) return void b()
            }
            var ib = f(document).scrollTop(), M = "static";
            if (ib>=e.sidebar.offset().top + (e.paddingTop - e.options.additionalMarginTop)) {
              var a, Y = e.paddingTop + c.additionalMarginTop, aP = e.paddingBottom + e.marginBottom + c.additionalMarginBottom, cL = e.sidebar.offset().top, cg = e.sidebar.offset().top + i(e.container), eD = 0 + c.additionalMarginTop, fF = e.stickySidebar.outerHeight() + Y + aP<f(window).height();
              a = fF ? eD + e.stickySidebar.outerHeight() : f(window).height() - e.marginBottom - e.paddingBottom - c.additionalMarginBottom;
              var bj = cL - ib + e.paddingTop, aQ = cg - ib - e.paddingBottom - e.marginBottom, fA = e.stickySidebar.offset().top - ib, ab = e.previousScrollTop - ib;
              "fixed" == e.stickySidebar.css("position") && "modern" == e.options.sidebarBehavior && (fA += ab), "stick-to-top" == e.options.sidebarBehavior && (fA = c.additionalMarginTop), "stick-to-bottom" == e.options.sidebarBehavior && (fA = a - e.stickySidebar.outerHeight()), fA = ab>0 ? Math.min(fA, eD) : Math.max(fA, a - e.stickySidebar.outerHeight()), fA = Math.max(fA, bj), fA = Math.min(fA, aQ - e.stickySidebar.outerHeight());
              var fh = e.container.height() == e.stickySidebar.outerHeight();
              M = (fh || fA != eD) && (fh || fA != a - e.stickySidebar.outerHeight()) ? ib + fA - e.sidebar.offset().top - e.paddingTop<=c.additionalMarginTop ? "static" : "absolute" : "fixed"
            }
            if ("fixed" == M) {
              var cP = f(document).scrollLeft();
              e.stickySidebar.css({position: "fixed", width: T(e.stickySidebar) + "px", transform: "translateY(" + fA + "px)", left: e.sidebar.offset().left + parseInt(e.sidebar.css("padding-left")) - cP + "px", top: "0px"})
            } else if ("absolute" == M) {
              var d = {};
              "absolute" != e.stickySidebar.css("position") && (d.position = "absolute", d.transform = "translateY(" + (ib + fA - e.sidebar.offset().top - e.stickySidebarPaddingTop - e.stickySidebarPaddingBottom) + "px)", d.top = "0px"), d.width = T(e.stickySidebar) + "px", d.left = "", e.stickySidebar.css(d)
            } else "static" == M && b();
            "static" != M && 1 == e.options.updateSidebarHeight && e.sidebar.css({"min-height": e.stickySidebar.outerHeight() + e.stickySidebar.offset().top - e.sidebar.offset().top + e.paddingBottom}), e.previousScrollTop = ib
          }
        }, e.onScroll(e), f(document).on("scroll." + e.options.namespace, function (f) {
          return function () {
            f.onScroll(f)
          }
        }(e)), f(window).on("resize." + e.options.namespace, function (f) {
          return function () {
            f.stickySidebar.css({position: "static"}), f.onScroll(f)
          }
        }(e)), "undefined" != typeof ResizeSensor && new ResizeSensor(e.stickySidebar[0], function (f) {
          return function () {
            f.onScroll(f)
          }
        }(e))
      })
    }
    function T(f) {
      var c;
      try {
        c = f[0].getBoundingClientRect().width
      } catch (f) {
      }
      return "undefined" == typeof c && (c = f.width()), c
    }
    var g = {containerSelector: "", additionalMarginTop: 0, additionalMarginBottom: 0, updateSidebarHeight: !0, minWidth: 0, disableOnResponsiveLayouts: !0, sidebarBehavior: "modern", defaultPosition: "relative", namespace: "TSS"};
    return c = f.extend(g, c), c.additionalMarginTop = parseInt(c.additionalMarginTop) || 0, c.additionalMarginBottom = parseInt(c.additionalMarginBottom) || 0, b(c, this), this
  }
}(jQuery);
$(document).ready(function () {
  $(".sidebar").theiaStickySidebar({
    additionalMarginTop: 20,
    topSpacing: 0,
    containerSelector: '.com',
    innerWrapperClass: '.you'
  })
});
$(function () {
  if ($('.jietu').length>0) {
    var navH = $(".jietu").offset().top;
    $(window).scroll(function () {
      var scroH = $(this).scrollTop();
      var scroW = $(window).width();
      if (scroH>navH && scroW>1200) {
        $(".jietu").css({"display": "none"});
      } else if (scroH<navH && scroW>1200) {
        $(".jietu").css({"display": "unset"});
      }
    });
  }
});
function ponglun(id, name) {
  document.getElementById('dingji').value = id;
  document.getElementById('textarea').value = '@' + name + " ";
}
//player
var myVid = document.getElementById("player");
if (myVid) {
  var src = "https://v.nrzj.vip/video.php";
  myVid.src = src;
  myVid.volume = 0.9;
  (function (window, document){
    var get = function (id){
      return document.getElementById(id);
    }
    var bind = function (element, event, callback){
      return element.addEventListener(event, callback);
    }
    var auto = true;
    var player = get('player');
    var randomm = function (){
      player.src = src + "?_t=" + Math.random();
      player.play();
    }
    bind(get('huanyige'), 'click', randomm);
    bind(player, 'error', function (){
      randomm();
    });
    bind(get('lianxu'), 'click', function (){
      auto = !auto;
      this.innerText = (auto ? '连续开启' : '连续关闭');
      if (this.innerText == "连续关闭") {
        myVid.loop = "loop";
      } else {
        myVid.loop = "";
      }
    });
    bind(player, 'ended', function (){
      if (auto) randomm();
    });
  })(window, document);
}
//player