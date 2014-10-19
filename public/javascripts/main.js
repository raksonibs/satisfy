$(document).ready(function() {
  var list = '';
  list += '<ul>'

  $.getJSON('/complaints/complaints', function(data) {
    console.log(data)
    $.each(data, function() {
      list+= '<li>' + this.complaint + '</li>'
    })

    list += '</ul>'
    $('#insert-here').html(list)
  })
})