# App Made with Love ❤️.

## Project Description

Rick & Morty Explorer is a mobile application built with React Native, Expo, and TypeScript that allows users to browse and explore characters from the Rick and Morty universe. The app features a smooth animated carousel, dynamic character detail pages, favorite management with persistent storage (Work in progress), and a clean, responsive UI. Users can mark characters as favorites, view detailed information, and enjoy a rich animated experience with integrated skeleton loading states and animations powered by Reanimated.

## Requirements

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) >= 9.x
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- [EAS CLI](https://docs.expo.dev/eas/) (`npm install -g eas-cli`)
- Android/iOS device or simulator/emulator
- Expo Go for development mode

## 🚀 Run the Project

⚠️ **Important**
Set up your API keys in `.env` file in root of project.

Example:
`EXPO_PUBLIC_API_URL=https://rickandmortyapi.com/api`

You can run the app on:

- Physical device: Scan the QR code using the Expo Go app (available on the App Store and Google Play).
- Emulator/Simulator

```bash
npm install
npx expo start
```

## 📱 Run on Android (APK)

Download the APK following the next link:
➡️ [Download APK](https://expo.dev/accounts/celcius/projects/AntPack/builds/3ba69d42-a74e-437f-8418-a769a15f7db9)

Or, if you want to generate a sharable APK (without publishing to the Play Store), run the following command:

```bash
eas build --platform android --profile preview
```

## 🍏 Run on iOS (Simulator or Device)

⚠️ **Important**: To install the app on iOS devices without Expo Go, an Apple Developer account is required due to Apple's restrictions.

✨ **For Preview**: You can easily test the app using **Expo Go** on your iOS device and running the project.

To generate an iOS build (Apple Developer required):

```bash
eas build --platform ios --profile preview
```

## Some Features

- Developed with React Native and TypeScript.
- Applies the Facade Pattern to encapsulate and organize component logic.
- Optimized for high performance with virtualized lists, infinite scroll (WIP), and data caching using TanStack Query.
- Follows semantic commit conventions for better version control and collaboration.
- Utilizes the Render Props Pattern to keep the animated FlatList component decoupled and extensible.
- Leverages React Native Reanimated for smooth and performant animations, including scroll and favorite button effects.
- Employs the Adapter Pattern to decouple external DTOs from internal entities, enhancing modularity and reusability.
- Smooth animation when the screen changes.
- Context for state managment, passing the data trought the screens.

## 📂 Project Structure

The project’s folder structure follows a modular and well-organized approach, making the codebase easier to develop, maintain, and scale.

Its architecture is inspired by three main paradigms:

- Clean Architecture
- Feature-Based Architecture
- Screaming Architecture

While the project is not a strict implementation of Clean Architecture, it embraces its most important principle: separation of concerns. Concepts like adapters are applied to decouple external data structures (DTOs) from the application's internal entities, ensuring better maintainability and flexibility.

The logic was abstracted into custom hooks, serving as facades and entry points for component behavior. Additionally, the render prop pattern was implemented to keep the animated list component agnostic of its content. This approach enhances extensibility and promotes a clean separation between logic and presentation.

## Commit Message Rules

Use the following format for your commit messages:

- **feat:** Add new login screen
- **fix:** Resolve crash issue on startup
- **docs:** Update README with new instructions
- **style:** Format code according to eslint rules
- **refactor:** Simplify login screen component
- **test:** Add unit tests for authentication
- **chore:** Update dependencies
- **ci:** Add CI/CD pipeline with GitHub Actions
- **revert:** Revert previous commit
