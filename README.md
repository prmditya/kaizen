<div align="center">
<img src="https://github.com/user-attachments/assets/b16a4922-5fbf-4a97-b7ad-b5b193226519" width=600 align=center/>
</div>

![Screenshot 2025-01-21 133245](https://github.com/user-attachments/assets/01f1e848-7be9-4ee0-9fb9-b888309ae724)

## Overview
Kaizen is my personal project, a journaling and habit tracker website designed to help users improve their daily routines and personal development by incorporating features like habit tracking, daily journaling, and progress analytics. Built with **Next.js**, **Supabase**, and deployed on **Vercel**, Kaizen focuses on performance, scalability, and user-friendly design.

---

## Features

### 1. Habit Tracker
- Allows users to create, manage, and track habits.
- Includes habit streak tracking and notifications.
- Progress visualization with charts.

### 2. Daily Journaling
- Users can write daily entries with a clean and simple interface.
- Options to add tags, images, and moods for journal entries.

### 3. Analytics Dashboard
- Provides insights into user habits and journaling patterns.
- Highlights streaks, completed habits, and emotional trends over time.

### 4. User Profiles
- Users can create accounts, set goals, and manage their personal settings.

---

## Tech Stack

### Frontend
- **Next.js**: For a fast, server-side rendered React framework.
- **TypeScript**: For better type safety and code quality.
- **Shadcn**: Used to develop a polished and responsive UI.

### Backend
- **Supabase**: For authentication, database, and API management.
- **Vercel**: For hosting the web application with great scalability.

---

## Installation

### Prerequisites
- Node.js (v18 or later)
- npm or yarn package manager

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kaizen.git
   ```

2. Navigate to the project directory:
   ```bash
   cd kaizen
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```plaintext
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   NEXT_PUBLIC_API_URL=your_api_url
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and go to `http://localhost:3000`.

---

## Usage

### User Workflow
1. **Sign Up/Login**: Create an account or log in to access your personalized dashboard.
2. **Set Up Habits**: Define habits you want to track and set reminders.
3. **Journal Daily**: Write journal entries to reflect on your day.
4. **Track Progress**: View analytics to monitor your growth.

### Admin Workflow
Admins can manage user data and handle system-level configurations via a dedicated admin panel.

---

## Contributing

### Guidelines
- Fork the repository and create feature branches for your contributions.
- Use meaningful commit messages.
- Ensure the code follows TypeScript conventions and is lint-free.

### Running Tests
1. Run unit tests:
   ```bash
   npm run test
   ```
2. Run end-to-end tests:
   ```bash
   npm run e2e
   ```

---

## License
Kaizen is licensed under the [MIT License](/LICENSE).

