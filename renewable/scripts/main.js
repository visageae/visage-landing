$(document).ready(function(){

	$('#hireForm').on('submit', function(event){
		event.preventDefault();
		var email = $(this).find('#emailInput').val();
		showModal(email);
	})

	$('#startedButton').on('click', function(event){
		showModal();
	})

	$('#viewMore').on('click', function(event){
		var scrollPosition = $('#secondFolder').offset().top;
		$('html, body').animate({scrollTop: scrollPosition }, 800);

	})

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
})
