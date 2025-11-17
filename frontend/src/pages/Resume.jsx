import { useState, useEffect } from 'react';
import { profileAPI } from '../services/api';
import Education from '../components/resume/Education';
import Experience from '../components/resume/Experience';
import Skills from '../components/resume/Skills';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';

const Resume = () => {
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
        setError(err.response?.data?.message || 'Failed to load resume');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!profile) return <ErrorMessage message="Resume not found" />;

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
        Resume
      </h1>
      <Education education={profile.education} />
      <Experience experience={profile.experience} />
      <Skills skills={profile.skills} />
    </div>
  );
};

export default Resume;
