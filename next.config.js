module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/servicos',
        destination: '/',
      },
      {
        source: '/empresa',
        destination: '/',
      },
      {
        source: '/contato',
        destination: '/',
      },
    ]
  },
}
