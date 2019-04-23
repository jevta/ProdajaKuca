$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    $('.layer').each(function() {
        var layer = $(this);
        var dataSpeed = layer.data('speed');
        var offsetY = -(scrollTop * dataSpeed);
        var translate = 'translate3D(0, ' + offsetY +'px, 0)';
        layer.css('transform', translate);
    });
});



$(".toggle-btn").click(function() {
    $(".container1").toggleClass("active");
    $(".toggle-btn").toggleClass("toggle");
})




document.addEventListener('DOMContentLoaded', function(){
    let split = document.getElementById('split');
    let topLayer = split.querySelector('.top');
    let handle = split.querySelector('.handle');
    let skew = 0;
    let delta = 0;
  
    if(split.className.indexOf('skewed') != -1){
      skew = 1000;
    }
    
    split.addEventListener('mousemove', function(e){
      delta = (e.clientX - window.innerWidth / 2) * 0.5;
    
      handle.style.left = e.clientX + delta + 'px';
  
      topLayer.style.width= e.clientX + skew + delta + 'px';
    });
  });


  $(window).load(function() {
    $('a.btn').click(function() {
      $(this).toggleClass("active");
    });
  });

  var $project = $('.project').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows',
    getSortData: {
        name: function (element) {
            return $(element).text();
        }
    } 
  });
  
  $('.filter button').on("click", function() {
      var value = $(this).attr('data-filter');
      $project.isotope({
          filter: value
      });
  })
  $('.sort button').on("click", function() {
      var value = $(this).attr('data-filter');
      $project.isotope({
          sortBy: value
  });
  })




  $(document).ready(function() {

    var $grid = $('.gallery').isotope({
      // options
      itemSelector: '.picture',
      layoutMode: 'masonry',
      percentPosition: true
    });
  
    $grid.imagesLoaded().progress(function() {
      $grid.isotope('layout');
    });
  
  });



  