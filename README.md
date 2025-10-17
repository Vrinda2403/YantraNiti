<div align="center">
 <img src="https://raw.githubusercontent.com/Vrinda2403/YantraNiti/main/YantraNiti/src/assets/YantraNiti_Logo.png" alt="Yantraniti Logo" width="400"/>
  <br/>
  <h1>
    यंत्रनीति (Yantraniti)
  </h1>
  <p>
    Reviving ancient astronomical wisdom by generating precise, location-based astronomical instruments with modern technology.
  </p>
  <p>
    <em>A project by Team Mind Canvas for the Smart India Hackathon 2025.</em>
  </p>
</div>

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Three.js](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)

</div>

---

## 📖 Table of Contents
* [About The Project](#-about-the-project)
* [Key Features](#-key-features)
* [Technology Stack](#-technology-stack)
* [Project Structure](#-project-structure)
* [Getting Started](#-getting-started)
* [Screenshots](#-screenshots)
* [Roadmap](#-roadmap)
* [Contact](#-contact)

---

## 🚀 About The Project

Ancient Indian astronomical instruments, or *Yantras*, are marvels of scientific ingenuity. However, their designs are static, meticulously calibrated for a single geographical location. This makes their profound principles difficult to study or replicate elsewhere.

**Yantraniti** bridges this historical gap. It's a web platform that uses a powerful astronomy engine to parametrically generate accurate 3D models of these instruments for **any location on Earth**. By simply inputting a latitude and longitude, users can instantly visualize and understand a Yantra's design, making ancient science accessible, interactive, and engaging for a new generation of learners, researchers, and creators.



---

## ✨ Key Features

* **Parametric Generation:** Dynamically calculates and generates yantra models based on user-provided geographical coordinates.
* **Interactive 3D Viewer:** A real-time, high-fidelity 3D rendering of the yantras using Three.js, allowing users to zoom, pan, and rotate.
* **Secure User Authentication:** A complete login/logout system to provide a personalized experience.
* **Personalized Dashboard:** Logged-in users can save and manage their generated yantra designs.
* **"Locked" Content Preview:** Non-logged-in users can see a blurred preview of the "Saved Yantras" section, encouraging sign-ups.
* **Fully Responsive:** A seamless user experience across desktops, tablets, and mobile devices.
* **Multi-language Support:** Easily switch between English and Hindi.

---

## 🛠️ Technology Stack

This project leverages a modern and powerful stack to deliver a fast, interactive, and visually rich experience.

| Category | Technology |
| :--- | :--- |
| **Frontend** | `React`, `Vite`, `Tailwind CSS` |
| **3D Rendering** | `Three.js`, `react-three-fiber` (recommended) |
| **Astronomy Engine** | `Python`, `Astropy`, `Skyfield` |

---

## 📂 Project Structure

The project follows a scalable and maintainable folder structure, designed to keep the codebase organized as new features are added.

```
/src
├── /assets
│   └── /images
│       ├── Samrat.png
│       ├── RamaYantra.png
│       └── JaiPrakash.png
│
├── /components
│   ├── /common
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Modal.jsx 
│   │
│   └── /ui
│       ├── Button.jsx
│       └── FormInput.jsx
│
├── /constants
│   └── yantraData.js
│
├── /hooks
│   └── useIntersectionObserver.js
│
├── /pages
│   ├── HomePage.jsx
│   └── LoginPage.jsx
│
├── /styles
│   └── index.css
│
├── App.jsx
└── main.jsx

```

## ⚙️ Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites
Ensure you have Node.js (version 16 or later) and npm installed.

### Installation
1.  Clone the repository to your local machine.
    ```sh
    git clone https://github.com/Vrinda2403/YantraNiti.git
    ```
2.  Navigate into the project directory.
    ```sh
    cd YantraNiti
    ```
3.  Install the required NPM packages.
    ```sh
    npm install
    ```
4.  Start the Vite development server.
    ```sh
    npm run dev
    ```
5.  Open your browser and navigate to the local URL provided in the terminal (usually `http://localhost:5173`).

---

## 🗺️ Roadmap

- [ ] Implement a full backend with a database to persist user accounts and saved designs.
- [ ] Add more Yantra types to the generator (e.g., Digamsa, Rasivalaya).
- [ ] Enable **CAD file exports** (`.stl`, `.svg`) for 3D printing and fabrication.
- [ ] Develop an interactive heritage map showcasing the locations of historical Jantar Mantars.
- [ ] Integrate a real-time astronomical event tracker based on the user's location.

See the [open issues](https://github.com/Vrinda2403/YantraNiti/issues) for a full list of proposed features (and known issues).

---

## 📧 Contact
**Gmail:** vrinda.2432006@gmail.com

**Team Name:** Mind Canvas

**Project Link:** [https://github.com/your-github-username/YantraNiti](https://github.com/your-github-username/YantraNiti)

**Demo Video Link:** [https://youtu.be/ISO5NUM0tHM?si=19FL3NsuhyzhIPuv](https://youtu.be/ISO5NUM0tHM?si=19FL3NsuhyzhIPuv)
