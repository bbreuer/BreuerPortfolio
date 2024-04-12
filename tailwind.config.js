/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  themes:     {
      dark: {                          // specifying the theme name to customize
        "primary": "#a991f7",             // default primary color (you can change this if you want)
        "secondary": "#f6d860",           // default secondary color
        "accent": "#37cdbe",              // default accent color
        "neutral": "#3d4451",             // default neutral color
        "base-100": "#ffffff",            // default base color (background color of elements)
        "info": "#3ABFF8",                // default info color
        "success": "#36D399",             // default success color
        "warning": "#FBBD23",             // default warning color
        "error": "#F87272",               // default error color
        "text": "#ffffff",                // changing text color to white
      },
    },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["dark", "cupcake"],
  },
}