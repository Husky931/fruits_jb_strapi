module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: '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'
        },
        settings: {
          defaultFrom: 'pecevgligor@gmail.com',
          defaultReplyTo: 'pecevgligor@gmail.com',
        },
      },
    }
  });