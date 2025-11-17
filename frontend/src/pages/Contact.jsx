import ContactInfo from '../components/contact/ContactInfo';
import { profileData } from '../data/profileData';

const Contact = () => {
  return (
    <div className="container-custom py-16">
      {/* Header with Animation */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Feel free to reach out to me through any of the following channels. I'd love to hear from you!
        </p>
      </div>

      <ContactInfo profile={profileData} />
    </div>
  );
};

export default Contact;
