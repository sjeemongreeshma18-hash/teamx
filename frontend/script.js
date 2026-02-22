// Bus Stops Data
const busStops = [
    'petta', 'thykoodam', 'vyttilla hub', 'elamkulam',
    'kadavanthra', 'thirupunithura', 'vadakkekotta',
    'puthotta', 'nadakkav', 'puthiyakav'
];

// Sample Bus Data
const busesDatabase = [
    {
        id: 1,
        name: 'Parvathy',
        from: 'petta',
        to: 'thykoodam',
        departure: '08:00',
        arrival: '08:45',
        type: 'local',
        seats: 5,
        price: 25
    },
    {
        id: 2,
        name: 'Sreeelakshmi',
        from: 'petta',
        to: 'thykoodam',
        departure: '08:10',
        arrival: '08:30',
        type: 'limited',
        seats: 8,
        price: 35
    },
    {
        id: 3,
        name: 'Kailas',
        from: 'thykoodam',
        to: 'elamkulam',
        departure: '09:00',
        arrival: '09:50',
        type: 'local',
        seats: 50,
        price: 20
    },
    {
        id: 4,
        name: 'Amritha',
        from: 'thykoodam',
        to: 'kadavanthra',
        departure: '11:00',
        arrival: '12:15',
        type: 'limited',
        seats: 28,
        price: 40
    },
    {
        id: 5,
        name: 'Gsons',
        from: 'vyttilla hub',
        to: 'elamkulam',
        departure: '12:00',
        arrival: '12:45',
        type: 'local',
        seats: 55,
        price: 22
    },
    {
        id: 6,
        name: 'Ponmankal',
        from: 'thykoodam',
        to: 'kadavanthra',
        departure: '13:00',
        arrival: '13:40',
        type: 'limited',
        seats: 35,
        price: 32
    },
    {
        id: 7,
        name: 'Alenchery',
        from: 'elamkulam',
        to: 'petta',
        departure: '14:00',
        arrival: '15:00',
        type: 'local',
        seats: 48,
        price: 28
    },
    {
        id: 8,
        name: 'Punchiri',
        from: 'kadavanthra',
        to: 'vyttilla hub',
        departure: '15:00',
        arrival: '15:35',
        type: 'limited',
        seats: 30,
        price: 38
    },
    {
        id: 9,
        name: 'Pullathil',
        from: 'petta',
        to: 'elamkulam',
        departure: '16:00',
        arrival: '16:50',
        type: 'local',
        seats: 52,
        price: 26
    },
    {
        id: 10,
        name: 'New Fancy',
        from: 'vyttilla hub',
        to: 'kadavanthra',
        departure: '17:00',
        arrival: '17:50',
        type: 'limited',
        seats: 33,
        price: 36
    }
];

// Unique codes mapping for conductor
const conductorCodes = {
    'Pav@12': 'Parvathy',
    'Sam@34': 'Sreelakshmi',
    'Kev@24': 'Kailas',
    'Amy@13': 'Amritha' ,
    'Gson@45': 'Gsons',
    'Pon@56': 'Ponmankal',
    'Alen@78': 'Alenchery',
    'Punch@90': 'Punchiri',
    'Pull@67': 'Pullathil',
    'New@89': 'New Fancy'

};

// Storage for conductor messages
let conductorMessages = {};
let currentValidBus = null;



// Screen Management
function selectRole(role) {
    const loginScreen = document.getElementById('loginScreen');
    const passengerScreen = document.getElementById('passengerScreen');
    const conductorScreen = document.getElementById('conductorScreen');

    loginScreen.classList.remove('active');

    if (role === 'passenger') {
        passengerScreen.classList.add('active');
    } else if (role === 'conductor') {
        conductorScreen.classList.add('active');
    }
}

