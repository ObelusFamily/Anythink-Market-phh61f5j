module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
  wallE_API_KEY: process.env.NODE_ENV === 'production' ? process.env.OPENAI_API_KEY : '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'
};
