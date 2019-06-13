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
// Images
const logo = document.getElementById("logo-img");
logo.src = siteContent["nav"]["img-src"]

const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"]

const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"]

// Headers
const domText = document.querySelector(".cta-text h1").innerText = siteContent["cta"]["h1"]
const headers = document.querySelectorAll("h4");
headers[0].textContent = siteContent["main-content"]["features-h4"]
headers[1].textContent = siteContent["main-content"]["about-h4"]
headers[2].textContent = siteContent["main-content"]["services-h4"]
headers[3].textContent = siteContent["main-content"]["product-h4"]
headers[4].textContent = siteContent["main-content"]["vision-h4"]
headers[5].textContent = siteContent["main-content"]["contact-h4"]


// Nav
const navText1 = document.querySelector("nav a:nth-child(2)").textContent = siteContent["nav"]["nav-item-1"]
const navText2 = document.querySelector("nav a:nth-child(3)").textContent = siteContent["nav"]["nav-item-2"]
const navText3 = document.querySelector("nav a:nth-child(4)").textContent = siteContent["nav"]["nav-item-3"]
const navText4 = document.querySelector("nav a:nth-child(5)").textContent = siteContent["nav"]["nav-item-4"]
const navText5 = document.querySelector("nav a:nth-child(6)").textContent = siteContent["nav"]["nav-item-5"]
const navText6 = document.querySelector("nav a:nth-child(7)").textContent = siteContent["nav"]["nav-item-6"]

