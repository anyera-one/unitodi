// start height
let oldWidth = window.innerWidth;
const docheight = document.documentElement;
const headert = document.querySelector('.header__transparent');
docheight.style.setProperty('--height', `${window.innerHeight}px`);
const appHeight = () => {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    docheight.style.setProperty('--height', `${window.innerHeight}px`);
    if (document.querySelector('.history__rotate')) {
      document.querySelector('.history__rotate').style.height = document.querySelector('.history__rotate').clientWidth + 'px';
    }
  }
  oldWidth = window.innerWidth;
}
window.addEventListener('resize', appHeight);
appHeight();
// end height

// start language
const language = document.querySelector('#language');
const language_wrapper = document.querySelector('.header__language');
const languageButtons = document.querySelectorAll('#RU, #EN');

if (language_wrapper) {
  language_wrapper.addEventListener('click', function() {
    document.querySelector('.header__language_wrapper').classList.toggle('active');
  });
}

languageButtons.forEach(button => {
  button.addEventListener('click', function() {
    language.innerText = this.id === 'RU' ? 'Ru' : 'En';
    document.querySelector('.header__language_wrapper').classList.remove('active'); 
  });
});
// end language

// start scroll
scroll = new LocomotiveScroll({el: document.querySelector('[data-scroll-container]'),smooth:true,getDirection: true,scrollFromAnywhere: true,breakpoint: 0,inertia: 1.7,mobile: {breakpoint: 0,smooth: false,inertia: 0,},tablet: {breakpoint: 0,smooth: false,inertia: 1.7,},smartphone: {breakpoint: 0,smooth: false,inertia: 1.7,}})
// scroll = new LocomotiveScroll({el: document.querySelector('[data-scroll-container]'),smooth: true,getDirection: true,scrollFromAnywhere: true,breakpoint: 0,inertia: 0,tablet: {breakpoint: 0,smooth: false,inertia: 0,}})
new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"));

const hn_scroll = document.querySelector('.header__nav_scroll');
const hc_scroll = document.querySelector('.header__consultation_scroll');
const cp_scroll = document.querySelector('.career_popup__scroll');
const fp_scroll = document.querySelector('.feedback_popup__scroll');
const gp_scroll = document.querySelector('.generation_popup__scroll');

// Scrollbar.init(hn_scroll);
// Scrollbar.init(hc_scroll);
// if (cp_scroll) {Scrollbar.init(cp_scroll);}
// if (fp_scroll) {Scrollbar.init(fp_scroll);}
// if (gp_scroll) {Scrollbar.init(gp_scroll);}

const header = document.querySelector('.header');
const projecttop = document.querySelector('.project_top');
const projecttopinfo = document.querySelector('.project_top__info');
const headerprogress = document.querySelector('.header__progress_bar');

if (!document.querySelector('.has-scroll-smooth')) {
  window.addEventListener('scroll', function() {
    if (headert) {
      if (window.scrollY <= 40) {
        header.classList.add('header__transparent');
      } else {
        header.classList.remove('header__transparent');
      }
    }
    
    document.documentElement.setAttribute('scroll', `${window.scrollY}`);
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let documentHeight = Math.max(
      window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight, document.querySelector('.main').clientHeight
    );
    let scrollpage = Math.round((scrollTop / (document.querySelector('.main').clientHeight - windowHeight)) * 100);
    headerprogress.style.flexBasis = scrollpage + '%';
  
  });
} else {
  scroll.on('scroll', (args) => {
    var scrollY = Math.round(args["scroll"]["y"]);
    var scrollH = Math.round(args["limit"]["y"]);
    let scrollheader = Math.round((scrollY / scrollH) * 100);
    headerprogress.style.flexBasis = scrollheader + '%';

    document.documentElement.setAttribute('scroll', `${Math.round(args["scroll"]["y"])}`);
  
    if (headert) {
      if (Math.round(args["scroll"]["y"]) <= 40) {
        header.classList.add('header__transparent');
      } else {
        header.classList.remove('header__transparent');
      }
    }
  });
}
// end scroll

