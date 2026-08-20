// Bus Stops Data
const busStops = [
    'petta', 'thykoodam', 'vyttilla hub', 'elamkulam',
    'kadavanthra', 'thirupunithura', 'vadakkekotta',
    'puthotta', 'nadakkav', 'puthiyakav'
];

const westEast = ['petta', 'thykoodam', 'vyttilla hub', 'elamkulam', 'kadavanthra'];
const eastWest = [...westEast].reverse();
const southLine = ['kadavanthra', 'thirupunithura', 'vadakkekotta'];
const northLine = ['puthotta', 'nadakkav', 'puthiyakav', 'vyttilla hub'];

// Sample Bus Data — each bus lists stops in travel order
const busesDatabase = [
    {
        id: 1,
        name: 'Parvathy',
        from: 'petta',
        to: 'thykoodam',
        route: ['petta', 'thykoodam'],
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
        route: ['petta', 'thykoodam'],
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
        route: ['thykoodam', 'vyttilla hub', 'elamkulam'],
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
        route: ['thykoodam', 'vyttilla hub', 'elamkulam', 'kadavanthra'],
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
        route: ['vyttilla hub', 'elamkulam'],
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
        route: ['thykoodam', 'elamkulam', 'kadavanthra'],
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
        route: ['elamkulam', 'vyttilla hub', 'thykoodam', 'petta'],
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
        route: ['kadavanthra', 'elamkulam', 'vyttilla hub'],
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
        route: ['petta', 'thykoodam', 'vyttilla hub', 'elamkulam'],
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
        route: ['vyttilla hub', 'elamkulam', 'kadavanthra'],
        departure: '17:00',
        arrival: '17:50',
        type: 'limited',
        seats: 33,
        price: 36
    },
    {
        id: 11,
        name: 'Metro Link',
        from: 'petta',
        to: 'kadavanthra',
        route: westEast,
        departure: '07:30',
        arrival: '08:40',
        type: 'limited',
        seats: 22,
        price: 42
    },
    {
        id: 12,
        name: 'City Rider',
        from: 'petta',
        to: 'kadavanthra',
        route: westEast,
        departure: '09:15',
        arrival: '10:35',
        type: 'local',
        seats: 44,
        price: 30
    },
    {
        id: 13,
        name: 'Evening Star',
        from: 'petta',
        to: 'kadavanthra',
        route: westEast,
        departure: '18:10',
        arrival: '19:20',
        type: 'limited',
        seats: 18,
        price: 45
    },
    {
        id: 14,
        name: 'Return Express',
        from: 'kadavanthra',
        to: 'petta',
        route: eastWest,
        departure: '08:20',
        arrival: '09:30',
        type: 'limited',
        seats: 26,
        price: 42
    },
    {
        id: 15,
        name: 'Hub Shuttle',
        from: 'kadavanthra',
        to: 'petta',
        route: eastWest,
        departure: '16:30',
        arrival: '17:50',
        type: 'local',
        seats: 40,
        price: 28
    },
    {
        id: 16,
        name: 'Temple Road',
        from: 'kadavanthra',
        to: 'vadakkekotta',
        route: southLine,
        departure: '10:00',
        arrival: '10:50',
        type: 'local',
        seats: 36,
        price: 24
    },
    {
        id: 17,
        name: 'South Limited',
        from: 'kadavanthra',
        to: 'vadakkekotta',
        route: southLine,
        departure: '17:20',
        arrival: '18:00',
        type: 'limited',
        seats: 20,
        price: 34
    },
    {
        id: 18,
        name: 'North Line',
        from: 'puthotta',
        to: 'vyttilla hub',
        route: northLine,
        departure: '08:40',
        arrival: '09:25',
        type: 'local',
        seats: 38,
        price: 22
    },
    {
        id: 19,
        name: 'Market Special',
        from: 'puthotta',
        to: 'vyttilla hub',
        route: northLine,
        departure: '13:20',
        arrival: '14:00',
        type: 'limited',
        seats: 16,
        price: 30
    }
];

