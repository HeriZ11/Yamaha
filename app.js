const motorcyclesData = {
    'yzf-r1': {
        name: 'Yamaha YZF-R1',
        model: 'YZF-R1',
        engine: '998cc Liquid-cooled, 4-stroke, DOHC, 4-valve',
        maxPower: 'Approx. 200 hp',
        topSpeed: 'Over 299 km/h (electronically limited)',
        features: 'Advanced electronics, Traction Control, Slide Control, Quick Shift System',
        price: 'RM 99,999',
        imageUrl: 'https://www.bikesrepublic.com/wp-content/uploads/2024/09/2025-Yamaha-YZF-R1M.jpg'
    },
    'mt-09': {
        name: 'Yamaha MT-09',
        model: 'MT-09',
        engine: '890cc Liquid-cooled, 4-stroke, DOHC, 3-cylinder',
        maxPower: 'Approx. 119 hp',
        topSpeed: 'Approx. 220 km/h',
        features: 'Agile handling, Torque-rich engine, TFT display, LED lighting',
        price: 'RM 54,999',
        imageUrl: 'https://4kwallpapers.com/images/wallpapers/yamaha-mt-09-2024-2048x2048-13355.jpg'
    },
    'tenere-700': {
        name: 'Yamaha Ténéré 700',
        model: 'Ténéré 700',
        engine: '689cc Liquid-cooled, 4-stroke, DOHC, 2-cylinder',
        maxPower: 'Approx. 72 hp',
        topSpeed: 'Approx. 190 km/h',
        features: 'Rally-bred design, Long-travel suspension, Switchable ABS',
        price: 'RM 62,999',
        imageUrl: 'https://www.4moto-shop.de/images/product_images/info_images/Yamaha_Tenere_Dekor_dakar_design_4moto_bikewrap-5.jpg'
    }
};

function showPage(pageId) {
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        if (page.id === `${pageId}-page`) {
            page.classList.remove('hidden', 'scale-150', 'opacity-0');
            page.classList.add('scale-200', 'opacity-100');
        } else {
            page.classList.add('hidden', 'scale-150', 'opacity-0');
            page.classList.remove('scale-200', 'opacity-100');
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('onclick').includes(`'${pageId}'`)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    history.pushState(null, '', `#${pageId}`);
}

function showMotorcycleDetails(motorcycleId) {
    const motorcycle = motorcyclesData[motorcycleId];
    if (!motorcycle) return;

    document.getElementById('modal-motorcycle-name').textContent = motorcycle.name;
    document.getElementById('modal-motorcycle-model').textContent = `Model: ${motorcycle.model}`;
    document.getElementById('modal-engine').textContent = motorcycle.engine;
    document.getElementById('modal-max-power').textContent = motorcycle.maxPower;
    document.getElementById('modal-top-speed').textContent = motorcycle.topSpeed;
    document.getElementById('modal-features').textContent = motorcycle.features;
    document.getElementById('modal-motorcycle-price').textContent = `Price: ${motorcycle.price}`;

    const modal = document.getElementById('motorcycle-details-modal');
    const modalContent = document.getElementById('modal-content-wrapper');
    modal.classList.remove('hidden');
    void modalContent.offsetWidth;
    modalContent.classList.remove('scale-145', 'opacity-10');
    modalContent.classList.add('scale-200', 'opacity-100');

    document.getElementById('modal-motorcycle-image').src = motorcycle.imageUrl;
    document.getElementById('modal-motorcycle-image').alt = motorcycle.name;
}
function hideMotorcycleDetails() {
    const modal = document.getElementById('motorcycle-details-modal');
    const modalContent = document.getElementById('modal-content-wrapper');
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    modal.addEventListener('transitionend', function handler() {
        modal.classList.add('hidden');
        modal.removeEventListener('transitionend', handler);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1);
    if (hash === 'motorcycles') {
        showPage('motorcycles');
    } else {
        showPage('home');
    }
});