// start cursor
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const cursorBlock = cursor.querySelector(".cursor__block");
  const a = document.querySelectorAll('a');
  const button = document.querySelectorAll('button');
  const label = document.querySelectorAll('label');
  const hslanguageicon = document.querySelectorAll('.header__set_language_icon');
  const sinview = document.querySelectorAll('.showreel__button');
  const cursorgrab = document.querySelectorAll('.c-scrollbar_thumb');
  const buttonnext = document.querySelectorAll('.swiper-button-next');
  const buttonprev = document.querySelectorAll('.swiper-button-prev');
  const sliders = document.querySelectorAll(".swiper-wrapper");

  document.addEventListener('mousemove', function(e){
    let ctx = e.clientX;
    let cty = e.clientY;
    if (ctx > (document.body.offsetWidth - 5) || cty > (document.body.offsetHeight - 5) || ctx < 5 || cty < 5) {
      cursor.classList.add('leave')
    } else {
      cursor.classList.remove('leave')
    }
  });
  
  function moveCursor(event) {
    var cursorX = event.clientX + "px";
    var cursorY = event.clientY + "px";
    cursor.style.transform = `translate3d(${cursorX}, ${cursorY}, 0)`;
  }

  document.onmousemove = (event) => {
    moveCursor(event);
    cursor.classList.remove("active");
  };

  document.onpointermove = (event) => {
    moveCursor(event);
    cursor.classList.remove("active");
  };

  document.addEventListener('mousedown', function(){
    cursor.classList.add('active')
  });

  document.addEventListener('mouseup', function(){
    cursor.classList.remove('active')
  });
  
  sinview.forEach(item => {
    item.onmouseenter = () => {
      cursor.classList.add("cursor__showreel");
    };
    item.onmouseleave = () => {
      cursor.classList.remove("cursor__showreel");
      cursorBlock.classList.remove("active");
    };
    item.onpointerdown = () => {
      cursorBlock.classList.add("active");
    };
    item.onpointerup = () => {
      cursorBlock.classList.remove("active");
    };
  });

  cursorgrab.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });
  
  sliders.forEach(item => {
    item.onmouseenter = () => {
      cursor.classList.add("cursor__slider");
    };
    item.onmouseleave = () => {
      cursor.classList.remove("cursor__slider");
      cursorBlock.classList.remove("active");
    };
    item.onpointerdown = () => {
      cursorBlock.classList.add("active");
    };
    item.onpointerup = () => {
      cursorBlock.classList.remove("active");
    };
  });

  a.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  button.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  hslanguageicon.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  label.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  buttonnext.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  buttonprev.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })
});
// end cursor

// start year
const year = document.querySelector('.footer__year');
if(year) {
  const currentYear = new Date().getFullYear();
  year.insertAdjacentText('beforebegin', currentYear);
  year.remove();
}
// end year

// start domen
const domen = document.querySelector('.domen');
if(domen){
  let domens = document.querySelectorAll(".domen");
  for (let i = 0; i < domens.length; i++) {
    domens[i].innerText = window.location.hostname;
  }
}
// end domen

const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__navigation');
const burger = document.querySelector('.header__burger');
const headerClose = document.querySelector('.header__close');
const menuItemActive = document.getElementsByClassName("header__nav_item active");

// button header__burger
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    overlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    header.classList.remove("active");
    headerClose.classList.remove("active");
    document.documentElement.classList.remove("noscroll");
    scroll.start();
  } else {
    overlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    header.classList.add("active");
    headerClose.classList.add("active");
    document.documentElement.classList.add("noscroll");
    header.classList.remove("hidden");
    scroll.stop();
  }
})
// end header__burger

