module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins['email'].services.email.send({
        to: 'savvakosd@gmail.com',
        from: 'member@onairmedia.gr',
        subject: 'Νέα Εγγραφή Μέλους: ' + result.firstName + ' ' + result.lastName,
        text: `Έχετε μια νέα εγγραφή!
        Όνομα: ${result.firstName} ${result.lastName}
        Επιχείρηση: ${result.businessType}
        Τηλέφωνο: ${result.mobile}
        Email: ${result.email}
        Πόλη: ${result.city}`,
      });
      console.log("Email Sent Successfully!");
    } catch (err) {
      console.log("Email error:", err);
    }
  },
};