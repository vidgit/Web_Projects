var circle = ['#one', '#two', '#three', '#four' , '#five'];
$(function() {
  $('#one').hover(function() {
    $('#one').css('width', '150px');
    $('#one').css('height', '150px');
    $('#one').css( "zIndex", 10 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#one')
        $(circle[i]).css('background-color', 'white');
    }
    
    $('body').css('background-color','#bababa');
  }, function() {
    // on mouseout, reset the background colour
     $('#one').css('width', '100px');
    $('#one').css('height', '100px');
    $('#one').css( "zIndex", 0 );
    $('body').css('background-color','');
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#one')
        $(circle[i]).css('background-color', '');
    }
  });
});

$(function() {
  $('#two').hover(function() {
    $('#two').css('width', '150px');
    $('#two').css('height', '150px');
    $('#two').css( "zIndex", 10 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#two')
        $(circle[i]).css('background-color', 'white');
    }
    
    $('body').css('background-color','#bababa');
  }, function() {
    // on mouseout, reset the background colour
     $('#two').css('width', '100px');
    $('#two').css('height', '100px');
    $('#two').css( "zIndex", 0 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#two')
        $(circle[i]).css('background-color', '');
    }
    
    $('body').css('background-color','');
  });
});

$(function() {
  $('#three').hover(function() {
    $('#three').css('width', '150px');
    $('#three').css('height', '150px');
    $('#three').css( "zIndex", 10 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#three')
        $(circle[i]).css('background-color', 'white');
    }
    
    $('body').css('background-color','#bababa');
  }, function() {
    // on mouseout, reset the background colour
     $('#three').css('width', '100px');
    $('#three').css('height', '100px');
    $('#three').css( "zIndex", 0 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#three')
        $(circle[i]).css('background-color', '');
    }
    
    $('body').css('background-color','');
  });
});

$(function() {
  $('#four').hover(function() {
    $('#four').css('width', '150px');
    $('#four').css('height', '150px');
    $('#four').css( "zIndex", 10 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#four')
        $(circle[i]).css('background-color', 'white');
    }
    
    $('body').css('background-color','#bababa');
  }, function() {
    // on mouseout, reset the background colour
     $('#four').css('width', '100px');
    $('#four').css('height', '100px');
    $('#four').css( "zIndex", 0 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#four')
        $(circle[i]).css('background-color', '');
    }
    
    $('body').css('background-color','');
  });
});

$(function() {
  $('#five').hover(function() {
    $('#five').css('width', '150px');
    $('#five').css('height', '150px');
    $('#five').css( "zIndex", 10 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#five')
        $(circle[i]).css('background-color', 'white');
    }
    
    $('body').css('background-color','#bababa');
  }, function() {
    // on mouseout, reset the background colour
     $('#five').css('width', '100px');
    $('#five').css('height', '100px');
    $('#five').css( "zIndex", 0 );
    for(var i=0; i<circle.length;i++){
      if(circle[i]!='#five')
        $(circle[i]).css('background-color', '');
    }
    
    $('body').css('background-color','');
  });
});