// end header__popup
const headerPopup = document.querySelector('.header__popup');
const headerNavClose = document.querySelector('.header__navigation_close');
const headerNavLinkActive = document.querySelectorAll(".header .header__nav_link");
const headerPopupActive = document.querySelectorAll(".header .header__popup");
const headerSublinkActive = document.querySelectorAll(".header .header__sublink");
const headerSubNavActive = document.querySelectorAll(".header .header__subnav");
const headerSubSubNavActive = document.querySelectorAll(".header .header__subsubnav");
const headerNavLeftActive = document.querySelectorAll(".header .header__nav_left");
const headerNavRightActive = document.querySelectorAll(".header .header__nav_right");
if(headerPopup){
  const headerNavLink = document.querySelectorAll('.header__nav_link');
  const headerNavigation = document.querySelectorAll('.header__navigation');
  headerNavLink.forEach(item => {
    item.addEventListener('mouseover', () => {
      if (window.innerWidth > 1280) {
        let index = item.parentElement ? [...item.parentElement.parentNode.children].indexOf(item.parentElement) : -1;
        if(item.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[index].children[0] && !item.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[index].classList.contains("active")) {
          headerPopupActive.forEach((n) => n.classList.remove("active"));
          headerNavLinkActive.forEach((n) => n.classList.remove("active"));
          headerNavLeftActive.forEach((n) => n.classList.remove("active"));
          headerNavRightActive.forEach((n) => n.classList.remove("active"));
          headerSublinkActive.forEach((n) => n.classList.remove("active"));
          headerSubNavActive.forEach((n) => n.classList.remove("active"));
          headerSubSubNavActive.forEach((n) => n.classList.remove("active"));
          item.classList.add("active");
          item.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[index].classList.add("active");
          item.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[index].children[0].children[1].children[0].children[1].children[0].children[0].classList.add("active");
          item.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[index].children[0].children[1].children[1].children[1].children[0].children[0].classList.add("active");
          overlay.classList.add("active");
          document.documentElement.classList.add("noscroll");
          scroll.stop();
        } else if (!item.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[index].children[0]) {
          headerPopupActive.forEach((n) => n.classList.remove("active"));
          headerNavLinkActive.forEach((n) => n.classList.remove("active"));
          headerNavLeftActive.forEach((n) => n.classList.remove("active"));
          headerNavRightActive.forEach((n) => n.classList.remove("active"));
          headerSublinkActive.forEach((n) => n.classList.remove("active"));
          headerSubNavActive.forEach((n) => n.classList.remove("active"));
          headerSubSubNavActive.forEach((n) => n.classList.remove("active"));
          overlay.classList.remove("active");
          document.documentElement.classList.remove("noscroll");
          scroll.start();
        }
      }
    })
  })
  headerNavigation.forEach(item => {
    item.addEventListener('mouseleave', () => {
      if (window.innerWidth > 1280) {
        headerPopupActive.forEach((n) => n.classList.remove("active"));
        headerNavLinkActive.forEach((n) => n.classList.remove("active"));
        headerNavLeftActive.forEach((n) => n.classList.remove("active"));
        headerNavRightActive.forEach((n) => n.classList.remove("active"));
        headerSublinkActive.forEach((n) => n.classList.remove("active"));
        headerSubNavActive.forEach((n) => n.classList.remove("active"));
        headerSubSubNavActive.forEach((n) => n.classList.remove("active"));
        overlay.classList.remove("active");
        document.documentElement.classList.remove("noscroll");
        scroll.start();
      }
    });
  })

  const headerSubLink = document.querySelectorAll('.header__sublink');
  headerSubLink.forEach(item => {
    item.addEventListener('mouseover', () => {
      if (window.innerWidth > 1280) {
        let index = item.parentElement ? [...item.parentElement.parentNode.children].indexOf(item.parentElement) : -1;
        if(!item.parentElement.classList.contains("active") && item.parentElement.parentElement.parentElement.nextElementSibling.children[1].children[0].children[index]) {
          headerSubNavActive.forEach((n) => n.classList.remove("active"));
          headerSubSubNavActive.forEach((n) => n.classList.remove("active"));
          headerSublinkActive.forEach((n) => n.classList.remove("active"));
          item.classList.add("active");
          item.parentElement.classList.add("active");
          item.parentElement.parentElement.parentElement.nextElementSibling.children[1].children[0].children[index].classList.add("active");
          overlay.classList.add("active");
          document.documentElement.classList.add("noscroll");
          scroll.stop();
        }
      }
    })
  })

  headerNavClose.addEventListener('click', function() {
    headerPopupActive.forEach((n) => n.classList.remove("active"));
    headerNavLinkActive.forEach((n) => n.classList.remove("active"));
    headerSubNavActive.forEach((n) => n.classList.remove("active"));
    headerSubSubNavActive.forEach((n) => n.classList.remove("active"));
    headerSublinkActive.forEach((n) => n.classList.remove("active"));
    headerNavLeftActive.forEach((n) => n.classList.remove("active"));
    headerNavRightActive.forEach((n) => n.classList.remove("active"));
    overlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    header.classList.remove("active");
    headerClose.classList.remove("active");
    document.documentElement.classList.remove("noscroll");
    scroll.start();
  })

  const headerPopupClose = document.getElementsByClassName('header__popup_close');
  for (i = 0; i < headerPopupClose.length; i++) {
    headerPopupClose[i].onclick = function(e) {
      headerPopupActive.forEach((n) => n.classList.remove("active"));
      headerNavLinkActive.forEach((n) => n.classList.remove("active"));
      headerNavLeftActive.forEach((n) => n.classList.remove("active"));
      headerNavRightActive.forEach((n) => n.classList.remove("active"));
    };
  }
  
  const headerNLClose = document.getElementsByClassName('header__nav_left_close');
  for (i = 0; i < headerNLClose.length; i++) {
    headerNLClose[i].onclick = function(e) {
      headerPopupActive.forEach((n) => n.classList.remove("active"));
      headerNavLinkActive.forEach((n) => n.classList.remove("active"));
      headerNavLeftActive.forEach((n) => n.classList.remove("active"));
    };
  }
  
  const headerNRClose = document.getElementsByClassName('header__nav_right_close');
  for (i = 0; i < headerNRClose.length; i++) {
    headerNRClose[i].onclick = function(e) {
      headerSubSubNavActive.forEach((n) => n.classList.remove("active"));
      headerSublinkActive.forEach((n) => n.classList.remove("active"));
      headerNavRightActive.forEach((n) => n.classList.remove("active"));
    };
  }
  
  const hnlSvg = document.getElementsByClassName("header__nav_link_svg");
  for (i = 0; i < hnlSvg.length; i++) {
    hnlSvg[i].onclick = function(e) {
      let index = this.parentElement.parentElement ? [...this.parentElement.parentElement.parentNode.children].indexOf(this.parentElement.parentElement) : -1;
      if(this.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[index].children[0].children[1].children[0]) {
        e.preventDefault();
        headerSubNavActive.forEach((n) => n.classList.remove("active"));
        headerSubSubNavActive.forEach((n) => n.classList.remove("active"));
        headerSublinkActive.forEach((n) => n.classList.remove("active"));
        this.parentElement.classList.add("active");
        this.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[index].classList.add("active");
        this.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[index].children[0].children[1].children[0].classList.add("active");
        overlay.classList.add("active");
        document.documentElement.classList.add("noscroll");
        scroll.stop();
      }
    };
  }
  
  const hslSvg = document.getElementsByClassName("header__sublink_svg");
  for (i = 0; i < hslSvg.length; i++) {
    hslSvg[i].onclick = function(e) {
      e.preventDefault();
      headerSubNavActive.forEach((n) => n.classList.remove("active"));
      headerSubSubNavActive.forEach((n) => n.classList.remove("active"));
      headerSublinkActive.forEach((n) => n.classList.remove("active"));
      this.parentElement.classList.add("active");
      this.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add("active");
      let index = this.parentElement.parentElement ? [...this.parentElement.parentElement.parentNode.children].indexOf(this.parentElement.parentElement) : -1;
      this.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[1].children[0].children[index].classList.add("active");
      overlay.classList.add("active");
      document.documentElement.classList.add("noscroll");
      scroll.stop();
    };
  }

  const headerNavLeftScroll = document.querySelectorAll('.header__nav_left .header__nav_scroll');
  [...headerNavLeftScroll].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
  const headerNavList = document.querySelectorAll('.header__nav_list');
  [...headerNavList].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
  const headerSubSubNav = document.querySelectorAll('.header__subsubnav');
  [...headerSubSubNav].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
}
// end header__popup

