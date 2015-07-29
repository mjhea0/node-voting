$(document).on('ready', function() {


  $('p').on('click', function(e){

    e.preventDefault();

    var personName = this.id
    var personCount = parseInt($('.'+personName+'-count').text())

    var payload = {
      name: personName,
      count: personCount += 1
    };

    console.log(payload)

    $.ajax({
      type: 'POST',
      url: '/votes',
      data: payload
    })
    .done(function(data) {
      console.log(data)
      $('#ballot').hide();
      $('.hotdog').show();
    })

  });


// closing ready
});

