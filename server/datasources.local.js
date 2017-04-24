module.exports = {
  db: {
    connector: 'loopback-connector-mongodb',
    url: process.env.MONGODB_URI
  }
}