// button overlay
headerClose.addEventListener('click', function() {
  headerPopupActive.forEach((n) => n.classList.remove("active"));
  headerNavLinkActive.forEach((n) => n.classList.remove("active"));
  headerSubNavActive.forEach((n) => n.classList.remove("active"));
  headerSubSubNavActive.forEach((n) => n.classList.remove("active"));
  headerSublinkActive.forEach((n) => n.classList.remove("active"));
  overlay.classList.remove("active");
  menu.classList.remove("active");
  burger.classList.remove("active");
  header.classList.remove("active");
  headerClose.classList.remove("active");
  document.documentElement.classList.remove("noscroll");
  scroll.start();
})
overlay.addEventListener('click', function() {
  headerPopupActive.forEach((n) => n.classList.remove("active"));
  headerNavLinkActive.forEach((n) => n.classList.remove("active"));
  headerSubNavActive.forEach((n) => n.classList.remove("active"));
  headerSubSubNavActive.forEach((n) => n.classList.remove("active"));
  headerSublinkActive.forEach((n) => n.classList.remove("active"));
  overlay.classList.remove("active");
  menu.classList.remove("active");
  burger.classList.remove("active");
  header.classList.remove("active");
  headerClose.classList.remove("active");
  document.documentElement.classList.remove("noscroll");
  scroll.start();
})
// end overlay

// start hero__swiper
const heroSlider = document.querySelector('.hero__swiper');
if(heroSlider){
  var heroSwiper = new Swiper('.hero__swiper', {
    loop: true,
    effect: "fade",
    slidesPerView: 1,
    loopedSlides: 1,
    spaceBetween: 20,
    speed: 300,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false
    // },
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      renderBullet: function (index, className) {
        if((index + 1) >= 10) {
          var herocountzero = '';
        } else {
          var herocountzero = '0';
        }
        return '<span class="' + className + '">' + '<span class="count">' + herocountzero + (index + 1) + "</span>" + "</span>";
      },
      clickable: true,
    },
    navigation: {
      nextEl: ".hero__next",
      prevEl: ".hero__prev"
    },
    on: {
      slideChange: function (swiper) {
        const count = document.querySelector('.hero__pagination .swiper-pagination-bullet-active .count');
        if (count) {
          const herocount = document.querySelector('.hero__count');
          herocount.innerHTML = count.innerHTML;
        }
      }
    }
  });
  if(document.querySelector('.hero__wrapper').children.length >= 10) {
    var herototalzero = '';
  } else {
    var herototalzero = '0';
  }
  if(document.querySelector('.hero__total')) {
    document.querySelector('.hero__total').innerHTML = herototalzero + document.querySelector('.hero__wrapper').children.length;
  }
}
// end hero__swiper

// start hero__image_swiper
const heroImageSlider = document.querySelector('.hero__image_swiper');
const heroCirclesActive = document.querySelectorAll(".hero__circles_js .hero__circles_mouse_js");
if(heroImageSlider){
  var heroImageSwiper = new Swiper('.hero__image_swiper', {
    loop: true,
    effect: "fade",
    slidesPerView: 1,
    loopedSlides: 1,
    spaceBetween: 20,
    a11y: false,
    speed: 300,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false
    // },
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      renderBullet: function (index, className) {
        if((index + 1) >= 10) {
          var herocountzero = '';
        } else {
          var herocountzero = '0';
        }
        return '<span class="' + className + '">' + '<span class="count">' + herocountzero + (index + 1) + "</span>" + "</span>";
      },
      clickable: true,
    },
    navigation: {
      nextEl: ".hero__next",
      prevEl: ".hero__prev"
    },
    on: {
      slideChange: function (swiper) {
        const count = document.querySelector('.hero__pagination .swiper-pagination-bullet-active .count');
        if (count) {
          const herocount = document.querySelector('.hero__count');
          herocount.innerHTML = count.innerHTML;
        }

        let index = document.querySelector('.hero__pagination .swiper-pagination-bullet-active').getAttribute('index');
        heroCirclesActive.forEach((n) => n.classList.remove("active"));
        document.querySelector(".hero__circles_js").children[index].classList.add("active");
      }
    }
  });
  if(document.querySelector('.hero__image_wrapper').children.length >= 10) {
    var herototalzero = '';
  } else {
    var herototalzero = '0';
  }
  if(document.querySelector('.hero__total')) {
    document.querySelector('.hero__total').innerHTML = herototalzero + document.querySelector('.hero__image_wrapper').children.length;
  }

  const heroCircles = document.querySelectorAll('.hero__circles_js');
  [...heroCircles].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){
    elem.setAttribute("index", index);
  }});

  const heroPagination = document.querySelectorAll('.hero__pagination');
  [...heroPagination].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){
    elem.setAttribute("index", index);
  }});
  const heroCirclesButton = document.getElementsByClassName("hero__circles_mouse_js");
  for (i = 0; i < heroCirclesButton.length; i++) {
    heroCirclesButton[i].onclick = function(e) {
      heroImageSwiper.slideToLoop(this.getAttribute('index'), 0);
    }
  }
}
// end hero__image_swiper

