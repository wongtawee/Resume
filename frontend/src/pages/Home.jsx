import { useState, useEffect } from 'react';
import { profileAPI } from '../services/api';
import Hero from '../components/home/Hero';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';

const Home = () => {
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
        setError(err.response?.data?.message || 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!profile) return <ErrorMessage message="Profile not found" />;

  return (
    <div className="container-custom py-20">
      <Hero profile={profile} />
    </div>
  );
};

export default Home;
