const Experience = ({ experience }) => {
  if (!experience || experience.length === 0) return null;

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 flex items-center gap-3">
        <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
        Experience
      </h2>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-8 md:pl-20 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-6 top-2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-125"></div>
              
              {/* Content Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <p className="text-blue-600 font-semibold mt-1">{exp.company}</p>
                    </div>
                    <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  
                  {exp.description && (
                    <p className="text-gray-600 leading-relaxed mb-4">{exp.description}</p>
                  )}
                  
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
