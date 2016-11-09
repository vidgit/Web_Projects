var circle = ["#one","#two","#three","#four","#five"];
var obs = [];
var mobile=false;
var screenHeight,screenWidth;
function build(){
  screenHeight=$(window).height();
  screenWidth=$(window).width();
  mobile=screenWidth<=323;
  if(mobile){
    
  }
  else{
    
  }
}

$(function() {
  $('#one').hover(function() { 
    $('#one').css('width', parseInt($('#one').css('width'))*2);
    $('#one').css('height', parseInt($('#one').css('height'))*2);
    $('#one').css( "zIndex", 10 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#one')
        $(circle[i]).fadeTo("fast", 0.5);
    }
    
    $('body').css('background-color','#bababa');
  }, function() {
    // on mouseout, reset the background colour
     $('#one').css('width', '175px');
    $('#one').css('height', '175px');
    $('#one').css( "zIndex", 0 );
    $('body').css('background-color','');
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#one')
        $(circle[i]).fadeTo("fast", 1);
    }
  });
});

$(function() {
  $('#two').hover(function() {
    $('#two').css('width', parseInt($('#two').css('width'))*2);
    $('#two').css('height', parseInt($('#two').css('height'))*2);
    $('#two').css( "zIndex", 10 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#two')
        $(circle[i]).fadeTo("fast", 0.5);
    }
    
    $('body').css('background-color','#bababa');
  }, function() {
    // on mouseout, reset the background colour
     $('#two').css('width', '175px');
    $('#two').css('height', '175px');
    $('#two').css( "zIndex", 0 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#two')
        $(circle[i]).fadeTo("fast", 1);
    }
    
    $('body').css('background-color','');
  });
});

$(function() {
  $('#three').hover(function() {
    $('#three').css('width', parseInt($('#three').css('width'))*2);
    $('#three').css('height', parseInt($('#three').css('height'))*2);
    $('#three').css( "zIndex", 10 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#three')
        $(circle[i]).fadeTo("fast", 0.5);
    }
    
    $('body').css('background-color','#bababa');
  }, function() {
    // on mouseout, reset the background colour
     $('#three').css('width', '175px');
    $('#three').css('height', '175px');
    $('#three').css( "zIndex", 0 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#three')
        $(circle[i]).fadeTo("fast", 1);
    }
    
    $('body').css('background-color','');
  });
});

$(function() {
  $('#four').hover(function() {
    $('#four').css('width', parseInt($('#four').css('width'))*2);
    $('#four').css('height', parseInt($('#four').css('height'))*2);
    $('#four').css( "zIndex", 10 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#four')
        $(circle[i]).fadeTo("fast", 0.5);
    }
    
    $('body').css('background-color','#bababa');
  }, function() {
    // on mouseout, reset the background colour
     $('#four').css('width', '175px');
    $('#four').css('height', '175px');
    $('#four').css( "zIndex", 0 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#four')
        $(circle[i]).fadeTo("fast", 1);
    }
    
    $('body').css('background-color','');
  });
});

$(function() {
  $('#five').hover(function() {
    $('#five').css('width', parseInt($('#five').css('width'))*2);
    $('#five').css('height', parseInt($('#five').css('height'))*2);
    $('#five').css( "zIndex", 10 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#five')
        $(circle[i]).fadeTo("fast", 0.5);
    }
    
    $('body').css('background-color','#bababa');
  }, function() {
    // on mouseout, reset the background colour
     $('#five').css('width', '175px');
    $('#five').css('height', '175px');
    $('#five').css( "zIndex", 0 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#five')
        $(circle[i]).fadeTo("fast", 1);
    }
    
    $('body').css('background-color','');
  });
});