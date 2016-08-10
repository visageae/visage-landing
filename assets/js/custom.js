;(function($){

    var counter = function() {
        var anim = function(elem, start, cb){
            $(elem).animate({countNum: start}, {
                duration: 4000,
                easing:'linear',
                step: function() {
                    $(this).text(Math.floor(this.countNum));
                },
                complete: function() {
                    $(this).text(this.countNum);
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

})( jQuery );

