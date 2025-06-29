<div align="center">
  <br />
    <a href="https://github.com/mohamedsolaiman/tastygo" target="_blank">
      <img src="assets/readme/hero.png" alt="TastyGo Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="React Native" />
    <img src="https://img.shields.io/badge/-Expo-black?style=for-the-badge&logoColor=white&logo=expo&color=000020" alt="Expo" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=F02E65" alt="Appwrite" />
    <img src="https://img.shields.io/badge/-Tailwind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="Tailwind" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
  </div>

  <h3 align="center">TastyGo — Food Delivery App</h3>

  <div align="center">
    A modern, full-stack food delivery mobile application built with React Native & Expo. Order your favorite meals with just a few taps!
  </div>
</div>

## 📋 Table of Contents

1. 🍔 [About](#about)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Getting Started](#getting-started)
5. 📱 [Screenshots](#screenshots)
6. 🏗️ [Project Structure](#project-structure)
7. 📄 [License](#license)

## <a name="about">🍔 About</a>

**TastyGo** is a feature-rich food delivery application that connects hungry users with their favorite local restaurants. Built by Mohamed Solaiman, this app delivers a seamless ordering experience with real-time tracking, personalized recommendations, and a beautiful, intuitive interface.

Whether you're craving a gourmet burger, a fresh salad, or a loaded burrito, TastyGo brings the best restaurants right to your fingertips.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **[React Native](https://reactnative.dev/)** — Cross-platform mobile UI framework with declarative components and deep native API support.

- **[Expo](https://expo.dev/)** — Open-source platform for building universal native apps with file-based routing (Expo Router), fast refresh, and over-the-air updates.

- **[Appwrite](https://appwrite.io/)** — Open-source BaaS providing secure authentication, databases, file storage, real-time messaging, and serverless functions.

- **[NativeWind](https://www.nativewind.dev/)** — Tailwind CSS for React Native — style mobile components using utility-first classes.

- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework for rapid, consistent UI design.

- **[TypeScript](https://www.typescriptlang.org/)** — Statically-typed superset of JavaScript with annotations, interfaces, and generics for robust code.

- **[Zustand](https://github.com/pmndrs/zustand)** — Minimal, hook-based state management with zero boilerplate and excellent performance.

- **[Sentry](https://sentry.io/)** — Error tracking and performance monitoring for real-time issue detection and app stability.

## <a name="features">🔋 Features</a>

👉 **Authentication** — Secure email/password sign-in and sign-up with Appwrite backend.

👉 **Home Page** — Personalized landing page showcasing current deals and offers with TastyGo branding.

👉 **Search & Filter** — Explore the full menu with category filters and keyword search to find exactly what you crave.

👉 **Favorites** — Save your favorite restaurants and dishes for quick access anytime.

👉 **Orders** — Track active orders in real-time and view past order history with one-tap reorder.

👉 **Restaurant Detail** — Browse individual restaurant menus with item details, calories, and add-to-cart functionality.

👉 **Cart** — Review selected items, customize quantities, and see the total price before checkout.

👉 **Profile** — Manage your account settings and personal preferences.

👉 **Appwrite Integration** — Full backend with database, authentication, and file storage.

## <a name="getting-started">🤸 Getting Started</a>

Follow these steps to set up TastyGo locally.

**Prerequisites**

- **[Git](https://git-scm.com/)**
- **[Node.js](https://nodejs.org/en)**
- **[npm](https://www.npmjs.com/)**

**Clone the Repository**

```bash
git clone https://github.com/mohamedsolaiman/tastygo.git
cd tastygo
```

**Install Dependencies**

```bash
npm install
```

**Set Up Environment Variables**

Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://your-appwrite-endpoint/v1
```

Replace the placeholder values with your Appwrite credentials from the [Appwrite Console](https://appwrite.io/).

**Run the App**

```bash
npx expo start
```

Open the Expo Go app on your phone and scan the QR code to launch TastyGo.

## <a name="screenshots">📱 Screenshots</a>

| Home | Search | Favorites |
|------|--------|-----------|
| Offers & deals | Filter & search | Saved items |

| Orders | Restaurant | Cart |
|--------|-----------|------|
| Track & reorder | Browse menu | Checkout |

## <a name="project-structure">🏗️ Project Structure</a>

```
tastygo/
├── app/
│   ├── (auth)/          # Authentication screens
│   ├── (tabs)/          # Tab navigation screens
│   │   ├── index.tsx    # Home
│   │   ├── search.tsx   # Search & filter
│   │   ├── favorites.tsx # Saved favorites
│   │   ├── orders.tsx   # Order tracking & history
│   │   ├── cart.tsx     # Shopping cart
│   │   └── profile.tsx  # User profile
│   ├── restaurant/      # Restaurant detail pages
│   └── _layout.tsx      # Root layout
├── components/          # Reusable UI components
├── constants/           # App constants & images
├── lib/                 # Appwrite config, data, hooks
├── store/               # Zustand state stores
└── assets/              # Fonts, icons, images
```

## <a name="license">📄 License</a>

This project is created by **Mohamed Solaiman** and is available for personal and educational use.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/mohamedsolaiman">Mohamed Solaiman</a>
</p>
