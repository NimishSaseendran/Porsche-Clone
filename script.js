const modelImage = [
    {
        name: '718',
        image: 'https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-modelimage-sideshot/thumbwhite/230138a1-e874-11ea-80cd-005056bbdc38;sK;twebp/porsche-thumbwhite.webp',
        price: 14772000
    },
    {
        name: '911',
        image: 'https://files.porsche.com/filestore/image/multimedia/none/992-2nd-c2-modelimage-sideshot/thumbwhite/3944d683-19bf-11ef-812b-005056bbdc38;sK;twebp/porsche-thumbwhite.webp',
        price: 19899000
    },
    {
        name: 'Taycan',
        image: 'https://configurator.porsche.com/model-start/pictures/911/extcam03.webp',
        price: 18942000
    },
    {
        name: 'Panamera',
        image: 'https://configurator.porsche.com/model-start/pictures/panamera/extcam03.webp',
        price: 16962000
    },
    {
        name: 'Macan',
        image: 'https://files.porsche.com/filestore/image/multimedia/none/macan-bev-modelimage/thumbwhite/4734c3f5-1769-11ef-8128-005056bbdc38;sK;twebp/porsche-thumbwhite.webp',
        price: 9605000
    },
    {
        name: 'Cayenne',
        image: 'https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-modelimage-sideshot/thumbwhite/183a2390-8859-11ee-810c-005056bbdc38;sK;twebp/porsche-thumbwhite.webp',
        price: 14248000
    }
];

const imageContent = [
    {
        image: 'https://www.wsupercars.com/wallpapers-super-ultrawide/Porsche/2025-Porsche-911-Targa-4-GTS-003-1440sw.jpg',
        heading: 'Porsche India.',
        content: 'Know of our Porsche Centre network in India.'
    },
    {
        image: 'https://www.wsupercars.com/wallpapers-regular/Porsche/2025-Porsche-Panamera-Turbo-S-E-Hybrid-001-2100.jpg',
        heading: 'Courage got you here. Why stop now?',
        content: 'The new Panamera. Choose boldly.'
    },
    {
        image: 'https://www.wsupercars.com/wallpapers-regular/Porsche/2025-Porsche-Panamera-Turbo-S-E-Hybrid-003-2100.jpg',
        heading: 'Change your spark, not your fire.',
        content: 'Keep your essence. The new all-electric '
    },
    {
        image: 'https://www.wsupercars.com/wallpapers-regular/Porsche/2025-Porsche-911-Targa-4-GTS-006-2100.jpg',
        heading: 'The one and always.',
        content: 'The new 911'
    },
    {
        image: 'https://www.wsupercars.com/wallpapers-regular/Porsche/2019-Porsche-Panamera-GTS-001-1536.jpg',
        heading: 'Choose boldly',
        content: 'The new panamera'
    },
]

const nearMe = [
    {
        image: 'https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-718/normal/db4be0ec-f8f4-11eb-80db-005056bbdc38;sP;twebp/porsche-normal.webp',
        name: '718'
    },
    {
        image: 'https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-911/normal/e7c2070d-f8f4-11eb-80db-005056bbdc38;sP;twebp/porsche-normal.webp',
        name: '911'
    },
    {
        image: 'https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-taycan/normal/253ef544-f8f5-11eb-80db-005056bbdc38;sP;twebp/porsche-normal.webp',
        name: 'Taycan'
    },
    {
        image: 'https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-panamera/normal/19092f4b-f8f5-11eb-80db-005056bbdc38;sP;twebp/porsche-normal.webp',
        name: 'Panamera'
    },
    {
        image: 'https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-macan/normal/0355d78f-f8f5-11eb-80db-005056bbdc38;sP;twebp/porsche-normal.webp',
        name: 'Macan'
    },
    {
        image: 'https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-cayenne-e3/normal/ef4d48a8-f8f4-11eb-80db-005056bbdc38;sP;twebp/porsche-normal.webp',
        name: 'Cayenne'
    }
]

var e = ''
imageContent.forEach((item, index) => {
    const activeClass = index === 0 ? 'active' : '';
    e += `
        <div class="carousel-item ${activeClass}">
            <img src="${item.image}" class="d-block w-100" alt="...">
            <div class="img-content">
                <div class="carousel-caption d-flex flex-column text-start">
                    <h5 style="color: white;">${item.heading}</h5>
                    <p>${item.content}</p>
                </div>
        
            </div>
        </div>
    `;
})
document.getElementById('img-slide').innerHTML = e


var e = '';
modelImage.forEach((item) => {
    e += `
            <div class="card col-4 position-relative">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="overlay">
                    <h5 class="card-title fs-2 fw-bolder">${item.name}</h5>
                    <p class="price-text fw-medium">from INR ${item.price.toLocaleString()}</p>
                    <div class="button-container">
                    <button class="btn fw-semibold">Build Your Own</button>
                    <button class="btn btn-light">All Models</button>                
                </div>
                </div>
            </div>
        `;
});

document.getElementById('modelDetails').innerHTML = e

var e = ''
nearMe.forEach(element => {
    e += `
    <div class="card col-4">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body text-center">
            <button class="btn btn-dark find-button">Find ${element.name} Models</button>
        </div>
    </div>
    `
});

document.getElementById('near-me').innerHTML = e