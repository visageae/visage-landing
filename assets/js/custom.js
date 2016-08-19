;(function (d, $, t) {

    var counter = function () {
        var anim = function (elem, start, cb) {
            $(elem).animate({countNum: parseInt(start)}, {
                duration: 1500,
                easing: 'linear',
                step: function () {
                    $(this).text(parseInt(Math.floor(this.countNum)));
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


    var z8kv0cc0ktfm9y;
    var m1fs4a3q0krw3pa;
    var s = d.createElement(t), options = {
        'userName': 'techvisage',
        'formHash': 'z8kv0cc0ktfm9y',
        'autoResize': true,
        'async': true,
        'host': 'wufoo.com',
        'ssl': true
    };
    s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
    s.onload = s.onreadystatechange = function () {
        var rs = this.readyState;
        if (rs) if (rs != 'complete') if (rs != 'loaded') return;
        try {
            z8kv0cc0ktfm9y = new WufooForm();
            z8kv0cc0ktfm9y.initialize(options);
            z8kv0cc0ktfm9y.display();
        } catch (e) {
        }
    };
    var scr = d.getElementsByTagName(t)[0], par = scr.parentNode;
    par.insertBefore(s, scr);

    var sTry = d.createElement(t), optionstry = {
        'userName': 'techvisage',
        'formHash': 'm1fs4a3q0krw3pa',
        'autoResize': true,
        'async': true,
        'host': 'wufoo.com',
        'ssl': true
    };
    sTry.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
    sTry.onload = s.onreadystatechange = function () {
        var rs = this.readyState;
        if (rs) if (rs != 'complete') if (rs != 'loaded') return;
        try {
            m1fs4a3q0krw3pa = new WufooForm();
            m1fs4a3q0krw3pa.initialize(optionstry);
            m1fs4a3q0krw3pa.display();
        } catch (e) {
        }
    };
    var scrTry = d.getElementsByTagName(t)[0];
    var parTry = scrTry.parentNode;
    parTry.insertBefore(sTry, scrTry);


    $('#tryModal').on('show.bs.modal', function (event) {

    });

})(document, jQuery, 'script');

