$(function(){
  // add transition
  $('#logo, h1, .video_btn, .line').addClass('trans_fade');
  // nav
  $(".btn_nav").on("click",function(){
    $(this).toggleClass('btn_actived');
    $(this).next().toggleClass('nav_actived');
  });
  // ani_img
  /* animation inview */
  var $animation_elements = $('section');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop(); //window top
    var window_bottom_position = (window_top_position + window_height); //window bottom

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top; // element top
      var element_bottom_position = (element_top_position + element_height); // element bottom

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
});
