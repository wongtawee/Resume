import ProjectCard from '../components/work/ProjectCard';
import { worksData } from '../data/profileData';

const Work = () => {
  return (
    <div className="container-custom py-16">
      {/* Header with Animation */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Work
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for development
        </p>
      </div>

      {worksData.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No projects yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksData.map((work, index) => (
            <div
              key={work.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={work} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Work;
