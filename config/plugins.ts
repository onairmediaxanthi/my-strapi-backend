export default ({ env }: { env: any }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'mail.onairmedia.gr',
        port: 587,
        auth: {
          user: 'member@onairmedia.gr',
          pass: 'Moamg26!*',
        },
        secure: false,
        tls: {
          rejectUnauthorized: false,
        },
      },
      settings: {
        defaultFrom: 'member@onairmedia.gr',
        defaultReplyTo: 'member@onairmedia.gr',
      },
    },
  },
});