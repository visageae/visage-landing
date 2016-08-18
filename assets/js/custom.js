;(function($){

    var counter = function() {
        var anim = function(elem, start, cb){
            $(elem).animate({countNum: parseInt(start)}, {
                duration: 1500,
                easing:'linear',
                step: function() {
                    $(this).text(parseInt(Math.floor(this.countNum)));
                },
                complete: function() {
                    $(this).text(parseInt(this.countNum));
                    cb();
                }
            });
        };


        $( ".counter-container .animated" ).on( "appear", function( event, param1, param2 ) {
            $(event.target).find( ".counter" ).each(function(){
                var start = $(this).text();
                anim(this, start, function(){

                });
            });
        });
    };

    $(document).on('ready', function () {
        counter();
    });

    var isWufooContactInit = false;
    $('#myModal').on('show.bs.modal', function (event) {
        if(!isWufooContactInit) {
            isWufooContactInit = true;
            var z8kv0cc0ktfm9y;(function(d, t) {
                var s = d.createElement(t), options = {
                    'userName':'techvisage',
                    'formHash':'z8kv0cc0ktfm9y',
                    'autoResize':true,
                    'height':'auto',
                    'async':true,
                    'host':'wufoo.com',
                    'header':'show',
                    'ssl':true};
                s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
                s.onload = s.onreadystatechange = function() {
                    var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
                    try { z8kv0cc0ktfm9y = new WufooForm();z8kv0cc0ktfm9y.initialize(options);z8kv0cc0ktfm9y.display(); } catch (e) {}};
                var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
            })(document, 'script');
        }
    });

    var isWufooTryInit = false;
    $('#tryModal').on('show.bs.modal', function (event) {
        console.log("tryModal");
        if(!isWufooTryInit) {
            isWufooTryInit = true;
            var m1fs4a3q0krw3pa;(function(d, t) {
                var s = d.createElement(t), options = {
                    'userName':'techvisage',
                    'formHash':'m1fs4a3q0krw3pa',
                    'autoResize':true,
                    'height':'620',
                    'async':true,
                    'host':'wufoo.com',
                    'header':'show',
                    'ssl':true};
                s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
                s.onload = s.onreadystatechange = function() {
                    var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
                    try { m1fs4a3q0krw3pa = new WufooForm();m1fs4a3q0krw3pa.initialize(options);m1fs4a3q0krw3pa.display(); } catch (e) {}};
                var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
            })(document, 'script');
        }
    });




})( jQuery );

