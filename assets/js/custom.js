(function () {
  var counter = function () {
    var anim = function (elem, start, cb) {
      $(elem).animate({countNum: parseInt(start)}, {
        duration: 1500,
        easing: 'swing',
        step: function () {
          var num = (this.countNum) ? this.countNum : 0;
          $(this).text(parseInt(Math.floor(num)));
        },
        complete: function () {
          $(this).text(parseInt(this.countNum));
          cb();
        }
      });
    };

    $(".counter-container .animated").on("appear", function (event, param1, param2) {
      $(event.target).find(".counter").each(function () {
        var start = $(this).text();
        anim(this, start, function () {

        });
      });
    });
  };

  $(document).on('ready', function () {
    counter();
  });
})();