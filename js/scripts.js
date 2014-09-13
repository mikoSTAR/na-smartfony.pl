$(window).load(function() {
});

$(document).ready(function(){

  /*Homepage main slider*/  
  $('#main-slider').layerSlider({
 
    autoStart           : true,
    firstLayer          : 1,
    twoWaySlideshow     : false,
    keybNav             : true,
    imgPreload          : true,
    navPrevNext         : true,
    navStartStop        : false,
    navButtons          : true,
    skin                : 'darkskin',
    skinsPath           : 'layerslider/skins/',
 
    // you can change this settings separately by layers or sublayers with using html style attribute
 
    slideDirection      : 'right',
    slideDelay          : 4000,
    parallaxIn          : .95,
    parallaxOut         : .95,
    durationIn          : 2000,
    durationOut         : 2000,
    easingIn            : 'easeInOutQuint',
    easingOut           : 'easeInOutQuint',
    delayIn             : 0,
    delayOut            : 0
 
  });
  
  $("a[href='#Top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

});

