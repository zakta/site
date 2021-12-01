module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/servicos',
        destination: '/',
      },
      {
        source: '/sobre',
        destination: '/',
      },
      {
        source: '/contato',
        destination: '/',
      },
    ]
  },
}
