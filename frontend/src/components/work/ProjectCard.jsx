import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative">
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
      
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
        {/* Thumbnail with Overlay */}
        {project.thumbnail && (
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Quick Action Buttons on Hover */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt className="text-blue-600" size={20} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="text-gray-800" size={20} />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies with Animated Tags */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-gray-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 group/link"
              >
                <FaExternalLinkAlt className="transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" size={14} />
                <span className="relative">
                  Live Demo
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/link:w-full transition-all duration-300"></span>
                </span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 group/link"
              >
                <FaGithub className="transform group-hover/link:rotate-12 transition-transform duration-300" size={16} />
                <span className="relative">
                  Code
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover/link:w-full transition-all duration-300"></span>
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