const conductorCodes = {
    'Pav@12': 'Parvathy',
    'Sam@34': 'Sreeelakshmi',
    'Kev@24': 'Kailas',
    'Amy@13': 'Amritha',
    'Gson@45': 'Gsons',
    'Pon@56': 'Ponmankal',
    'Alen@78': 'Alenchery',
    'Punch@90': 'Punchiri',
    'Pull@67': 'Pullathil',
    'New@89': 'New Fancy'
};

const conductorNames = {
    'Pav@12': 'Pavithran',
    'Sam@34': 'Sreelakshmi',
    'Kev@24': 'Kailas',
    'Amy@13': 'Amritha',
    'Gson@45': 'Gson',
    'Pon@56': 'Pon',
    'Alen@78': 'Alenchery',
    'Punch@90': 'Punchiri',
    'Pull@67': 'Pullathil',
    'New@89': 'New Fancy'
};

const MSG_KEY = 'ridesyncConductorMessages';
const SEAT_KEY = 'ridesyncSeats';

let conductorMessages = loadConductorMessages();
let currentValidBus = null;
let currentConductorName = null;
let lastSearch = null;
let activeSuggestionIndex = -1;

function loadConductorMessages() {
    try {
        return JSON.parse(localStorage.getItem(MSG_KEY) || '{}');
    } catch (e) {
        return {};
    }
}

function saveConductorMessages() {
    localStorage.setItem(MSG_KEY, JSON.stringify(conductorMessages));
}

function getAvailableSeats(bus) {
    try {
        const stored = JSON.parse(localStorage.getItem(SEAT_KEY) || '{}');
        return stored[bus.id] ?? bus.seats;
    } catch (e) {
        return bus.seats;
    }
}

function setAvailableSeats(busId, seats) {
    const stored = JSON.parse(localStorage.getItem(SEAT_KEY) || '{}');
    stored[busId] = seats;
    localStorage.setItem(SEAT_KEY, JSON.stringify(stored));
}

function formatStopName(stop) {
    return String(stop)
        .split(' ')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
}

function normalizeStop(value) {
    return value.trim().toLowerCase();
}

function resolveStop(value) {
    const normalized = normalizeStop(value);
    return busStops.find(stop => stop === normalized) || null;
}

function timeToMinutes(value) {
    if (!value) return null;
    const [hours, minutes] = value.split(':').map(Number);
    if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;
    return hours * 60 + minutes;
}

