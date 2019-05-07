// p a r a l l a x  //
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
//  kraj p a r a l l a x //


$(".toggle-btn").click(function() {
    $(".container1").toggleClass("active");
    $(".toggle-btn").toggleClass("toggle");
})



// s p l i t e r //
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

