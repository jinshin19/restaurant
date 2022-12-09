var navBtn = document.querySelector('.navbar');
var navList = document.querySelector('.mobile-nav-list');
var contact = document.querySelector('.contact');
var contactM = document.querySelector('.contact-m');
var contactWrapper = document.querySelector('.contact-wrapper');
var contactForm = document.querySelector('form');
var contactInfo = document.querySelector('.info');
var cBtn = document.querySelector('.cbtn');
var value = document.querySelectorAll('input, textarea');
var expandBtn = document.querySelector('.eBtn');
var expand = document.querySelector('.expand');
var mBtn = document.querySelector('.mbtn');
var mBtn2 = document.querySelector('.mbtn2');


navBtn.addEventListener('click', openNavList);
contact.addEventListener('click', openContact);
contactM.addEventListener('click', openContactM);
cBtn.addEventListener('click', closeContact);
mBtn.addEventListener('click', addInfo);
mBtn2.addEventListener('click', contactPage);
window.addEventListener('click', outsideClick);
expandBtn.addEventListener('click', toggle)

function outsideClick(clickEvent) {
	if(clickEvent.target.className == "navbar") {
	} else {
		navList.classList.remove('show');
	}
}

function openNavList() {
	navList.classList.toggle('show');
}

function openContact() {
	contactWrapper.style.transform = "none";
	contactWrapper.style.zIndex = "1";
	cBtn.style.zIndex = "1";
	contactWrapper.addEventListener('transitionend', transition1);
	function transition1() {
		contactForm.style.transform = "none";
		contactInfo.style.transform = "none";
		cBtn.style.opacity = "1";
		setTimeout(remove, 250);
		function remove() {
			contactWrapper.removeEventListener('transitionend', transition1);
		}
	}
}

function openContactM() {
	contactWrapper.style.transform = "none";
	contactWrapper.style.zIndex = "1";
	cBtn.style.zIndex = "1";
	contactWrapper.addEventListener('transitionend', transition1);
	function transition1() {
		contactForm.style.transform = "none";
		cBtn.style.opacity = "1";
		setTimeout(remove, 250);
		function remove() {
			contactWrapper.removeEventListener('transitionend', transition1);
		}
	}
}

function addInfo() {
	contactForm.style.transform = "translateX(-100em)";
	contactForm.addEventListener('transitionend', left)
	function left() {
		contactInfo.style.transform = "none";
		setTimeout(remove, 250);
		function remove() {
			contactForm.removeEventListener('transitionend', left);
		}
	}
}

function contactPage() {
	contactInfo.style.transform = "translateX(50em)";
	contactInfo.addEventListener('transitionend', right)
	function right() {
		contactForm.style.transform = "none";
		setTimeout(remove, 250);
		function remove() {
			contactInfo.removeEventListener('transitionend', right);
		}
	}
}

function closeContact() {
	cBtn.style.opacity = "0";
	contactForm.style.transform = "translateX(-100em)";
	contactInfo.style.transform = "translateX(100em)";
	contactForm.addEventListener('transitionend', transition2);
	contactInfo.addEventListener('transitionend', transition2);
	function transition2() {
		contactWrapper.style.transform = "translateY(-100em)";
		setTimeout(remove, 250);
		function remove() {
			contactWrapper.style.zIndex = "0";
			cBtn.style.zIndex = "0";
			contactForm.removeEventListener('transitionend', transition2);
			contactInfo.removeEventListener('transitionend', transition2);
			for (var i = 0; i < value.length; i++) {
				value[i].value = '';
			}
		}
	}
}

function toggle() {
	expand.classList.toggle('toggle');
	if (expandBtn.innerText == "Read More") {
		expandBtn.innerText = "Read Less";
	} else {
		expandBtn.innerText = "Read More";
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