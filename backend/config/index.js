module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
  wallE_API_KEY: process.env.NODE_ENV === 'production' ? process.env.OPENAI_API_KEY : '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'
};
