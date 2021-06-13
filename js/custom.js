$(document).ready(function () {

   var defaultTheme = "lightmode";
   var tsmjsload = true;

   if (localStorage.getItem("thememode") == null) {
      if (defaultTheme == "lightmode") {
         jQuery("body").addClass("lightmode");
         jQuery("body").removeClass("darkmode");
      } else {
         jQuery("body").addClass("darkmode");
         jQuery("body").removeClass("lightmode");
      }
   } else if (localStorage.getItem("thememode") == "lightmode") {
      jQuery("body").addClass("lightmode");
      jQuery("body").removeClass("darkmode");
   } else {
      jQuery("body").addClass("darkmode");
      jQuery("body").removeClass("lightmode");
   }




   $(".shme").click(function () {
      $(".mm").toggleClass("shwx");
   });
   $(".expand").click(function () {
      $(".megavid").toggleClass("xp");
      $(".pd-expand").toggleClass("sxp");
   });
   $('.expand').click(function () {
      if ($('.expand').hasClass('slamdown')) {
         $('.expand').removeClass('slamdown');
         jQuery(".mvelement").prependTo(jQuery(".megavid"));
      } else {
         $('.expand').addClass('slamdown');
         jQuery(".mvelement").appendTo(jQuery(".pd-expand"));
      }
   });
   $(".gnr").click(function () {
      $(".gnrx").toggleClass("shwgx");
   });
   $(".light").click(function () {
      $(".lowvid").toggleClass("highvid");
   });
   $(".colap").click(function () {
      $(".mindes").toggleClass("alldes");
   });
   $(".topmobile").click(function () {
      $(".topmobcon").toggleClass("topmobshow");
   });



   $("#shadow").css("height", $(document).height()).hide();
   $(".light").click(function () {
      $("#shadow").toggle();
      if ($("#shadow").is(":hidden"))
         $(this).html("<i class='far fa-lightbulb' aria-hidden='true'></i> <span>Turn Off Light</span>")
         .removeClass("turnedOff");
      else
         $(this).html("<i class='fas fa-lightbulb' aria-hidden='true'></i> <span>Turn On Light</span>")
         .addClass("turnedOff");
   });





   var dmlogo1 = 'https://i2.wp.com/animestream.themesia.com/wp-content/uploads/2019/04/animestream.png';
   var dmlogo2 = 'https://i2.wp.com/animestream.themesia.com/wp-content/uploads/2019/04/animestream.png';
   jQuery("#thememode input[type='checkbox']").on('change', function () {
      var is_on = jQuery("#thememode input[type='checkbox']").prop("checked");
      if (is_on == false) {
         if (dmlogo2) jQuery(".logos img").attr('src', dmlogo2);
         localStorage.setItem("thememode", "lightmode");
         jQuery("body").addClass("lightmode");
         jQuery("body").removeClass("darkmode");
      } else {
         if (dmlogo1) jQuery(".logos img").attr('src', dmlogo1);
         localStorage.setItem("thememode", "darkmode");
         jQuery("body").removeClass("lightmode");
         jQuery("body").addClass("darkmode");
      }
   });



   if (localStorage.getItem("thememode") == null) {
      if (defaultTheme == "lightmode") {
         jQuery(".logos img").attr('src',
            'https://i2.wp.com/animestream.themesia.com/wp-content/uploads/2019/04/animestream.png');
         jQuery("#thememode input[type='checkbox']").prop('checked', false);
      } else {
         jQuery(".logos img").attr('src',
            'https://i2.wp.com/animestream.themesia.com/wp-content/uploads/2019/04/animestream.png');
         jQuery("#thememode input[type='checkbox']").prop('checked', true);
      }
   } else if (localStorage.getItem("thememode") == "lightmode") {
      jQuery(".logos img").attr('src',
         'https://i2.wp.com/animestream.themesia.com/wp-content/uploads/2019/04/animestream.png');
      jQuery("#thememode input[type='checkbox']").prop('checked', false);
   } else {
      jQuery(".logos img").attr('src',
         'https://i2.wp.com/animestream.themesia.com/wp-content/uploads/2019/04/animestream.png');
      jQuery("#thememode input[type='checkbox']").prop('checked', true);
   }




   $('.loop').owlCarousel({
      center: true,
      loop: true,
      nav: true,
      //animateOut: 'fadeOut',
      navText: ["<span class='prev icon-angle-left'></span>",
         "<span class='next icon-angle-right'></span>"
      ],
      margin: 0,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
         0: {
            items: 1,
            stagePadding: 0,
         }
      }
   });

});






// filter js code start


$(document).on('click', '.quickfilter .dropdown-toggle', function () {
   if (!$(this).parent().hasClass('open')) {
      $(document).find('.quickfilter .filter.dropdown').removeClass('open');
   }
   $(this).parent().toggleClass('open');
});
$(document).on("click", function (event) {
   if (!$(event.target).closest(".dropdown-toggle").length) {
      $(document).find('.quickfilter .filter.dropdown').removeClass('open');
   }
});
jQuery(document).ready(function ($) {
   $('.filters .filter ul').click(function (event) {
      event.stopPropagation();
   });
   $('.filters .filter ul').each(function (index, elem) {
      var elem_checked = $(this).find('input:checked');
      var button_span = elem_checked.closest('.filter').find("button span");
      if (elem_checked.length == 1) {
         button_span.html(elem_checked.parent().find("label").html());
      } else if (elem_checked.length > 1) {
         button_span.html(elem_checked.length + ' selected');
      } else if (elem_checked.length == 0) {
         button_span.html('All');
      }
   });
   $('.dropdown-menu input').on('click', function (e) {
      var ul_elem = $(this).parent().parent();
      var elem_checked = ul_elem.find("input:checked");
      var button_span = ul_elem.parent().find("button span");
      if (elem_checked.length == 1) {
         button_span.html(elem_checked.parent().find("label").html());
      } else if (elem_checked.length > 1) {
         button_span.html(elem_checked.length + ' selected');
      } else if (elem_checked.length == 0) {
         button_span.html('All');
      }
   });
});