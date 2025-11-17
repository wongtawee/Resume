import { useState, useEffect } from 'react';
import { profileAPI } from '../services/api';
import ContactInfo from '../components/contact/ContactInfo';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';

const Contact = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await profileAPI.getProfile();
        setProfile(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load contact info');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!profile) return <ErrorMessage message="Contact information not found" />;

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
        Get In Touch
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Feel free to reach out to me through any of the following channels
      </p>
      <ContactInfo profile={profile} />
    </div>
  );
};

export default Contact;
