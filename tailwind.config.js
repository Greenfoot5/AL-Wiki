/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
    preflight: false
  },
}

