 $(function(){
 	// vitricuaedu = $('#khoiedu').offset().top ;
 	// console.log(vitricuaedu)

 		$(".down,.kn").click(function() {
 			$('body,html').animate({ scrollTop:$('#khoiedu').offset().top},800);
 			return false ;

 		})
 		$(".about").click(function() {
 			$('body,html').animate({ scrollTop:$('#khoiedu').offset().top},800);
 			return false ;
 			
 		})
 		$(".cm").click(function() {
 			$('body,html').animate({ scrollTop:$('#phanhoi').offset().top},800);
 			return false ;
 			
 		})
})