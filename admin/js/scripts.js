//  <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js'></script>
//tinymce.init({selector:'textarea'});
$(document).ready(function(){
    
  $('#selectAllBoxes').click(function(event){
    if(this.checked){
      $('.checkBoxes').each(function(){
          
          this.checked=true;
          
      });
      
  }
    else{
        
          $('.checkBoxes').each(function(){
          
          this.checked=false;   
      });
        
        
        
    }
                             
                             
                             
                             
 });  
  
    
        ClassicEditor
        .create( document.querySelector( '#body' ) )
        .catch( error => {
            console.error(error)});
      
    
    
 var div_box = "<div id='load-screen'><div id='loading'></div></div>";
 $("body").prepend(div_box);

$('#load-screen').delay(700).fadeOut(600,function(){
    $(this).remove();
});
   
    
});

