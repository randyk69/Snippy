$(function() {

  $('.save-code-form').submit(function(e) {
      e.preventDefault();
      $.post('save-code', {
          title: $('#title').val(),
          category: $('#category').val(),
          codes: $('#codes').val()
      }, function(result){
         window.location.href = 'http://localhost:3000';
      });
  });

  $('input[type="button"]').click(function() { console.log(this.id); }); 

});