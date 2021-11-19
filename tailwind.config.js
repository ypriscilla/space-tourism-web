module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        homeDesktop: "url('../assets/home/background-home-desktop.jpg')",
        homeMobile: "url('../assets/home/background-home-mobile.jpg')",
        homeTablet: "url('../assets/home/background-home-tablet.jpg')",
        crewDesktop: "url('../assets/crew/background-crew-desktop.jpg')",
        crewMobile: "url('../assets/crew/background-crew-mobile.jpg')",
        crewTablet: "url('../assets/crew/background-crew-tablet.jpg')",
        destinationDesktop:
          "url('../assets/destination/background-destination-desktop.jpg')",
        destinationMobile:
          "url('../assets/destination/background-destination-mobile.jpg')",
        destinationTablet:
          "url('../assets/destination/background-destination-tablet.jpg')",
        technologyDesktop:
          "url('../assets/technology/background-technology-desktop.jpg')",
        technologyMobile:
          "url('../assets/technology/background-technology-mobile.jpg')",
        technologyTablet:
          "url('../assets/technology/background-technology-tablet.jpg')",
      },
      screens: {
        mobile: { max: "376px" },
        tablet: { max: "768px" },
      },
      colors: {
        blue: {
          vulcan: "#0B0D17",
          "tropical-blue": "#D0D6F9",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
      },
      flex: {
        "2": "2 2 0%",
      },
      fontFamily: {
        Bellefair: ["Bellefair"],
        BarlowCondensed: ["Barlow Condensed"],
        Barlow: ["Barlow"],
      },
      fontSize: {
        h1: "5.375rem",
        h2: "8.25rem",
        h3: "3.5rem",
        h4: "2rem",
        h5: "1.75rem",
        subh1: "1.75rem",
        subh2: "0.875rem",
        nav: "1rem",
        body: "1.125rem",
      },
      letterSpacing: {
        h5: 4.75,
        subh2: 2.35,
        nav: 2.7,
      },
      borderColor: (theme) => ({
        menuActive: "#FFFFFF",
        menuHover: "#D0D6F9",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
