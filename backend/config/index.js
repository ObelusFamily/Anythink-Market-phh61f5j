module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
  wallE_API_KEY: process.env.OPENAI_API_KEY
};
