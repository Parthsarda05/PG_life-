// Property data - hardcoded
const propertiesData = {
    'Mumbai': [
        {
            id: 1,
            name: 'Navkar Paying Guest',
            address: '44, Juhu Scheme, Juhu, Mumbai, Maharashtra 400058',
            city: 'Mumbai',
            gender: 'male',
            rent: 9500,
            rating: 4.5,
            image_url: 'pglife image/properties/1/1d4f0757fdb86d5f.jpg',
            interested_count: 3
        },
        {
            id: 2,
            name: 'Ganpati Paying Guest',
            address: 'Police Beat, Sainath Complex, Besides, SV Rd, Daulat Nagar, Borivali East, Mumbai-400067',
            city: 'Mumbai',
            gender: 'unisex',
            rent: 8500,
            rating: 4.8,
            image_url: 'pglife image/properties/1/eace7b9114fd6046.jpg',
            interested_count: 6
        },
        {
            id: 3,
            name: 'PG for Girls Borivali West',
            address: 'Plot No.258/D4, Gorai No.2, Borivali West, Mumbai, Maharashtra 400092',
            city: 'Mumbai',
            gender: 'female',
            rent: 8000,
            rating: 3.5,
            image_url: 'pglife image/properties/1/46ebbb537aa9fb0a.jpg',
            interested_count: 2
        }
    ],
    'Delhi': [
        {
            id: 4,
            name: 'Comfort PG Delhi',
            address: '123, Connaught Place, New Delhi, Delhi 110001',
            city: 'Delhi',
            gender: 'male',
            rent: 10000,
            rating: 4.2,
            image_url: 'pglife image/properties/2/1dcfc57947b5c712.jpg',
            interested_count: 5
        },
        {
            id: 5,
            name: 'Elite Girls PG Delhi',
            address: '456, Saket, New Delhi, Delhi 110017',
            city: 'Delhi',
            gender: 'female',
            rent: 11000,
            rating: 4.6,
            image_url: 'pglife image/properties/2/45109c3e5c063d21.jpg',
            interested_count: 8
        }
    ],
    'Bangalore': [
        {
            id: 6,
            name: 'Modern PG Bangalore',
            address: '789, Koramangala, Bangalore, Karnataka 560095',
            city: 'Bangalore',
            gender: 'unisex',
            rent: 9000,
            rating: 4.3,
            image_url: 'pglife image/properties/3/1d4f0757fdb86d5f.jpg',
            interested_count: 4
        },
        {
            id: 7,
            name: 'Student Hub Bangalore',
            address: '321, Indiranagar, Bangalore, Karnataka 560038',
            city: 'Bangalore',
            gender: 'male',
            rent: 8500,
            rating: 4.0,
            image_url: 'pglife image/properties/4/1d4f0757fdb86d5f.jpg',
            interested_count: 7
        }
    ],
    'Hyderabad': [
        {
            id: 8,
            name: 'Premium PG Hyderabad',
            address: '555, Hitech City, Hyderabad, Telangana 500081',
            city: 'Hyderabad',
            gender: 'unisex',
            rent: 9500,
            rating: 4.4,
            image_url: 'pglife image/properties/5/1d4f0757fdb86d5f.jpg',
            interested_count: 6
        },
        {
            id: 9,
            name: 'Ladies PG Hyderabad',
            address: '777, Banjara Hills, Hyderabad, Telangana 500034',
            city: 'Hyderabad',
            gender: 'female',
            rent: 10000,
            rating: 4.7,
            image_url: 'pglife image/properties/6/1d4f0757fdb86d5f.jpg',
            interested_count: 9
        }
    ]
};

// Get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// State
let currentCity = 'Mumbai';
let currentGenderFilter = 'all';
let currentSort = null;
let displayedProperties = [];

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

// Create property card
function createPropertyCard(property) {
    return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="md:flex">
                <div class="md:w-1/3">
                    <img src="${property.image_url}" alt="${property.name}" class="w-full h-64 md:h-full object-cover">
                </div>
                <div class="md:w-2/3 p-6">
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex items-center space-x-1" title="${property.rating}">
                            ${renderStars(property.rating)}
                        </div>
                        <div class="text-center">
                            <i class="far fa-heart text-red-500 text-xl cursor-pointer hover:text-red-600"></i>
                            <div class="text-sm text-gray-600">${property.interested_count} interested</div>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold mb-2">${property.name}</h3>
                    <p class="text-gray-600 mb-4">${property.address}</p>
                    <div class="flex items-center mb-4">
                        <img src="${getGenderIcon(property.gender)}" alt="${property.gender}" class="h-8 w-8 mr-2">
                        <span class="text-gray-700 capitalize">${property.gender}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <div>
                            <div class="text-2xl font-bold text-blue-600">${formatRent(property.rent)}</div>
                            <div class="text-sm text-gray-500">per month</div>
                        </div>
                        <a href="property_detail.html?id=${property.id}" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                            View
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Load properties
function loadProperties() {
    currentCity = getUrlParameter('city') || 'Mumbai';
    document.getElementById('breadcrumb-city').textContent = currentCity;
    
    let properties = propertiesData[currentCity] || [];
    
    // Apply gender filter
    if (currentGenderFilter !== 'all') {
        properties = properties.filter(p => p.gender === currentGenderFilter);
    }
    
    // Apply sort
    if (currentSort === 'desc') {
        properties.sort((a, b) => b.rent - a.rent);
    } else if (currentSort === 'asc') {
        properties.sort((a, b) => a.rent - b.rent);
    }
    
    displayedProperties = properties;
    displayProperties();
}

// Display properties
function displayProperties() {
    const container = document.getElementById('properties-container');
    
    if (displayedProperties.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12">
                <p class="text-gray-600 text-lg">No properties found for ${currentCity}.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = displayedProperties.map(createPropertyCard).join('');
}

// Filter functions
function openFilterModal() {
    document.getElementById('filter-modal').classList.remove('hidden');
}

function closeFilterModal() {
    document.getElementById('filter-modal').classList.add('hidden');
}

function setGenderFilter(gender) {
    currentGenderFilter = gender;
    document.querySelectorAll('.filter-gender-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-blue-600', 'text-white');
        btn.classList.add('border');
    });
    event.target.classList.add('active', 'bg-blue-600', 'text-white');
    event.target.classList.remove('border');
}

function applyFilter() {
    closeFilterModal();
    loadProperties();
}

function sortProperties(order) {
    currentSort = order;
    loadProperties();
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProperties();
});