// start products_slider
if (document.querySelector(".products_slider__swiper")) {
  document.querySelectorAll(".products_slider__swiper").forEach((n) => {
    const slider = new Swiper(n.querySelector(".products_slider__container"), {
      loop: false,
      slidesPerView: 1.1,
      speed: 500,
      spaceBetween: 20,
      navigation: {
        nextEl: n.querySelector(".products_slider__next"),
        prevEl: n.querySelector(".products_slider__prev"),
      },
      pagination: {
        el: n.querySelector(".products__pagination"),
        type: 'bullets',
        renderBullet: function (index, className) {
          if((index + 1) >= 10) {
            var productscountzero = '';
          } else {
            var productscountzero = '0';
          }
          return '<span class="' + className + '">' + '<span class="count">' + productscountzero + (index + 1) + "</span>" + "</span>";
        },
        clickable: true,
      },
      breakpoints: {
        1280: {
          slidesPerView: 4,
        },
        768:{
          slidesPerView: 2,
        },
      },
      on: {
        slideChange: function (swiper) {
          const count = n.querySelector('.products__pagination .swiper-pagination-bullet-active .count');
          if (count) {
            const herocount = n.querySelector('.products__count');
            herocount.innerHTML = count.innerHTML;
          }
        }
      }
    });
    
    if(n.querySelector('.products_slider__list').children.length >= 10) {
      var productscountzero  = '';
    } else {
      var productscountzero  = '0';
    }
    n.querySelector('.products__total').innerHTML = productscountzero  + n.querySelector('.products_slider__list').children.length;
  });
}
// end products_slider

// start history___swiper
const historySlider = document.querySelector('.history___swiper');
const historyActive = document.querySelectorAll(".history__rotate .history__information");
if(historySlider){
  var historySwiper = new Swiper('.history___swiper', {
    loop: true,
    effect: "fade",
    slidesPerView: 1,
    loopedSlides: 1,
    spaceBetween: 20,
    a11y: false,
    speed: 300,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false
    // },
    pagination: {
      el: '.history__pagination',
      type: 'bullets',
      renderBullet: function (index, className) {
        if((index + 1) >= 10) {
          var historycountzero = '';
        } else {
          var historycountzero = '0';
        }
        return '<span class="' + className + '" index="' + (index + 1) + '">' + '<span class="count">' + historycountzero + (index + 1) + "</span>" + "</span>";
      },
      clickable: true,
    },
    navigation: {
      nextEl: ".history__next",
      prevEl: ".history__prev"
    },
    on: {
      slideChange: function (swiper) {
        const count = document.querySelector('.history__pagination .swiper-pagination-bullet-active .count');
        if (count) {
          const historycount = document.querySelector('.history__count');
          historycount.innerHTML = count.innerHTML;
        }

        let index = document.querySelector('.history__pagination .swiper-pagination-bullet-active').getAttribute('index');
        historyActive.forEach((n) => n.classList.remove("active"));
        document.querySelector(".history__rotate").children[index-1].classList.add("active");
        const total = document.querySelector('.history__rotate').children.length;
        const rotate = 360 / total;
        let information = document.querySelectorAll(".history__information");
        let rotateNext = (index-1)*rotate;
        document.querySelector('.history__rotate').style.transform = 'rotate(' + (360 - rotateNext) + 'deg)';
        for (let i = 0; i < information.length; i++) {
          information[i].children[0].style.transform = 'rotate(' + (0 - (((i+1)*rotate)-rotateNext)) + 'deg)';
        }
        document.querySelector(".history__text_mobile").innerText = document.querySelector(".history__information.active").children[0].children[0].children[0].children[0].innerText;
        document.querySelector(".history__heading_mobile").innerText = document.querySelector(".history__information.active").children[0].children[1].innerText;

        let startTime = 0.0;
        let numberFrom = 0;
        let numberTo = 0;
        let date = document.querySelector(".history__date");
        let animEvent = null;
        function animateText() {
          let now = Date.now();
          if (now < startTime+500) {
            let lapsedTimeNorm = (now-startTime)/500;
            let interval = numberTo-numberFrom;
            date.innerText = Math.round(numberFrom + interval* lapsedTimeNorm);
            animEvent = window.requestAnimationFrame(animateText);
          } else {
            date.innerText = numberTo;
            animEvent = null;
          }
        }
        function initAnimation(to) {
          startTime = Date.now();
          numberFrom = parseInt(date.innerText);
          numberTo = to;
          if (animEvent==null) {
            animEvent = window.requestAnimationFrame(animateText);
          }
        }
        initAnimation(document.querySelector(".history__rotate").children[index-1].getAttribute('historydate'));
      }
    }
  });
  if(document.querySelector('.history___wrapper').children.length >= 10) {
    var historytotalzero = '';
  } else {
    var historytotalzero = '0';
  }

  document.querySelector('.history__total').innerHTML = historytotalzero + document.querySelector('.history___wrapper').children.length;
  document.querySelector('.history__rotate').style.transform = 'rotate(' + 360  + 'deg)';

  const historycounter = document.querySelectorAll('.history__rotate');
  [...historycounter].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){
    elem.children[0].children[0].children[0].children[0].innerHTML = index+1;
    elem.children[0].children[0].setAttribute("index", index);
  }});
  
  document.querySelector('.history__rotate').style.height = document.querySelector('.history__rotate').clientWidth + 'px';
  document.querySelector('.history__rotate').children[0].classList.add('active');
  const historyTotal = document.querySelector('.history__rotate').children.length;
  const historyRotate = 360 / historyTotal;
  let historyInformation = document.querySelectorAll(".history__information");
  for (let i = 0; i < historyInformation.length; i++) {
    historyInformation[i].style.transform = 'rotate(' + ((i+1)*historyRotate) + 'deg)';
    historyInformation[i].children[0].style.transform = 'rotate(' + '-' + ((i+1)*historyRotate) + 'deg)';
  }
  document.querySelector(".history__date").innerText = document.querySelector(".history__rotate").children[0].getAttribute('historydate');
  document.querySelector(".history__text_mobile").innerText = document.querySelector(".history__information.active").children[0].children[0].children[0].children[0].innerText;
  document.querySelector(".history__heading_mobile").innerText = document.querySelector(".history__information.active").children[0].children[1].innerText;
  const historyButton = document.getElementsByClassName("history__button");
  for (i = 0; i < historyButton.length; i++) {
    historyButton[i].onclick = function(e) {
      historySwiper.slideToLoop(this.getAttribute('index'), 0);
    }
  }
}
// end history___swiper

