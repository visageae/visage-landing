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

    $('#hireForm').on('submit', function(event){
      event.preventDefault() ;
      event.stopPropagation();
      var email = $(this).find('#emailInput').val();
      showModal(email);
      return false;
      function showModal(email){
        var q1gsxcg1150s39k;
        var mail = email || '';
        (function(d, t) {
          var s = d.createElement(t), options = {
            'userName':'techvisage',
            'formHash':'q1gsxcg1150s39k',
            'autoResize':true,
            'defaultValues': 'Field7=' + mail,
            'height':'677',
            'async':true,
            'host':'wufoo.com',
            'header':'hide',
            'ssl':true
          };
          s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
          s.onload = s.onreadystatechange = function() {
            var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
            try { q1gsxcg1150s39k = new WufooForm();q1gsxcg1150s39k.initialize(options);q1gsxcg1150s39k.display(); } catch (e) {}
          };
          var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
        })(document, 'script');

        $('#starterModal').modal('show');
      }
    });

    var transitionInterval = 2000;
    setInterval(function() {
      $('.team-quotes .team-quote:gt(0)').hide();
      $('.team-quotes .team-quote:first')
        .fadeOut(transitionInterval)
        .next()
        .fadeIn(transitionInterval)
        .end()
        .appendTo('.team-quotes');
    }, 5000);

    $(document).scroll(function (event) {
      var windowTop = $(this).scrollTop();
      $('#company').each(function () {
        var objectTop = $(this).offset().top;
        if (objectTop < windowTop) {
          $('#company .section-content').find('h1, .team-quotes').css('opacity', objectTop * 5  / windowTop)
        } else {
          if ($('#company .section-content').find('h1, .team-quotes').css("opacity") == 0) {
            $('#company .section-content').find('h1, .team-quotes').fadeTo(200, 1);
          }
        }
      })
    })

  });
})();