function logout() {
    const loginScreen = document.getElementById('loginScreen');
    const passengerScreen = document.getElementById('passengerScreen');
    const conductorScreen = document.getElementById('conductorScreen');

    passengerScreen.classList.remove('active');
    conductorScreen.classList.remove('active');
    loginScreen.classList.add('active');

    // Clear all inputs
    document.getElementById('fromInput').value = '';
    document.getElementById('toInput').value = '';
    document.getElementById('timeFrom').value = '';
    document.getElementById('timeTo').value = '';
    document.getElementById('busServiceSelect').value = '';
    document.getElementById('busResults').style.display = 'none';
    document.getElementById('noResults').style.display = 'none';
    document.getElementById('busNameDisplay').textContent = '';
    document.getElementById('busCodeInput').value = '';
    document.getElementById('conductorMessageInput').value = '';
    document.getElementById('messageGroup').style.display = 'none';
    document.getElementById('messageStatus').style.display = 'none';
    currentValidBus = null;

    // Clear suggestions
    document.getElementById('fromSuggestions').classList.remove('active');
    document.getElementById('toSuggestions').classList.remove('active');
}

// Autocomplete for "From" Field
function handleFromInput(value) {
    const suggestions = document.getElementById('fromSuggestions');
    filterSuggestions(value, suggestions);
}

// Autocomplete for "To" Field
function handleToInput(value) {
    const suggestions = document.getElementById('toSuggestions');
    filterSuggestions(value, suggestions);
}

// Filter and Display Suggestions
function filterSuggestions(value, container) {
    const filtered = busStops.filter(stop =>
        stop.toLowerCase().includes(value.toLowerCase())
    );

    // Clear previous suggestions
    container.innerHTML = '';

    if (value.trim() === '') {
        container.classList.remove('active');
        return;
    }

    if (filtered.length === 0) {
        container.classList.remove('active');
        return;
    }

    filtered.forEach(stop => {
        const li = document.createElement('li');
        li.textContent = stop;
        li.onclick = () => {
            if (container.id === 'fromSuggestions') {
                document.getElementById('fromInput').value = stop;
            } else {
                document.getElementById('toInput').value = stop;
            }
            container.classList.remove('active');
        };
        container.appendChild(li);
    });

    container.classList.add('active');
}

// Search Functionality
function performSearch() {
    const from = document.getElementById('fromInput').value.trim().toLowerCase();
    const to = document.getElementById('toInput').value.trim().toLowerCase();
    const timeFrom = document.getElementById('timeFrom').value;
    const timeTo = document.getElementById('timeTo').value;
    const busService = document.getElementById('busServiceSelect').value;

    // Validation
    if (!from || !to || !timeFrom || !timeTo || !busService) {
        alert('Please fill in all fields');
        return;
    }

    if (from === to) {
        alert('From and To cannot be the same');
        return;
    }

    // Validate bus stops
    if (!busStops.map(s => s.toLowerCase()).includes(from)) {
        alert('Invalid "From" stop. Please select from: ' + busStops.join(', '));
        return;
    }

    if (!busStops.map(s => s.toLowerCase()).includes(to)) {
        alert('Invalid "To" stop. Please select from: ' + busStops.join(', '));
        return;
    }

    // Filter buses based on criteria
    let filteredBuses = busesDatabase.filter(bus => {
        const busTimeFrom = parseInt(bus.departure.replace(':', ''));
        const searchTimeFrom = parseInt(timeFrom.replace(':', ''));
        const searchTimeTo = parseInt(timeTo.replace(':', '')); 

        const matchesRoute = bus.from === from && bus.to === to;
        const matchesTime = busTimeFrom >= searchTimeFrom && busTimeFrom <= searchTimeTo;
        const matchesService = busService === 'all' ||
            (busService === 'local' && bus.type === 'local') ||
            (busService === 'limited' && bus.type === 'limited');

        return matchesRoute && matchesTime && matchesService;
    });

    // Display results
    const busResults = document.getElementById('busResults');
    const noResults = document.getElementById('noResults');
    const busList = document.getElementById('busList');

    if (filteredBuses.length === 0) {
        busResults.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        busList.innerHTML = '';
        filteredBuses.forEach(bus => {
            const busCard = createBusCard(bus);
            busList.appendChild(busCard);
        });
        busResults.style.display = 'block';
        noResults.style.display = 'none';
    }
}