function minutesToTime(total) {
    const clamped = Math.max(0, Math.min(23 * 60 + 59, Math.round(total)));
    const hours = String(Math.floor(clamped / 60)).padStart(2, '0');
    const minutes = String(clamped % 60).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function nowTimeValue() {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}

function durationMinutes(start, end) {
    return Math.max(0, timeToMinutes(end) - timeToMinutes(start));
}

function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins} min`;
    if (mins === 0) return `${hours} hr`;
    return `${hours} hr ${mins} min`;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function busRoute(bus) {
    return bus.route && bus.route.length ? bus.route : [bus.from, bus.to];
}

function interpolateTime(start, end, ratio) {
    const startMin = timeToMinutes(start);
    const endMin = timeToMinutes(end);
    return minutesToTime(startMin + (endMin - startMin) * ratio);
}

function tripForSearch(bus, from, to) {
    const route = busRoute(bus);
    const fromIndex = route.indexOf(from);
    const toIndex = route.indexOf(to);
    if (fromIndex === -1 || toIndex === -1 || fromIndex >= toIndex) return null;

    const lastIndex = route.length - 1;
    const boardTime = interpolateTime(bus.departure, bus.arrival, fromIndex / lastIndex);
    const alightTime = interpolateTime(bus.departure, bus.arrival, toIndex / lastIndex);
    const via = route.slice(fromIndex + 1, toIndex).map(formatStopName);
    const seats = getAvailableSeats(bus);

    return {
        bus,
        from,
        to,
        boardTime,
        alightTime,
        duration: durationMinutes(boardTime, alightTime),
        via,
        seats,
        fare: bus.price
    };
}

function openConductorDashboard() {
    window.location.href = 'conductor.html';
}

function selectRole(role) {
    const loginScreen = document.getElementById('loginScreen');
    const passengerScreen = document.getElementById('passengerScreen');

    loginScreen.classList.remove('active');
    passengerScreen.classList.remove('active');

    if (role === 'passenger') {
        passengerScreen.classList.add('active');
    }
}

function logout() {
    const loginScreen = document.getElementById('loginScreen');
    const passengerScreen = document.getElementById('passengerScreen');

    passengerScreen.classList.remove('active');
    loginScreen.classList.add('active');

    const fromInput = document.getElementById('fromInput');
    const toInput = document.getElementById('toInput');
    const timeFrom = document.getElementById('timeFrom');
    const timeTo = document.getElementById('timeTo');
    const busServiceSelect = document.getElementById('busServiceSelect');
    const busResults = document.getElementById('busResults');
    const noResults = document.getElementById('noResults');
    const busNameDisplay = document.getElementById('busNameDisplay');
    const busCodeInput = document.getElementById('busCodeInput');
    const conductorMessageInput = document.getElementById('conductorMessageInput');
    const messageGroup = document.getElementById('messageGroup');
    const messageStatus = document.getElementById('messageStatus');

    if (fromInput) fromInput.value = '';
    if (toInput) toInput.value = '';
    if (timeFrom) timeFrom.value = '';
    if (timeTo) timeTo.value = '';
    if (busServiceSelect) busServiceSelect.value = 'all';
    if (busResults) busResults.style.display = 'none';
    if (noResults) noResults.style.display = 'none';
    if (busNameDisplay) busNameDisplay.textContent = '';
    if (busCodeInput) busCodeInput.value = '';
    if (conductorMessageInput) conductorMessageInput.value = '';
    if (messageGroup) messageGroup.style.display = 'none';
    if (messageStatus) messageStatus.style.display = 'none';
    currentValidBus = null;
    lastSearch = null;
    setActivePreset('all');
    hideSearchError();

    const fromSuggestions = document.getElementById('fromSuggestions');
    const toSuggestions = document.getElementById('toSuggestions');
    if (fromSuggestions) fromSuggestions.classList.remove('active');
    if (toSuggestions) toSuggestions.classList.remove('active');
}

function showSearchError(message) {
    const error = document.getElementById('searchError');
    if (!error) {
        alert(message);
        return;
    }
    error.hidden = false;
    error.textContent = message;
}

function hideSearchError() {
    const error = document.getElementById('searchError');
    if (error) {
        error.hidden = true;
        error.textContent = '';
    }
}

function setActivePreset(preset) {
    document.querySelectorAll('.preset-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.preset === preset);
    });
}

function applyTimePreset(preset) {
    const timeFrom = document.getElementById('timeFrom');
    const timeTo = document.getElementById('timeTo');
    if (!timeFrom || !timeTo) return;

    setActivePreset(preset);

    if (preset === 'all') {
        timeFrom.value = '';
        timeTo.value = '';
        return;
    }
    if (preset === 'now') {
        timeFrom.value = nowTimeValue();
        timeTo.value = '23:59';
        return;
    }
    if (preset === 'morning') {
        timeFrom.value = '06:00';
        timeTo.value = '11:59';
        return;
    }
    if (preset === 'afternoon') {
        timeFrom.value = '12:00';
        timeTo.value = '16:59';
        return;
    }
    if (preset === 'evening') {
        timeFrom.value = '17:00';
        timeTo.value = '22:00';
    }
}

function swapStops() {
    const fromInput = document.getElementById('fromInput');
    const toInput = document.getElementById('toInput');
    if (!fromInput || !toInput) return;
    const previous = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = previous;
}

function filterSuggestionStops(value) {
    const query = value.trim().toLowerCase();
    if (!query) return busStops.slice();
    return busStops.filter(stop => stop.includes(query));
}

function renderSuggestions(field, container, value) {
    const filtered = filterSuggestionStops(value);
    container.innerHTML = '';
    activeSuggestionIndex = -1;

    if (filtered.length === 0) {
        container.classList.remove('active');
        return;
    }

    filtered.forEach((stop, index) => {
        const li = document.createElement('li');
        li.textContent = formatStopName(stop);
        li.dataset.stop = stop;
        li.setAttribute('role', 'option');
        li.onmousedown = (event) => {
            event.preventDefault();
            selectSuggestion(field, stop);
        };
        if (index === 0 && value.trim()) {
            li.classList.add('highlighted');
            activeSuggestionIndex = 0;
        }
        container.appendChild(li);
    });

    container.classList.add('active');
}

function selectSuggestion(field, stop) {
    const input = document.getElementById(field === 'from' ? 'fromInput' : 'toInput');
    const container = document.getElementById(field === 'from' ? 'fromSuggestions' : 'toSuggestions');
    if (input) input.value = formatStopName(stop);
    if (container) container.classList.remove('active');
    activeSuggestionIndex = -1;
}

function moveSuggestionHighlight(container, direction) {
    const items = Array.from(container.querySelectorAll('li'));
    if (!items.length) return;

    items.forEach(item => item.classList.remove('highlighted'));
    activeSuggestionIndex = (activeSuggestionIndex + direction + items.length) % items.length;
    items[activeSuggestionIndex].classList.add('highlighted');
    items[activeSuggestionIndex].scrollIntoView({ block: 'nearest' });
}

function handleSuggestionKeydown(event, field) {
    const container = document.getElementById(field === 'from' ? 'fromSuggestions' : 'toSuggestions');
    if (!container || !container.classList.contains('active')) {
        if (event.key === 'ArrowDown') {
            renderSuggestions(field, container, event.target.value);
            event.preventDefault();
        }
        return;
    }

    if (event.key === 'ArrowDown') {
        moveSuggestionHighlight(container, 1);
        event.preventDefault();
    } else if (event.key === 'ArrowUp') {
        moveSuggestionHighlight(container, -1);
        event.preventDefault();
    } else if (event.key === 'Enter') {
        const highlighted = container.querySelector('li.highlighted');
        if (highlighted) {
            selectSuggestion(field, highlighted.dataset.stop);
            event.preventDefault();
        }
    } else if (event.key === 'Escape') {
        container.classList.remove('active');
    }
}

function handleSearchSubmit(event) {
    event.preventDefault();
    performSearch();
    return false;
}

function performSearch() {
    conductorMessages = loadConductorMessages();

    const fromInput = document.getElementById('fromInput');
    const toInput = document.getElementById('toInput');
    const timeFrom = document.getElementById('timeFrom').value;
    const timeTo = document.getElementById('timeTo').value;
    const busService = document.getElementById('busServiceSelect').value || 'all';

    const from = resolveStop(fromInput.value);
    const to = resolveStop(toInput.value);

    hideSearchError();

    if (!fromInput.value.trim() || !toInput.value.trim()) {
        showSearchError('Enter both a starting stop and a destination.');
        return;
    }

    if (!from) {
        showSearchError('Choose a valid From stop from the suggestions.');
        return;
    }

    if (!to) {
        showSearchError('Choose a valid To stop from the suggestions.');
        return;
    }

    if (from === to) {
        showSearchError('From and To cannot be the same stop.');
        return;
    }

    if ((timeFrom && !timeTo) || (!timeFrom && timeTo)) {
        showSearchError('Set both ends of the departure window, or leave both empty.');
        return;
    }

    if (timeFrom && timeTo && timeToMinutes(timeFrom) > timeToMinutes(timeTo)) {
        showSearchError('The start of the time window must be before the end.');
        return;
    }

    fromInput.value = formatStopName(from);
    toInput.value = formatStopName(to);

    const trips = busesDatabase
        .map(bus => tripForSearch(bus, from, to))
        .filter(Boolean)
        .filter(trip => {
            const matchesService = busService === 'all' || trip.bus.type === busService;
            if (!matchesService) return false;
            if (!timeFrom && !timeTo) return true;
            const board = timeToMinutes(trip.boardTime);
            return board >= timeToMinutes(timeFrom) && board <= timeToMinutes(timeTo);
        });

    lastSearch = { from, to, trips, busService, timeFrom, timeTo };
    renderSearchResults();
}

function sortTrips(trips, sortBy) {
    const sorted = trips.slice();
    sorted.sort((a, b) => {
        if (sortBy === 'duration') return a.duration - b.duration || timeToMinutes(a.boardTime) - timeToMinutes(b.boardTime);
        if (sortBy === 'price') return a.fare - b.fare || timeToMinutes(a.boardTime) - timeToMinutes(b.boardTime);
        if (sortBy === 'seats') return b.seats - a.seats || timeToMinutes(a.boardTime) - timeToMinutes(b.boardTime);
        return timeToMinutes(a.boardTime) - timeToMinutes(b.boardTime);
    });
    return sorted;
}

function renderSearchResults() {
    if (!lastSearch) return;

    const busResults = document.getElementById('busResults');
    const noResults = document.getElementById('noResults');
    const busList = document.getElementById('busList');
    const summary = document.getElementById('resultsSummary');
    const noResultsText = document.getElementById('noResultsText');
    const sortSelect = document.getElementById('sortSelect');
    const sortBy = sortSelect ? sortSelect.value : 'departure';
    const trips = sortTrips(lastSearch.trips, sortBy);

    if (trips.length === 0) {
        busResults.style.display = 'none';
        noResults.style.display = 'block';
        if (noResultsText) {
            noResultsText.textContent = `No buses from ${formatStopName(lastSearch.from)} to ${formatStopName(lastSearch.to)} match these filters. Try All day or All Buses.`;
        }
        return;
    }

    busList.innerHTML = '';
    trips.forEach(trip => busList.appendChild(createBusCard(trip)));
    busResults.style.display = 'block';
    noResults.style.display = 'none';

    if (summary) {
        const timeLabel = lastSearch.timeFrom && lastSearch.timeTo
            ? ` departing ${lastSearch.timeFrom}–${lastSearch.timeTo}`
            : '';
        summary.textContent = `${trips.length} bus${trips.length === 1 ? '' : 'es'} from ${formatStopName(lastSearch.from)} to ${formatStopName(lastSearch.to)}${timeLabel}.`;
    }
}

function createBusCard(trip) {
    const { bus } = trip;
    const card = document.createElement('div');
    card.className = 'bus-card';

    const serviceType = bus.type === 'local' ? 'Local' : 'Limited stop';
    const message = conductorMessages[bus.name];
    const viaText = trip.via.length ? trip.via.join(' · ') : 'Direct';
    const seatsClass = trip.seats === 0 ? 'seats-none' : trip.seats <= 8 ? 'seats-low' : 'seats-ok';
    const seatsLabel = trip.seats === 0 ? 'Sold out' : trip.seats <= 8 ? `${trip.seats} seats left` : `${trip.seats} seats`;
    const bookDisabled = trip.seats === 0 ? 'disabled' : '';

    card.innerHTML = `
        <div class="bus-card-main">
            <div class="bus-info">
                <div class="bus-info-title">BUS</div>
                <div class="bus-info-value">${bus.name}</div>
                <span class="service-badge ${bus.type}">${serviceType}</span>
            </div>
            <div class="bus-info">
                <div class="bus-info-title">BOARD</div>
                <div class="bus-info-value">${trip.boardTime}</div>
                <div class="bus-info-sub">${formatStopName(trip.from)}</div>
            </div>
            <div class="bus-info">
                <div class="bus-info-title">DURATION</div>
                <div class="bus-info-value">${formatDuration(trip.duration)}</div>
                <div class="bus-info-sub">${viaText}</div>
            </div>
            <div class="bus-info">
                <div class="bus-info-title">ALIGHT</div>
                <div class="bus-info-value">${trip.alightTime}</div>
                <div class="bus-info-sub">${formatStopName(trip.to)}</div>
            </div>
            <div class="bus-info">
                <div class="bus-info-title">FARE</div>
                <div class="bus-info-value">₹${trip.fare}</div>
                <div class="bus-info-sub ${seatsClass}">${seatsLabel}</div>
            </div>
        </div>
        <div class="bus-action">
            ${message ? `
            <div class="bus-action-message">
                <div class="bus-info-title">CONDUCTOR MESSAGE</div>
                <div class="bus-info-value">${escapeHtml(message)}</div>
            </div>
            ` : ''}
            <button class="book-btn" ${bookDisabled} onclick="bookBus(${bus.id})">
                ${trip.seats === 0 ? 'Unavailable' : 'Book Seat'}
            </button>
        </div>
    `;

    return card;
}

function bookBus(busId) {
    const bus = busesDatabase.find(b => b.id === busId);
    if (!bus) return;

    const seats = getAvailableSeats(bus);
    if (seats <= 0) {
        showSearchError(`${bus.name} is sold out.`);
        return;
    }

    setAvailableSeats(busId, seats - 1);
    hideSearchError();

    if (lastSearch) {
        lastSearch.trips = lastSearch.trips.map(trip => {
            if (trip.bus.id !== busId) return trip;
            return { ...trip, seats: seats - 1 };
        });
        renderSearchResults();
    }

    const notice = document.createElement('div');
    notice.className = 'booking-toast';
    notice.textContent = `Seat reserved on ${bus.name}. Remaining seats: ${seats - 1}.`;
    document.body.appendChild(notice);
    setTimeout(() => notice.remove(), 2800);
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('.autocomplete-wrapper')) {
        document.getElementById('fromSuggestions')?.classList.remove('active');
        document.getElementById('toSuggestions')?.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const fromInput = document.getElementById('fromInput');
    const toInput = document.getElementById('toInput');
    const fromSuggestions = document.getElementById('fromSuggestions');
    const toSuggestions = document.getElementById('toSuggestions');

    fromInput?.addEventListener('input', function() {
        renderSuggestions('from', fromSuggestions, this.value);
    });
    toInput?.addEventListener('input', function() {
        renderSuggestions('to', toSuggestions, this.value);
    });
    fromInput?.addEventListener('focus', function() {
        renderSuggestions('from', fromSuggestions, this.value);
    });
    toInput?.addEventListener('focus', function() {
        renderSuggestions('to', toSuggestions, this.value);
    });
    fromInput?.addEventListener('keydown', function(event) {
        handleSuggestionKeydown(event, 'from');
    });
    toInput?.addEventListener('keydown', function(event) {
        handleSuggestionKeydown(event, 'to');
    });

    document.getElementById('swapStopsBtn')?.addEventListener('click', swapStops);
    document.getElementById('sortSelect')?.addEventListener('change', renderSearchResults);
    document.getElementById('timeFrom')?.addEventListener('change', () => setActivePreset(''));
    document.getElementById('timeTo')?.addEventListener('change', () => setActivePreset(''));

    document.getElementById('timePresets')?.addEventListener('click', function(event) {
        const chip = event.target.closest('.preset-chip');
        if (!chip) return;
        applyTimePreset(chip.dataset.preset);
    });
});

function submitConductorName() {
    const name = document.getElementById('conductorNameInput').value.trim();
    if (name === '') {
        alert('Please enter your name');
        return;
    }

    currentConductorName = name;
    document.getElementById('displayConductorName').textContent = name;
    document.getElementById('conductorLoginScreen').classList.remove('active');
    document.getElementById('conductorScreen').classList.add('active');
    document.getElementById('conductorNameInput').value = '';
}

function lookupBusCode() {
    const code = document.getElementById('busCodeInput').value.trim();
    if (code === '') {
        alert('Please enter a code');
        return;
    }
    const name = conductorCodes[code];
    if (name) {
        currentValidBus = name;
        document.getElementById('conductorNameDisplay').textContent = conductorNames[code] || 'Unknown conductor';
        document.getElementById('messageGroup').style.display = 'block';
        document.getElementById('conductorMessageInput').value = '';
        document.getElementById('messageStatus').style.display = 'none';
    } else {
        alert('Invalid code. Please try again.');
        document.getElementById('conductorNameDisplay').textContent = 'Invalid code';
        document.getElementById('messageGroup').style.display = 'none';
        currentValidBus = null;
    }
}

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

    conductorMessages = loadConductorMessages();
    conductorMessages[busName] = message;
    saveConductorMessages();

    const statusDiv = document.getElementById('messageStatus');
    statusDiv.textContent = `Message sent for ${busName}`;
    statusDiv.style.display = 'block';
    statusDiv.className = 'message-status success';

    setTimeout(() => {
        document.getElementById('busCodeInput').value = '';
        document.getElementById('conductorMessageInput').value = '';
        document.getElementById('messageGroup').style.display = 'none';
        document.getElementById('messageStatus').style.display = 'none';
        currentValidBus = null;
    }, 2000);
}
