var cta = document.querySelectorAll('.cta');
var cbtn = document.querySelector('.cbtn');

cbtn.addEventListener('click', closeContactForm);

for(var i = 0; i < cta.length; i++) {
	cta[i].addEventListener('click', openContactForm);
	function openContactForm() {
		document.querySelector('.form').style.transform = "none";
		document.querySelector('.form').style.zIndex = "1";
		document.querySelector('.form').addEventListener('transitionend', callForm);
		function callForm() {
			document.querySelector('form').style.transform = "none";
			setTimeout(remove, 100);
			function remove() {
				document.querySelector('.form').removeEventListener('transitionend', callForm)
				console.log('remove1')
			}
		}
	}
}

function closeContactForm() {
	document.querySelector('form').style.transform = "translateY(-100em)";
	document.querySelector('form').addEventListener('transitionend', callWrap);
	function callWrap() {
		document.querySelector('.form').style.transform = "translateX(-100em)";
		setTimeout(remove, 100);
		function remove() {
		document.querySelector('form').removeEventListener('transitionend', callWrap)
			console.log('remove2')
			document.querySelector('.form').style.zIndex = "0";
		}
	}
}



window.matchMedia('(orientation : portrait)').addEventListener('change', e => {
	var portrait = e.matches;
	if (portrait) {
		if (window.matchMedia('(max-width: 1024px)').matches & window.matchMedia('(max-height: 1366px)').matches & window.matchMedia('(orientation : portrait)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 800px)').matches & window.matchMedia('(max-height: 1280px)').matches & window.matchMedia('(orientation : portrait)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 600px)').matches & window.matchMedia('(max-height: 1024px)').matches & window.matchMedia('(orientation : portrait)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 480px)').matches & window.matchMedia('(max-height: 854px)').matches & window.matchMedia('(orientation : portrait)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			return false;
		}
	} else {
		
	}
})

window.matchMedia('(orientation : landscape)').addEventListener('change', e => {
	var landscape = e.matches;
	if (landscape) {
		if (window.matchMedia('(max-width: 1366px)').matches & window.matchMedia('(max-height: 1024px)').matches & window.matchMedia('(orientation : landscape)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 1280px)').matches & window.matchMedia('(max-height: 800px)').matches & window.matchMedia('(orientation : landscape)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 1180px)').matches & window.matchMedia('(max-height: 820px)').matches & window.matchMedia('(orientation : landscape)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 1024px)').matches & window.matchMedia('(max-height: 600px)').matches & window.matchMedia('(orientation : landscape)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 926px)').matches & window.matchMedia('(max-height: 428px)').matches & window.matchMedia('(orientation : landscape)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 854px)').matches & window.matchMedia('(max-height: 480px)').matches & window.matchMedia('(orientation : landscape)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 745px)').matches & window.matchMedia('(max-height: 353px)').matches & window.matchMedia('(orientation : landscape)').matches) {
			document.querySelector('.con1').style.height = "100vh";
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 740px)').matches & window.matchMedia('(max-height: 360px)').matches & window.matchMedia('(orientation : landscape)').matches) {
			document.querySelector('.con1').style.height = "100vh";
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 736px)').matches & window.matchMedia('(max-height: 414px)').matches & window.matchMedia('(orientation : landscape)').matches) {
			document.querySelector('.con1').style.height = "100vh";
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 667px)').matches & window.matchMedia('(max-height: 375px)').matches & window.matchMedia('(orientation : landscape)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 658px)').matches & window.matchMedia('(max-height: 320px)').matches & window.matchMedia('(orientation : landscape)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 640px)').matches & window.matchMedia('(max-height: 384px)').matches & window.matchMedia('(orientation : landscape)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			return false;
		}
		if (window.matchMedia('(max-width: 580px)').matches & window.matchMedia('(max-height: 375px)').matches & window.matchMedia('(orientation : landscape)').matches) {
			var containers = document.querySelectorAll('.con1, .con2');
			for ( var i = 0; i < containers.length; i++) {
				containers[i].style.height = "auto";
			}
		} else {
			
		}
	} else {
		
	}
})