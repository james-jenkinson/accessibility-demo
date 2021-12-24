declare module 'config' {
  interface Config {
    languageOptions: {
      default: string
      options: Array<{
        value: string
        label: string
      }>
    }
  }

  let config: Config
  export default config
}
