// Property detail data
const propertyDetails = {
    1: {
        id: 1,
        name: 'Navkar Paying Guest',
        address: '44, Juhu Scheme, Juhu, Mumbai, Maharashtra 400058',
        city: 'Mumbai',
        gender: 'male',
        rent: 9500,
        rating: 4.5,
        image_url: 'pglife image/properties/1/1d4f0757fdb86d5f.jpg',
        images: [
            'pglife image/properties/1/1d4f0757fdb86d5f.jpg',
            'pglife image/properties/1/46ebbb537aa9fb0a.jpg',
            'pglife image/properties/1/eace7b9114fd6046.jpg'
        ],
        interested_count: 3,
        amenities: ['WiFi', 'Power Backup', 'CCTV', 'AC', 'Geyser', 'Parking']
    },
    2: {
        id: 2,
        name: 'Ganpati Paying Guest',
        address: 'Police Beat, Sainath Complex, Besides, SV Rd, Daulat Nagar, Borivali East, Mumbai-400067',
        city: 'Mumbai',
        gender: 'unisex',
        rent: 8500,
        rating: 4.8,
        image_url: 'pglife image/properties/1/eace7b9114fd6046.jpg',
        images: [
            'pglife image/properties/1/eace7b9114fd6046.jpg',
            'pglife image/properties/1/1d4f0757fdb86d5f.jpg'
        ],
        interested_count: 6,
        amenities: ['WiFi', 'Power Backup', 'CCTV', 'Dining', 'Lift']
    },
    3: {
        id: 3,
        name: 'PG for Girls Borivali West',
        address: 'Plot No.258/D4, Gorai No.2, Borivali West, Mumbai, Maharashtra 400092',
        city: 'Mumbai',
        gender: 'female',
        rent: 8000,
        rating: 3.5,
        image_url: 'pglife image/properties/1/46ebbb537aa9fb0a.jpg',
        images: [
            'pglife image/properties/1/46ebbb537aa9fb0a.jpg',
            'pglife image/properties/1/1d4f0757fdb86d5f.jpg'
        ],
        interested_count: 2,
        amenities: ['WiFi', 'Power Backup', 'CCTV', 'Geyser', 'Washing Machine']
    },
    4: {
        id: 4,
        name: 'Comfort PG Delhi',
        address: '123, Connaught Place, New Delhi, Delhi 110001',
        city: 'Delhi',
        gender: 'male',
        rent: 10000,
        rating: 4.2,
        image_url: 'pglife image/properties/2/1dcfc57947b5c712.jpg',
        images: [
            'pglife image/properties/2/1dcfc57947b5c712.jpg',
            'pglife image/properties/2/45109c3e5c063d21.jpg'
        ],
        interested_count: 5,
        amenities: ['WiFi', 'Power Backup', 'CCTV', 'AC', 'Parking', 'TV']
    },
    5: {
        id: 5,
        name: 'Elite Girls PG Delhi',
        address: '456, Saket, New Delhi, Delhi 110017',
        city: 'Delhi',
        gender: 'female',
        rent: 11000,
        rating: 4.6,
        image_url: 'pglife image/properties/2/45109c3e5c063d21.jpg',
        images: [
            'pglife image/properties/2/45109c3e5c063d21.jpg',
            'pglife image/properties/2/1dcfc57947b5c712.jpg'
        ],
        interested_count: 8,
        amenities: ['WiFi', 'Power Backup', 'CCTV', 'AC', 'Geyser', 'Lift', 'Dining']
    },
    6: {
        id: 6,
        name: 'Modern PG Bangalore',
        address: '789, Koramangala, Bangalore, Karnataka 560095',
        city: 'Bangalore',
        gender: 'unisex',
        rent: 9000,
        rating: 4.3,
        image_url: 'pglife image/properties/3/1d4f0757fdb86d5f.jpg',
        images: ['pglife image/properties/3/1d4f0757fdb86d5f.jpg'],
        interested_count: 4,
        amenities: ['WiFi', 'Power Backup', 'CCTV', 'AC', 'Parking']
    },
    7: {
        id: 7,
        name: 'Student Hub Bangalore',
        address: '321, Indiranagar, Bangalore, Karnataka 560038',
        city: 'Bangalore',
        gender: 'male',
        rent: 8500,
        rating: 4.0,
        image_url: 'pglife image/properties/4/1d4f0757fdb86d5f.jpg',
        images: ['pglife image/properties/4/1d4f0757fdb86d5f.jpg'],
        interested_count: 7,
        amenities: ['WiFi', 'Power Backup', 'CCTV', 'Geyser']
    },
    8: {
        id: 8,
        name: 'Premium PG Hyderabad',
        address: '555, Hitech City, Hyderabad, Telangana 500081',
        city: 'Hyderabad',
        gender: 'unisex',
        rent: 9500,
        rating: 4.4,
        image_url: 'pglife image/properties/5/1d4f0757fdb86d5f.jpg',
        images: ['pglife image/properties/5/1d4f0757fdb86d5f.jpg'],
        interested_count: 6,
        amenities: ['WiFi', 'Power Backup', 'CCTV', 'AC', 'Parking', 'Lift']
    },
    9: {
        id: 9,
        name: 'Ladies PG Hyderabad',
        address: '777, Banjara Hills, Hyderabad, Telangana 500034',
        city: 'Hyderabad',
        gender: 'female',
        rent: 10000,
        rating: 4.7,
        image_url: 'pglife image/properties/6/1d4f0757fdb86d5f.jpg',
        images: ['pglife image/properties/6/1d4f0757fdb86d5f.jpg'],
        interested_count: 9,
        amenities: ['WiFi', 'Power Backup', 'CCTV', 'AC', 'Geyser', 'Dining', 'Lift']
    }
};

