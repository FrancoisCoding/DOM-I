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
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
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
headers[5].textContent = siteContent["contact"]["contact-h4"]

// Nav
const links = document.querySelectorAll("a");
links[0].textContent = siteContent["nav"]["nav-item-1"]
links[1].textContent = siteContent["nav"]["nav-item-2"]
links[2].textContent = siteContent["nav"]["nav-item-3"]
links[3].textContent = siteContent["nav"]["nav-item-4"]
links[4].textContent = siteContent["nav"]["nav-item-5"]
links[5].textContent = siteContent["nav"]["nav-item-6"]
links[0].style.color = "green";
links[1].style.color = "green";
links[2].style.color = "green";
links[3].style.color = "green";
links[4].style.color = "green";
links[5].style.color = "green";

// Paragraphs
const paragraphs = document.querySelectorAll("p");
paragraphs[0].textContent = siteContent["main-content"]["features-content"]
paragraphs[1].textContent = siteContent["main-content"]["about-content"]
paragraphs[2].textContent = siteContent["main-content"]["services-content"]
paragraphs[3].textContent = siteContent["main-content"]["product-content"]
paragraphs[4].textContent = siteContent["main-content"]["vision-content"]
paragraphs[5].textContent = siteContent["contact"]["address"]
paragraphs[6].textContent = siteContent["contact"]["phone"]
paragraphs[7].textContent = siteContent["contact"]["email"]
paragraphs[8].textContent = siteContent["footer"]["copyright"]

// Button
const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"]

// Append & Prepend
const navElement = document.getElementsByTagName("nav");

// (iName) recives the nav bar item name
let createNode = iName => {
	const newNavItem = document.createElement("a");
	newNavItem.innerHTML = iName;
    newNavItem.textContent = "Extra Link"
    newNavItem.style.color = "green"
    newNavItem.href = "#"
	
	return newNavItem
}
let createNode2 = iName => {
	const newNavItem = document.createElement("a");
	newNavItem.innerHTML = iName;
    newNavItem.textContent = "Extra Link2"
    newNavItem.style.color = "green"
    newNavItem.href = "#"
	
	return newNavItem
}
navElement[0].prepend(createNode("extraText"));
navElement[0].appendChild(createNode2("extraText2"));

