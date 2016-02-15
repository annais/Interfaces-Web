jQuery(document).ready(function() {
    jQuery('#menu').click(function(e) {
        e.preventDefault();
        jQuery('nav ol').toggle('blind');
    });

    jQuery('.letter').toggle('explode');

    $('#entrada').height($(window).height());
    $('#entrada').resize(function(){
    	$('#entrada').height($(window).height());
    });

    $('#sobremi').click(function(e){
    	e.preventDefault();
    	$('html, body').animate({scrollTop: $('#datos').offset().top}, 800);
    });
        
    $('#projectos').click(function(e){
    	e.preventDefault();
    	$('html, body').animate({scrollTop: $('#leng').offset().top}, 800);
    });

    $('#contactar').click(function(e){
    	e.preventDefault();
    	$('html, body').animate({scrollTop: $('#contacto').offset().top}, 800);
    });

    $('#leng').waypoint(function() {
      $('.nleng').toggle('slide');
    },{
        offset: '10%',
        triggerOnce:true
    });

    $('#datos').waypoint(function() {
      $('.imgdatos').toggle('slide');
    },{
        offset: '10%',
        triggerOnce:true
    });


});

