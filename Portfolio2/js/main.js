var circle = ['#one', '#two', 'three', '#four' , '#five'];
$(function() {
  $('#one').hover(function() {
    $('#one').css('width', '150px');
    $('#one').css('height', '150px');
    for(var i in circle){
      if(i!='#one')
        $(i).css('background-color', 'white');
    }
    
    $('body').css('background-color','#bababa');
  }, function() {
    // on mouseout, reset the background colour
     $('#one').css('width', '100px');
    $('#one').css('height', '100px');
    $('body').css('background-color','');
    for(var i in circle){
      if(i!='#one')
        $(i).css('background-color', '');
    }
  });
});

$(function() {
  $('#two').hover(function() {
    $('#two').css('width', '150px');
    $('#two').css('height', '150px');
    $('#one').css('background-color', 'white');
    $('#three').css('background-color', 'white');
    $('body').css('background-color','#bababa');
  }, function() {
    // on mouseout, reset the background colour
     $('#two').css('width', '100px');
    $('#two').css('height', '100px');
    $('#one').css('background-color', '');
    $('#three').css('background-color', '');
    $('body').css('background-color','');
  });
});

$(function() {
  $('#three').hover(function() {
    $('#three').css('width', '150px');
    $('#three').css('height', '150px');
    $('#one').css('background-color', 'white');
    $('#two').css('background-color', 'white');
    $('body').css('background-color','#bababa');
  }, function() {
    // on mouseout, reset the background colour
     $('#three').css('width', '100px');
    $('#three').css('height', '100px');
    $('#one').css('background-color', '');
    $('#two').css('background-color', '');
    $('body').css('background-color','');
  });
});