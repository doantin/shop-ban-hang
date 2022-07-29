
if (typeof jQuery !== 'undefined') {
    
    
    $(function() {
      $(window).on('load resize', function() {
        var products = $("[data-product-image]");
        products.each(function(key, value) {
          var bg = null;
          if (window.innerWidth < 500) return;
          if (window.innerWidth < 1000) bg = $(value).data("product-image-s");
          if (window.innerWidth >= 1000) bg = $(value).data("product-image");
          console.log($(window).innerWidth);
          $(value).css({
            'background-image': 'url(' + bg + ')',
            'background-position': 'center',
            'background-size': 'cover',
          });
        });
      });
    });
  } else {
    // Pure JS way
    // alert("JS");
    
    (function() {
      window.addEventListener('load', wlImageLoader);
      window.addEventListener('resize', wlImageLoader);
      function wlImageLoader() {
        console.log('event! Trig trig');
        var all = document.getElementsByTagName("div");
        var products = [];
        for (i = 0; i < all.length; i++) {
          if (all[i].hasAttribute('data-product-image')) {
            products.push(all[i]);
          }
        }
        Array.prototype.forEach.call(products, function(value) {
          var bg = null;
          var curent = window.getComputedStyle(value).getPropertyValue('background-image');
          console.log(curent);
          console.log(window.innerWidth);
          if (window.innerWidth < 500 || curent != 'none') return;
          if (window.innerWidth < 1000 && curent == 'none') bg = value.getAttribute('data-product-image-s');
          if (window.innerWidth >= 1000 && curent == 'none') bg = value.getAttribute('data-product-image');
          // if (window.innerWidth >= 2000 && curent == null) bg = value.getAttribute('data-product-image-l');
          if(bg == null || curent != 'none') return;
          value.style.backgroundImage = "url(" + bg + ")";
          value.style.backgroundPosition = "center";
          value.style.backgroundSize = "cover";
          curent = window.getComputedStyle(value).getPropertyValue('background-image');
          console.log(curent);
        });
      }
    })();
  }