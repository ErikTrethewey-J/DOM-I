const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav

let navLink = document.querySelectorAll("nav a");
let realNavLinks = Array.from(navLink);
let count = 1;
realNavLinks.forEach(item => {
  item.textContent = siteContent['nav'][`nav-item-${count.toString()}`]
  count++
});

// cta content

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

let ctaContent = document.querySelector('.cta-text h1')
ctaContent.textContent = siteContent['cta']['h1']

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button']

// main content

// top content

let FeaturesTitle = document.querySelector('.top-content h4')
FeaturesTitle.textContent = siteContent['main-content']['features-h4']

let FeaturesContent = document.querySelector('.top-content p')
FeaturesContent.textContent = siteContent['main-content']['features-content']

let aboutTitle = document.querySelector('.top-content').children[1]
aboutTitle.querySelector('h4').textContent = siteContent['main-content']['about-h4']

let aboutContent = document.querySelector('.top-content').children[1]
aboutContent.querySelector('p').textContent = siteContent['main-content']['about-content']

// middle image 

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// bottom content 

let servicesTitle = document.querySelector('.bottom-content h4')
servicesTitle.textContent = siteContent['main-content']['services-h4']

let servicesContent = document.querySelector('.bottom-content p')
servicesContent.textContent = siteContent['main-content']['services-content']

let productTitle = document.querySelector('.bottom-content').children[1]
productTitle.querySelector('h4').textContent = siteContent['main-content']['product-h4']

let productContent = document.querySelector('.bottom-content').children[1]
productContent.querySelector('p').textContent = siteContent['main-content']['product-content']

let visionTitle = document.querySelector('.bottom-content').children[2]
visionTitle.querySelector('h4').textContent = siteContent['main-content']['vision-h4']

let visionContent = document.querySelector('.bottom-content').children[2]
visionContent.querySelector('p').textContent = siteContent['main-content']['vision-content']

// conact info

let contact = document.querySelector('.contact h4')
contact.textContent = siteContent['contact']['contact-h4']

let contactAdress = document.querySelector('.contact')
contactAdress.querySelector('p').textContent = siteContent['contact']['address']

let contactPhone = document.querySelector('.contact').children[1]
contactPhone.querySelector('p').textContent = siteContent['contact']['phone']

let contactEmail = document.querySelector('.contact').children[2]
contactEmail.querySelector('p').textContent = siteContent['contact']['email']

// copyright

let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright']