// Create Bus Card Element
function createBusCard(bus) {
    const card = document.createElement('div');
    card.className = 'bus-card';

    const serviceType = bus.type === 'local' ? 'Local Bus' : 'Limited Stop Bus';

    card.innerHTML = `
        <div class="bus-info">
            <div class="bus-info-title">BUS NAME</div>
            <div class="bus-info-value">${bus.name}</div>
        </div>
        <div class="bus-info">
            <div class="bus-info-title">DEPARTURE</div>
            <div class="bus-info-value">${bus.departure}</div>
        </div>
        <div class="bus-info">
            <div class="bus-info-title">ARRIVAL</div>
            <div class="bus-info-value">${bus.arrival}</div>
        </div>
        <div class="bus-info">
            <div class="bus-info-title">SERVICE TYPE</div>
            <div class="bus-info-value">${serviceType}</div>
        </div>
        <div class="bus-info">
            <div class="bus-info-title">PRICE</div>
            <div class="bus-info-value">₹${bus.price}</div>
        </div>
        <div class="bus-info">
            <div class="bus-info-title">AVAILABLE SEATS</div>
            <div class="bus-info-value">${bus.seats}</div>
        </div>
        ${conductorMessages[bus.name] ? `
        <div class="bus-info conductor-message">
            <div class="bus-info-title">CONDUCTOR MESSAGE</div>
            <div class="bus-info-value">${conductorMessages[bus.name]}</div>
        </div>
        ` : ''}
        <button class="book-btn" onclick="bookBus(${bus.id})">Book Seat</button>
    `;

    return card;
}

// Book Bus
function bookBus(busId) {
    const bus = busesDatabase.find(b => b.id === busId);
    if (bus) {
        alert(`Booking seat on ${bus.name} from ${bus.from} to ${bus.to} at ₹${bus.price}`);
        // Here you could redirect to a payment page or seat selection page
    }
}

// Handle clicking outside suggestions
document.addEventListener('click', function(event) {
    const fromInput = document.getElementById('fromInput');
    const toInput = document.getElementById('toInput');
    const fromSuggestions = document.getElementById('fromSuggestions');
    const toSuggestions = document.getElementById('toSuggestions');

    if (!event.target.closest('.autocomplete-wrapper')) {
        fromSuggestions.classList.remove('active');
        toSuggestions.classList.remove('active');
    }
});

// Handle Enter key on time inputs to search
document.getElementById('timeFrom')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.getElementById('timeTo')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Add some interactivity to the "From" input field
document.addEventListener('DOMContentLoaded', function() {
    const fromInput = document.getElementById('fromInput');
    const toInput = document.getElementById('toInput');

    // Show suggestions on focus
    fromInput?.addEventListener('focus', function() {
        if (this.value) {
            handleFromInput(this.value);
        }
    });

    toInput?.addEventListener('focus', function() {
        if (this.value) {
            handleToInput(this.value);
        }
    });
});

// Lookup conductor bus name
function lookupBusCode() {
    const code = document.getElementById('busCodeInput').value.trim();
    if (code === '') {
        alert('Please enter a code');
        return;
    }
    const name = conductorCodes[code];
    if (name) {
        currentValidBus = name;
        document.getElementById('messageGroup').style.display = 'block';
        document.getElementById('conductorMessageInput').value = '';
        document.getElementById('messageStatus').style.display = 'none';
    } else {
        alert('Invalid code. Please try again.');
        document.getElementById('messageGroup').style.display = 'none';
        currentValidBus = null;
    }
}

// Submit conductor message
function submitConductorMessage() {
    const message = document.getElementById('conductorMessageInput').value.trim();
    const busName = currentValidBus;
    
    if (!busName) {
        alert('Please enter a valid bus code first');
        return;
    }
    
    if (message === '') {
        alert('Please enter a message');
        return;
    }
    
    // Store the message with the bus name
    conductorMessages[busName] = message;
    
    // Show success message
    const statusDiv = document.getElementById('messageStatus');
    statusDiv.textContent = `Message sent for ${busName}`;
    statusDiv.style.display = 'block';
    statusDiv.className = 'message-status success';
    
    // Clear inputs after 2 seconds
    setTimeout(() => {
        document.getElementById('busCodeInput').value = '';
        document.getElementById('conductorMessageInput').value = '';
        document.getElementById('messageGroup').style.display = 'none';
        document.getElementById('messageStatus').style.display = 'none';
        currentValidBus = null;
    }, 2000);
}