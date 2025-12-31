# 📚 Tutor UAM

A web platform that connects students and tutors at Universidad Autónoma Metropolitana (UAM), enabling academic tutoring sessions scheduling and management.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.3.4-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🔐 **User Authentication** - Secure login and registration for students and tutors
- 🔍 **Tutor Search** - Find tutors by name and subject with pagination
- 📅 **Session Scheduling** - Schedule tutoring sessions with available tutors
- 📋 **Tutorship Management** - View and manage your tutoring sessions
- ⭐ **Feedback System** - Rate and review completed tutoring sessions
- 👤 **Profile Management** - Edit personal profile information
- 🎓 **Subject Registration** - Tutors can register subjects and availability

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Data Fetching:** [React Query](https://tanstack.com/query/v3)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/) + [Font Awesome](https://fontawesome.com/)
- **Testing:** [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)

## 📁 Project Structure

```
src/
├── api/                    # API service functions
│   ├── availabilityTutors.ts
│   ├── getTutors.ts
│   └── getTutorships.ts
├── assets/                 # Static assets (icons, logos)
├── components/             # React components
│   ├── CreateAccount/      # User registration
│   ├── EditProfile/        # Profile editing
│   ├── FeedbackSession/    # Session feedback/rating
│   ├── JoinCommunity/      # Community registration
│   ├── Login/              # Authentication
│   ├── MyTutorships/       # Tutorship management
│   ├── RegistrateSubjects/ # Subject registration for tutors
│   ├── Schedule/           # Session scheduling
│   ├── TutorSearch/        # Tutor search and filtering
│   └── ui/                 # Reusable UI components (shadcn/ui)
├── data/                   # Static data
├── lib/                    # Utility functions
├── types/                  # TypeScript type definitions
├── App.tsx                 # Main application component
└── main.tsx                # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/unicomet/tutor-uam.git
   cd tutor-uam
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:5173](http://localhost:5173)

## 📜 Available Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint for code quality checks       |
| `npm run test`    | Run tests with Vitest                    |
| `npm run deploy`  | Deploy to GitHub Pages                   |

## 🔧 Configuration

### Environment Variables

The application connects to a backend API. Make sure the backend server is running on `http://localhost:8080` or update the API endpoints accordingly.

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

The project uses:

- **Vitest** as the test runner
- **Testing Library** for component testing
- **jsdom** for DOM simulation

## Notes

- This project is a frontend application and requires a backend API to function correctly.
- For now displayed data about subjects is hardcoded because we need to web scrap a site of UAM for getting the actual subjects list.