// Amenity icons mapping
const amenityIcons = {
    'WiFi': 'wifi.svg',
    'Power Backup': 'powerbackup.svg',
    'CCTV': 'cctv.svg',
    'AC': 'ac.svg',
    'Geyser': 'geyser.svg',
    'Parking': 'parking.svg',
    'Lift': 'lift.svg',
    'Dining': 'dining.svg',
    'TV': 'tv.svg',
    'Washing Machine': 'washingmachine.svg',
    'RO Water': 'rowater.svg',
    'Fire Extinguisher': 'fireext.svg',
    'Bed': 'bed.svg'
};

// Get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get gender icon
function getGenderIcon(gender) {
    const icons = {
        'male': 'pglife image/male.png',
        'female': 'pglife image/female.png',
        'unisex': 'pglife image/unisex.png'
    };
    return icons[gender] || icons['unisex'];
}

// Render stars
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHtml = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star text-yellow-400"></i>';
    }
    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star text-yellow-400"></i>';
    }
    
    return starsHtml;
}

// Format rent
function formatRent(rent) {
    return `Rs ${rent.toLocaleString('en-IN')}`;
}

// Load property details
function loadPropertyDetails() {
    const propertyId = parseInt(getUrlParameter('id'));
    
    if (!propertyId || !propertyDetails[propertyId]) {
        document.getElementById('loading').innerHTML = '<p class="text-red-600">Property not found</p>';
        return;
    }
    
    const property = propertyDetails[propertyId];
    
    // Hide loading, show content
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('property-content').classList.remove('hidden');
    
    // Set property details
    document.getElementById('property-name').textContent = property.name;
    document.getElementById('property-address').textContent = property.address;
    document.getElementById('property-rent').textContent = formatRent(property.rent);
    document.getElementById('property-city').textContent = property.city;
    document.getElementById('property-rating').innerHTML = renderStars(property.rating);
    document.getElementById('interested-count').textContent = `${property.interested_count} interested`;
    
    // Set gender icon
    const genderDiv = document.getElementById('property-gender');
    genderDiv.innerHTML = `<img src="${getGenderIcon(property.gender)}" alt="${property.gender}" class="h-8 w-8 inline-block mr-2"><span class="capitalize">${property.gender}</span>`;
    
    // Set main image
    const mainImage = document.getElementById('main-image');
    mainImage.src = property.image_url;
    mainImage.alt = property.name;
    
    // Set image thumbnails
    const thumbnailsContainer = document.getElementById('image-thumbnails');
    if (property.images && property.images.length > 0) {
        thumbnailsContainer.innerHTML = property.images.map((img, index) => `
            <img src="${img}" alt="Property Image ${index + 1}" 
                 class="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75 border-2 border-transparent hover:border-blue-500"
                 onclick="changeMainImage('${img}')">
        `).join('');
    }
    
    // Set amenities
    const amenitiesList = document.getElementById('amenities-list');
    if (property.amenities && property.amenities.length > 0) {
        amenitiesList.innerHTML = property.amenities.map(amenity => {
            const icon = amenityIcons[amenity] || 'wifi.svg';
            return `
                <div class="flex items-center space-x-3">
                    <img src="pglife image/amenities/${icon}" alt="${amenity}" class="h-8 w-8">
                    <span>${amenity}</span>
                </div>
            `;
        }).join('');
    } else {
        amenitiesList.innerHTML = '<p class="text-gray-500">No amenities listed</p>';
    }
    
    // Update city link
    document.getElementById('city-link').href = `property_list.html?city=${property.city}`;
    
    // Setup interest heart
    document.getElementById('interest-heart').addEventListener('click', function() {
        if (this.classList.contains('far')) {
            this.classList.remove('far');
            this.classList.add('fas');
            property.interested_count++;
        } else {
            this.classList.remove('fas');
            this.classList.add('far');
            property.interested_count--;
        }
        document.getElementById('interested-count').textContent = `${property.interested_count} interested`;
    });
}

// Change main image
function changeMainImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadPropertyDetails();
});
