$(document).on('ready', function() {


  var count = {
    charlie : 0,
    robbie  : 0,
    ben : 0
  }

  $("p").on("click", function(e){
    e.preventDefault();
    var person = this.id
    count[person] += 1;
    // $(".hotdog").show();
    // console.log(count)
    $.ajax({
      type: 'POST',
      url: '/votes',
      data: count
    })
    .done(function(data) {
      console.log(data)
      $("#ballot").hide();
      $('.hotdog').show();
    })

  });


// closing ready
});

