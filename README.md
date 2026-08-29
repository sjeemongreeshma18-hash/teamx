<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# RideSync 🎯

**Front-end demo:** open `frontend/index.html` in a browser to try the login and search screens.

**Phase 3 foundations:** `cd web && npm install && npm run dev` (routed placeholders, layout, health check).



## Basic Details

### Team Name: techX

### Team Members
- Member 1: [Gania Gibu] - [TocH ]
- Member 2: [Greeshma s Jeemon] - [TocH ]

### Hosted Project Link
https://teamx-ridesync.vercel.app/

### Project Description
Web app for quick bus searches with separate passenger and conductor workflows.

### The Problem statement
Finding appropriate buses quickly can be tedious; the app streamlines route & service filtering.

### The Solution
A simple login with roles, autocomplete stop selection and filtered results for passengers, plus a code lookup for conductors.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Frameworks used: Next.js (Phase 3 foundations in `web/`), static HTML/CSS/JS demo in `frontend/`
- Tools used: VS Code, Git, Vercel

## Features

List the key features of your project:
- Feature 1: Smart Bus Search
Find private buses based on route, departure time, and service type (Local, Limited Stop, etc.).
- Feature 2: Bus Information & Availability
View fare details, seat availability, and booking information before choosing a bus.
- Feature 3: Real-Time Service Updates
Conductors can provide instant updates about delays, breakdowns, cancellations, or route changes using a unique bus code
- Feature 4: Personalized Passenger Notifications
Passengers receive relevant alerts and updates based on their selected route and travel time.

---

## Implementation

### For Software:

#### Installation

Static passenger/conductor demo (no install):

```bash
# Open frontend/index.html in a browser
```

Phase 3 Next.js foundations:

```bash
cd web
npm install
copy .env.example .env.local
```

On macOS/Linux use `cp .env.example .env.local` instead of `copy`.

#### Run

```bash
cd web
npm run dev
```

Then open http://localhost:3000 for placeholder routes (`/`, `/passenger`, `/conductor`, `/health`).

**Vercel:** keep the existing project pointed at `frontend/` so https://teamx-ridesync.vercel.app/ stays the working demo. Create a second Vercel project for this repo with **Root Directory** `web` so pull requests get Next.js Preview deployments. Add the keys from `web/.env.example` to that project for Production and Preview.

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*


## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*


---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** GitHub Copilot, v0.dev, Cursor, Claude

**Purpose:** 
- To Simplify Private Bus Travel:
Makes it easier for passengers to find suitable buses without relying on multiple sources.
- To Provide Reliable Travel Information:
Gives passengers access to accurate bus schedules, fares, and availability details.
- To Improve Communication:
Bridges the communication gap between passengers and bus operators through real-time updates.
- To Enhance Travel Planning:
Helps users make better travel decisions and avoid uncertainty caused by delays or service disruptions.       

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"


**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions


---

## Team Contributions

- [Ganiya Gibu]: Frontend development, API integration,testing
- [GREESHMA S JEEMON]:Backend development, Database design, ui/ux, documentation

---



Made with ❤️ at TinkerHub
