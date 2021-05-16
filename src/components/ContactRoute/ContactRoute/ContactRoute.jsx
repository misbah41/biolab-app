import React from 'react';
import Footer from '../../Share/Footer/Footer';
import ContactBanner from '../ContactBanner/ContactBanner';
import ContactInfoIframe from '../ContactInfoIframe/ContactInfoIframe';
import GetInContact from '../GetInContact/GetInContact';

const ContactRoute = () => {
  return (
    <div>
      <ContactBanner />
      <ContactInfoIframe />
      <GetInContact />
      <Footer />
    </div>
  );
};

export default ContactRoute;