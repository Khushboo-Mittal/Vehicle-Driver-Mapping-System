# Vehicle-Driver Mapping System

A web application to manage a fleet of vehicles and drivers efficiently. This system is being developed.

---

## Features Implemented

### **Level 0: Basic Driver Creation and Vehicle-Driver Assignment**
- **Driver Creation**
  - Users can create and store driver profiles with attributes like name, phone number, and other necessary details.
  - Drivers are searchable by their name and phone number using the UI.
- **Vehicle-Driver Assignment**
  - Vehicles are pre-populated with stored data.
  - Users can manually assign or unassign drivers to vehicles.
  - A driver can be assigned to only one vehicle at a time.

**Tools & Technologies Used**
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, MongoDB
- **Other:** Axios for API calls

---

## Future Development Plans

### Level 1: Time Scheduling and Assignment Conflict Handling
- Implement a scheduling system to assign drivers to vehicles for specific time periods.
- Add logic to prevent overlapping assignments, ensuring a driver isn't mapped to multiple vehicles simultaneously.

### Level 2: Driver Assignment Requests and Acceptance
- Introduce a driver-specific page where drivers can view assignment requests.
- Allow drivers to accept or reject requests.
- Ensure that once a request is accepted, it becomes invalid for others.

### Level 3: Driver Search and Assignment Based on Location
- Enhance the system to assign drivers based on proximity to a specific location.
- Implement a search feature for finding drivers near a given location during assignment.
- Consider driver availability, location, and scheduling conflicts in the search results.

**Current Limitations:**
- No real authentication system implemented; a dummy login is used.
- Scheduling & Conflict Handling not yet implemented.
- Driver Requests & Location-Based Features pending future development.

**How to Run the Project:**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/vehicle-driver-mapping.git
   ```
2. Navigate to the project directory:
   ```bash
   cd vehicle-driver-mapping
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Access the app at http://localhost:3000.

**Future Vision:**
This project aims to become a fully functional and robust system for fleet management, capable of handling real-world challenges like scheduling, conflict resolution, and location-based driver assignment. The modular approach ensures scalability and maintainability as new features are added.

Feel free to contribute or share feedback!
