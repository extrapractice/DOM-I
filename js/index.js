const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png',
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io',
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018',
	},
};

// updates nav 
let navLinks = [];
let navImg = [];

let navEntries = Object.entries(siteContent['nav']);

navEntries.forEach(entry => {
    if(entry[0].includes('nav')){
        navLinks.push(entry[1])
    } else {
        navImg.push(entry[1])
    }
})
let nav = document.querySelectorAll('nav a');
nav.forEach((link, index) => {
    link.innerText = navLinks[index];
    link.style.color = 'green'
})

let navImages = document.querySelectorAll('header img');
navImages.forEach((img, index) => {
    img.src = navImg[index]
})

// updates cta section

let ctaTextH1 = document.querySelector('.cta-text h1')
siteContent.cta.h1 = "DOM <br> Is <br> Awesome"
ctaTextH1.innerHTML = siteContent['cta']['h1']

let ctaButton = document.querySelector('.cta-text button')
ctaButton.innerText = siteContent.cta.button

let ctaImg = document.getElementById('cta-img')
ctaImg.src = siteContent.cta['img-src']

// updates middle section 

let imgs = [];
let h4s = [];
let paras = [];

let mainEntries = Object.entries(siteContent['main-content']);

mainEntries.forEach(entry => {
    if(entry[0].includes('h4')){
        h4s.push(entry[1])
    } else if(entry[0].includes('img')){
        imgs.push(entry[1])
    } else {
        paras.push([entry[1]])
    }
})

let mainHeadersH4 = document.querySelectorAll('.text-content h4')
mainHeadersH4.forEach((item, index) => {
    item.innerText = h4s[index]
})

let mainParas= document.querySelectorAll('.text-content p');
mainParas.forEach((item,index) => {
    item.innerText = paras[index]
})

let mainImgs = document.querySelectorAll('.main-content img');
mainImgs.forEach((img, index) => {
    img.src = imgs[index]
})

// updates contact section 

let contactEntries = Object.entries(siteContent.contact);
let contactH4s= [];
let contactParas = [];

contactEntries.forEach(entry => {
    if(entry[0].includes('h4')){
        contactH4s.push(entry[1])
    } else {
        contactParas.push(entry[1])
    }
})

let contactH = document.querySelectorAll('.contact h4');
contactH.forEach((item,index) => {
    item.innerText = contactH4s[index]
})

let contactP = document.querySelectorAll('.contact p');
contactP.forEach((item, index) => {
    item.innerText = contactParas[index]
})

// updates footer 

let footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright']

// let {log} = console

// // Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.src = siteContent["nav"]["img-src"]

// // Updating Navigation
// let navLinks = document.querySelectorAll('nav a')
// navLinks[0].text = siteContent.nav["nav-item-1"]
// navLinks[1].text = siteContent.nav["nav-item-2"]
// navLinks[2].text = siteContent.nav["nav-item-3"]
// navLinks[3].text = siteContent.nav["nav-item-4"]
// navLinks[4].text = siteContent.nav["nav-item-5"]
// navLinks[5].text = siteContent.nav["nav-item-6"]

// // add two new items to nav
// let navigation = document.querySelector('header nav')
// let facebookLink = document.createElement('a')
// facebookLink.innerHTML = "Facebook Page"
// navigation.append(facebookLink)
// facebookLink.style.color = "rgb(36, 163, 61)"

// let twitterLink = document.createElement('a')
// twitterLink.innerText = "Twitter Account"
// navigation.prepend(twitterLink)
// twitterLink.style.color = "rgb(36, 163, 61)"

// // updates nav color to green
// navLinks.forEach(link => {
//     link.style.color = "rgb(36, 163, 61)"
// })

// // cta section
// let ctaTextH1 = document.querySelector('.cta-text h1')
// siteContent.cta.h1 = "DOM <br> Is <br> Awesome"
// ctaTextH1.innerHTML = siteContent['cta']['h1']
// let ctaButton = document.querySelector('.cta-text button')
// ctaButton.innerText = siteContent.cta.button

// let ctaImg = document.getElementById('cta-img')
// ctaImg.src = siteContent.cta['img-src']

// // main-content section
// let mainHeadersH4 = document.querySelectorAll('.text-content h4')
// mainHeadersH4[0].innerText = siteContent['main-content']['features-h4']
// mainHeadersH4[1].innerText = siteContent['main-content']['about-h4']
// mainHeadersH4[2].innerText = siteContent['main-content']['services-h4']
// mainHeadersH4[3].innerText = siteContent['main-content']['product-h4']
// mainHeadersH4[4].innerText = siteContent['main-content']['vision-h4']

// let mainContentP = document.querySelectorAll('.text-content p')
// mainContentP[0].innerHTML = siteContent['main-content']['features-content']
// mainContentP[1].innerHTML = siteContent['main-content']['about-content']
// mainContentP[2].innerHTML = siteContent['main-content']['services-content']
// mainContentP[3].innerHTML = siteContent['main-content']['product-content']
// mainContentP[4].innerHTML = siteContent['main-content']['vision-content']

// let mainContentImg = document.getElementById('middle-img');
// mainContentImg.src = siteContent['main-content']['middle-img-src']

// let contactH4 = document.querySelector('.contact h4')
// contactH4.innerText = siteContent.contact['contact-h4']

// let contactP = document.querySelectorAll('.contact p');
// contactP[0].innerHTML = siteContent.contact['address']
// contactP[1].innerHTML = siteContent.contact['phone']
// contactP[2].innerHTML = siteContent.contact['email']