// start partner__list
const partnerlist = document.querySelector('.partner__list');
if(partnerlist){
  const partnerlists = document.querySelectorAll('.partner__list');
  document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll(".partner__item").length <= 1) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
        let l = partnerlists[i].innerHTML;
        n.querySelector('.partner__list').innerHTML = l + l + l + l + l + l + l + l
      })
    } else if (document.querySelectorAll(".partner__item").length <= 2) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
        let l = partnerlists[i].innerHTML;
        n.querySelector('.partner__list').innerHTML = l + l + l + l
      })
    } else if (document.querySelectorAll(".partner__item").length <= 3) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
        let l = partnerlists[i].innerHTML;
        n.querySelector('.partner__list').innerHTML = l + l + l + l
      })
    } else if (document.querySelectorAll(".partner__item").length <= 17) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
        let l = partnerlists[i].innerHTML;
        n.querySelector('.partner__list').innerHTML = l + l
      })
    }
  });
}
// end partner__list

// start canwedo__information
const canwedoButton = document.querySelector('.canwedo__button');
const canwedoButtonActive = document.querySelectorAll(".canwedo__buttons .canwedo__button");
const canwedoButtonOne = document.querySelector('.canwedo__button_one');
const canwedoButtonTwo = document.querySelector('.canwedo__button_two');
const canwedoButtonThree = document.querySelector('.canwedo__button_three');
const canwedoButtonFour = document.querySelector('.canwedo__button_four');

const canwedoinformationActive = document.querySelectorAll(".canwedo__informations .canwedo__information");
const canwedoinformationOne = document.querySelector('.canwedo__information_1');
const canwedoinformationTwo = document.querySelector('.canwedo__information_2');
const canwedoinformationThree = document.querySelector('.canwedo__information_3');
const canwedoinformationFour = document.querySelector('.canwedo__information_4');

if (canwedoButtonOne && canwedoButtonTwo && canwedoButtonThree) {
  canwedoButtonOne.addEventListener('click', function() {
    if (!canwedoButtonOne.classList.contains("active")) {
      canwedoButtonActive.forEach((n) => n.classList.remove("active"));
      canwedoinformationActive.forEach((n) => n.classList.remove("active"));
      canwedoinformationOne.classList.add("active");
      canwedoButtonOne.classList.add("active");
    }
  })
  
  canwedoButtonTwo.addEventListener('click', function() {
    if (!canwedoButtonTwo.classList.contains("active")) {
      canwedoButtonActive.forEach((n) => n.classList.remove("active"));
      canwedoinformationActive.forEach((n) => n.classList.remove("active"));
      canwedoinformationTwo.classList.add("active");
      canwedoButtonTwo.classList.add("active");
    }
  })
  
  canwedoButtonThree.addEventListener('click', function() {
    if (!canwedoButtonThree.classList.contains("active")) {
      canwedoButtonActive.forEach((n) => n.classList.remove("active"));
      canwedoinformationActive.forEach((n) => n.classList.remove("active"));
      canwedoinformationThree.classList.add("active");
      canwedoButtonThree.classList.add("active");
    }
  })
  
  canwedoButtonFour.addEventListener('click', function() {
    if (!canwedoButtonFour.classList.contains("active")) {
      canwedoButtonActive.forEach((n) => n.classList.remove("active"));
      canwedoinformationActive.forEach((n) => n.classList.remove("active"));
      canwedoinformationFour.classList.add("active");
      canwedoButtonFour.classList.add("active");
    }
  })
}
// end canwedo__information

