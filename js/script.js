$(function(){
  $('#re').on('click', function(){
      $('.immage').css({'display':'none'});
      $('.feedback').css({'grid-area':' 3 / 1 / 4 / 3'});
      $('.about').css({'grid-area':'7 / 3 / 8 / 5'});
      
       
       $('.howitwrks').css({'grid-area':' 7 / 1 / 8 / 3'});
       $('.uploadfile').css({'grid-area':'3 / 3 / 4 / 5'});
       
    });
    $('#te').on('click', function(){
      $('.feedback').css({'grid-area':' 7 / 3 / 8 / 5'});
      $('.about').css({'grid-area':'3 / 1 / 4 / 3'});
      $('.howitwrks').css({'grid-area':' 3 / 3 / 4 / 5'});
      $('.uploadfile').css({'grid-area':'7 / 1 / 8 / 3'});
      
      $('.feedback').css({'grid-area':' 8 / 1 / 9 / 5'});
      $('.about').css({'grid-area':'3 / 1/ 4 / 5'});
      $('.howitwrks').css({'grid-area':' 4 / 1 / 5 / 5'});
      $('.uploadfile').css({'grid-area':'9 / 1 / 10 / 5'});
      
    });
  });

