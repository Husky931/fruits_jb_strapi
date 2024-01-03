module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: ''
        },
        settings: {
          defaultFrom: 'pecevgligor@gmail.com',
          defaultReplyTo: 'pecevgligor@gmail.com',
        },
      },
    }
  });