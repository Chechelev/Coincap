export const parameters = {
  actions: { argTypesRegex: "^[a-z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}