// start hero__circle
if (document.querySelector('.hero__circle_js')) {
  const herocircle = document.querySelectorAll('.hero__circle_js');
  const herocircles = [];
  
  const Mode = Object.freeze({
    Idle: 1 << 0,
    Move: 1 << 1,
    Return: 1 << 2
  });
  
  const update = () => {
    for (const item of herocircles) {
      if (item.mode !== Mode.Idle) {
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;
  
        item.entity.style.setProperty('transform', `translate(${item.position.x}px, ${item.position.y}px)`);
  
        if (item.position.x !== 0 || item.position.y !== 0) {
          if (item.mode === Mode.Move) {
            item.velocity.x *= 0.96;
            item.velocity.y *= 0.96;
  
            if (Math.abs(item.velocity.x) < 0.1 && Math.abs(item.velocity.y) < 0.1) {
              [item.mouse.current.x, item.mouse.current.y] = [null, null];
              [item.mouse.previous.x, item.mouse.previous.y] = [null, null];
  
              item.mode = Mode.Return;
            }
          } else {
            [item.velocity.x, item.velocity.y] = [item.position.x / -10, item.position.y / -10];
  
            if (Math.abs(item.velocity.x) < 0.1 && Math.abs(item.velocity.y) < 0.1) {
              [item.position.x, item.position.y] = [0, 0];
              [item.velocity.x, item.velocity.y] = [0, 0];
            }
          }
        } else {
          item.mode = Mode.Idle;
        }
      }
    }
    
    requestAnimationFrame(update);
  };
  
  const init = () => {
    for (const box of herocircle) {
      const item = {
        entity: box,
        position: {
          x: 0,
          y: 0
        },
        velocity: {
          x: 0,
          y: 0
        },
        mouse: {
          current: {
            x: null,
            y: null
          },
          previous: {
            x: null,
            y: null
          }
        },
        mode: Mode.Idle
      };
  
      box.addEventListener('mousemove', event => {
        [item.mouse.current.x, item.mouse.current.y] = [event.offsetX, event.offsetY];
  
        if (item.mouse.previous.x !== null && item.mouse.previous.y !== null) {
          item.velocity.x += (item.mouse.current.x - item.mouse.previous.x) / 50;
          item.velocity.y += (item.mouse.current.y - item.mouse.previous.y) / 50;
        }
        
        [item.mouse.previous.x, item.mouse.previous.y] = [item.mouse.current.x, item.mouse.current.y];
        
        item.mode = Mode.Move;
      });
      
      box.addEventListener('mouseleave', event => {
        [item.mouse.current.x, item.mouse.current.y] = [null, null];
        [item.mouse.previous.x, item.mouse.previous.y] = [null, null];
      });
      
      herocircles.push(item);
    }
    
    requestAnimationFrame(update);
  };
  
  window.addEventListener('DOMContentLoaded', init);
  
  const herocirclesMouse = document.querySelector(".hero__circles_js");
  window.addEventListener('mousemove', function(e) {
    if (window.innerWidth > 1280) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      if(herocirclesMouse.children[0]){herocirclesMouse.children[0].style.transform = 'translate(-' + x * 5 + 'px, -' + y * 10 + 'px)'};
      if(herocirclesMouse.children[1]){herocirclesMouse.children[1].style.transform = 'translate(-' + x * 15 + 'px, -' + y * 7 + 'px)'};
      if(herocirclesMouse.children[2]){herocirclesMouse.children[2].style.transform = 'translate(-' + x * 3 + 'px, -' + y * 12 + 'px)'};
      if(herocirclesMouse.children[3]){herocirclesMouse.children[3].style.transform = 'translate(-' + x * 17 + 'px, -' + y * 8 + 'px)'};
      if(herocirclesMouse.children[4]){herocirclesMouse.children[4].style.transform = 'translate(-' + x * 14 + 'px, -' + y * 4 + 'px)'};
    }
  });
}
// end hero__circle

// start vacancies
if(document.querySelector('.vacanc_info__item')) {
  var vacanciesitem = document.getElementsByClassName("vacanc_info__item");
  var i;
  
  for (i = 0; i < vacanciesitem.length; i++) {
    vacanciesitem[i].onclick = function(e) {
      var vacanciesitemNext = this.children[1];
      var vacanciesitembottom = document.getElementsByClassName("vacanc_info__item_descr");
      var vacanciesitemActive = document.getElementsByClassName("vacanc_info__item active");
      console.log('ccc')
      if (vacanciesitemNext.style.maxHeight) {
        vacanciesitemNext.style.maxHeight = null;
        this.classList.remove("active");
      } else {
        for (var q = 0; q < vacanciesitemActive.length; q++) {
          vacanciesitemActive[q].classList.remove("active");
          vacanciesitembottom[q].classList.remove("active");
        }
        for (var p = 0; p < vacanciesitembottom.length; p++) {
          this.classList.remove("active");
          vacanciesitembottom[p].classList.remove("active");
          vacanciesitembottom[p].style.maxHeight = null;
        }
        vacanciesitemNext.style.maxHeight = vacanciesitemNext.scrollHeight + "px";
        this.classList.add("active");
      }
    };
  }
}
// end vacancies

