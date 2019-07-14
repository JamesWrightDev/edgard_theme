module.exports = {
  siteName: `Edgar Gridsome Theme`,
  titleTemplate: `%s - Gridsome`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/:slug'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
       tailwindConfig: 'tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
      }
    }
  ]
}
