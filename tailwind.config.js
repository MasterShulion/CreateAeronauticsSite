module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        copper: "#34d399",
        brass: "#a3e635",
        steel: "#8f9aa3",
        ink: "#07110d",
        panel: "rgba(15, 20, 27, 0.72)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(52, 211, 153, 0.22)",
      },
      backgroundImage: {
        "grid-fine": "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "hero-radial": "radial-gradient(circle at top, rgba(52,211,153,0.22), transparent 34%), radial-gradient(circle at 20% 20%, rgba(163,230,53,0.16), transparent 22%), radial-gradient(circle at 80% 15%, rgba(34,197,94,0.12), transparent 20%)",
      },
      animation: {
        floatSlow: "floatSlow 9s ease-in-out infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
};
