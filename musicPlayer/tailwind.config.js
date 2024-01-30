/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  //we start to customize colors and fonts
  theme: {
    extend: {
      height:{
        header: '560px',
        rate: '400px'
      },
      fontSize:{
        h1: '2.6rem',
      },
      colors:{
        main: '#111727',
        playbar:'#273B65',
        subMain: '#36e2ec',
        dry: '#0b1320',
        text: '#C0C0C0',
        border: '#4b5563',
        dryGray: '#E0D5D5',
        subtitle: '#4c5262',
        whi : '#fff',
        red: '#F20000',
      },
      screens:{
        xs: '475px'
      },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
}