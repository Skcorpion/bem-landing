// let secMenuItems = document.querySelectorAll("#portfolio .menu__item"),
//   portfolioItems = document.querySelectorAll(".portfolio__item");

// secMenuItems.forEach(menuItem =>
//   menuItem.addEventListener("click", function(e) {
//     e.preventDefault();
//     //remove all currents
//     secMenuItems.forEach(function(item) {
//       if (item.classList.contains("menu__item_current")) {
//         item.classList.remove("menu__item_current");
//       }
//     });
//     //add current
//     menuItem.classList.add("menu__item_current");
//     //remove all disables
//     portfolioItems.forEach(function(item) {
//       item.classList.remove("portfolio__item_disable");
//     });

//     //web filter
//     if (menuItem.classList.contains("menu__item-web")) {
//       portfolioItems.forEach(function(item) {
//         if (!item.classList.contains("portfolio__item-web")) {
//           item.classList.add("portfolio__item_disable");
//         }
//       });
//     }

//     //apps filter
//     if (menuItem.classList.contains("menu__item-apps")) {
//       portfolioItems.forEach(function(item) {
//         if (!item.classList.contains("portfolio__item-apps")) {
//           item.classList.add("portfolio__item_disable");
//         }
//       });
//     }

//     //other filter
//     if (menuItem.classList.contains("menu__item-other")) {
//       portfolioItems.forEach(function(item) {
//         if (
//           item.classList.contains("portfolio__item-web") ||
//           item.classList.contains("portfolio__item-apps")
//         ) {
//           item.classList.add("portfolio__item_disable");
//         }
//       });
//     }
//   })
// );

// Cache selectors
var lastId,
  topMenu = $(".header__menu .menu__list"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind to scroll
$(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent()
      .removeClass("menu__item_current")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("menu__item_current");
  }
});

//Slick Slider
$(".portfolio__slider").slick({
  dots: true,
  arrows: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  speed: 900,
  customPaging: function(slider, i) {
    var title = $(slider.$slides[i])
      .find("[data-title]")
      .data("title");
    return '<div class="menu__item"> ' + title + " </div>";
  }
});
