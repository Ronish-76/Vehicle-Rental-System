# Vehicle Rental System (MERN Stack)

A full-stack vehicle rental system built with React, Node.js, Express, and MongoDB, featuring a secure authentication system and dynamic file handling for user profiles.

## Features

### 1. Authentication System
- **User Registration**: Secure sign-up with dynamic profile image upload.
- **User Login**: Token-based authentication using **JWT (JSON Web Tokens)**.
- **Secure Passwords**: Passwords are encrypted using **Bcryptjs** before being stored in the database.
- **Persistence**: User session persists via `localStorage` and `AuthContext`.

### 2. Authorization & Protected Routes
- **Route Guarding**: Private routes for standard users and separate access for administrators.
- **Role-based Access**: Custom middleware to ensure only administrators can access the admin dashboard.
- **Dynamic Navigation**: Navbar updates based on authentication state, showing user-specific info and a logout option.

### 3. File Handling System
- **Profile Image Upload**: Integrated **Multer** for handling multipart/form-data.
- **File Validation**: Enforced restrictions on file type (images only) and size limits (5MB).
- **Static Asset Serving**: Backend serves uploaded files over static routes.

## Technologies Used

### Frontend
- **React**: Modern functional components with hooks.
- **React Router**: For client-side routing and protected routes.
- **Axios**: For API requests to the backend.
- **Lucide-React**: For a modern and clean icon set.
- **Tailwind CSS**: For premium, responsive UI design.

### Backend
- **Node.js & Express**: Scalable and fast server-side architecture.
- **MongoDB & Mongoose**: NoSQL database for flexible user data management.
- **JWT**: Secure token-based session management.
- **Multer**: Robust file upload handler.
- **Bcryptjs**: High-security password hashing.

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) running locally or a remote MongoDB URI.

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd VehicleRentalSystem
```

### Step 2: Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Environment Variables:
   Create a `.env` file in the `backend/` root:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/vehicleRental
   JWT_SECRET=your_super_secret_key
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### Step 3: Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `backend/`: Node.js/Express server code.
  - `models/`: Database schemas.
  - `routes/`: API endpoint definitions.
  - `middleware/`: Auth and Upload logic.
  - `uploads/`: Directory for stored profile and vehicle images.
- `frontend/`: React application code.
  - `src/context/`: Authentication state management.
  - `src/components/`: Reusable UI elements (Navbar, ProtectedRoute).
  - `src/pages/`: Main application views (Login, Signup, Dashboards).

