$(document).ready(
    function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('ol').append('<li>' + toAdd + '</li>');
            });
       
       $("input[name=ListItem]").keypress(function(event){
          if(event.keyCode == 13){
            $("#button").click();
            event.preventDefault();
            $("form[name=toDoList")[0].reset();

          }         
      });
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');    
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
    //   $('ol').sortable();  
      
    }
);