// start yandex map
const maps = document.getElementById("map");
if(maps) {
  var myMap,ymaps;
  function init() {
    myMap = document.getElementById("map");
    if (!myMap) return;
    myMap = new ymaps.Map(myMap, {
      center: [55.660607, 37.538170],
      zoom: 14, 
      controls: []
      },{
      zoomControlPosition: { right: 0, top: 0 },
      zoomControlSize: 'auto'
    });

    if(oldWidth <= 1200){
      myMap.behaviors.disable('drag');
    }

    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');

    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);

    function zoomIn() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom + 1);
    }
  
    function zoomOut() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom - 1);
    }

    var data = {
      'points': [{
        "infoPoint": '<div id="mapmoscow" class="map__point{% if properties.active %} map__active{% endif %}">\
        <span class="map__icon"><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32.5" cy="32.5" r="32" stroke="url(#paint0_linear_1008_5331)" stroke-opacity="0.34"/><path d="M32.9991 45.7142C36.6024 42.5786 39.4506 39.3899 41.5436 36.1482C43.6366 32.9064 44.6831 30.1017 44.6831 27.734C44.6831 24.2278 43.5734 21.3336 41.3539 19.0515C39.1344 16.7694 36.3494 15.629 32.9991 15.6303C29.6488 15.6315 26.8639 16.7719 24.6444 19.0515C22.4249 21.3311 21.3151 24.2252 21.3151 27.734C21.3151 30.1004 22.3616 32.9052 24.4546 36.1482C26.5489 39.3899 29.397 42.5799 32.9991 45.7142ZM32.9991 47.399C32.6988 47.399 32.3985 47.3498 32.0983 47.2514C31.798 47.153 31.522 46.9933 31.2703 46.7723C29.9069 45.52 28.525 44.1241 27.1245 42.5843C25.7228 41.0459 24.4501 39.4531 23.3065 37.8061C22.1629 36.159 21.2257 34.4768 20.4948 32.7595C19.7639 31.0422 19.3984 29.367 19.3984 27.734C19.3984 23.6796 20.7184 20.3357 23.3583 17.7022C25.9982 15.0687 29.2118 13.7513 32.9991 13.75C36.7864 13.7487 40.0001 15.0661 42.6399 17.7022C45.2798 20.3382 46.5998 23.6822 46.5998 27.734C46.5998 29.3683 46.2343 31.0377 45.5034 32.7423C44.7726 34.4455 43.841 36.1271 42.7089 37.7869C41.5781 39.448 40.3125 41.0414 38.912 42.5671C37.5116 44.0928 36.1284 45.4823 34.7624 46.7358C34.5184 46.9569 34.2411 47.123 33.9306 47.2342C33.6201 47.3453 33.309 47.4003 32.9972 47.399M33.0029 30.4844C33.8565 30.4844 34.5848 30.1803 35.1879 29.5721C35.791 28.9639 36.0926 28.2336 36.0926 27.3813C36.0926 26.5291 35.7891 25.8007 35.1822 25.1963C34.5752 24.5919 33.845 24.2904 32.9914 24.2917C32.1379 24.2929 31.4095 24.5971 30.8064 25.204C30.2033 25.8109 29.9018 26.5412 29.9018 27.3948C29.9018 28.2483 30.2052 28.9766 30.8122 29.5798C31.4191 30.1829 32.1494 30.4844 33.0029 30.4844Z" fill="url(#paint1_linear_1008_5331)"/><defs><linearGradient id="paint0_linear_1008_5331" x1="3.56231" y1="5.45755" x2="63.2483" y2="47.1337" gradientUnits="userSpaceOnUse"><stop offset="0.00399963" stop-color="#F57A78"/><stop offset="0.229" stop-color="#F94F63"/><stop offset="0.539" stop-color="#B73CB7"/><stop offset="1" stop-color="#7B5BDD"/></linearGradient><linearGradient id="paint1_linear_1008_5331" x1="20.8892" y1="16.5752" x2="49.067" y2="32.4805" gradientUnits="userSpaceOnUse"><stop offset="0.00399963" stop-color="#F57A78"/><stop offset="0.229" stop-color="#F94F63"/><stop offset="0.539" stop-color="#B73CB7"/><stop offset="1" stop-color="#7B5BDD"/></linearGradient></defs></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp"><br>г. Москва,ул. Старокалужское шоссе, д. 62</div>\
          </div>\
        </div>',
        "latitude": 55.660607,
        "longitude": 37.538170,
        },
      ],
    };

    var mapCoordinates = new ymaps.GeoObjectCollection();

    var results = [];
    data.points.forEach(function(item, index){
      results.push(createPlacemark(item));
    });
    myMap.geoObjects.add(mapCoordinates);
    myMap.behaviors.disable('scrollZoom');

    function createPlacemark(item) {
      var options = Object();
      var squareLayout = ymaps.templateLayoutFactory.createClass(item.infoPoint);
      var place = new ymaps.Placemark([item.latitude, item.longitude],{hintContent: false}, {
        iconLayout: squareLayout,
        iconShape: {   
          type: 'Rectangle',
          coordinates: [
            [-55, -50], [30, 50]
          ]
        }
      });
      mapCoordinates.add(place);
    }
    var thatCoordinates;
    mapCoordinates.events.add('click', function (e) {
      var that = e.get('target').properties.get('active');
      mapCoordinates.each(function(item, index){
        item.properties.set('active', false);
        if(e.get('target') == item && !that){
          e.get('target').properties.set('active', true);
          thatCoordinates = e.get('coords');
        }
      });

      var mapmoscow = document.getElementById('mapmoscow');
      if (mapmoscow.classList.contains("map__active")) {
        myMap.setCenter([55.660607, 37.538170],17);
      } else {
        myMap.setCenter([55.660607, 37.538170],9);
      };
    });
  }
  if (ymaps != undefined) ymaps.ready(init);
}
// end yandex map