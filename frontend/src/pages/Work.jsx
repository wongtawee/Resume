import { useState, useEffect } from 'react';
import { worksAPI } from '../services/api';
import ProjectCard from '../components/work/ProjectCard';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        setLoading(true);
        const response = await worksAPI.getAllWorks();
        setWorks(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
        My Work
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects
      </p>

      {works.length === 0 ? (
        <p className="text-center text-gray-500">No projects yet</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <ProjectCard key={work._id} project={work} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Work;
