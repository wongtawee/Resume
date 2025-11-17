const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  const categoryColors = {
    0: 'from-blue-500 to-cyan-500',
    1: 'from-purple-500 to-pink-500',
    2: 'from-orange-500 to-red-500',
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 flex items-center gap-3">
        <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <div 
            key={index} 
            className="group relative animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Glow Effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${categoryColors[index % 3]} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
            
            {/* Card */}
            <div className="relative bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
              {/* Category Header with Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors[index % 3]} rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-12`}>
                  <span className="text-white text-xl font-bold">
                    {skillGroup.category.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {skillGroup.category}
                </h3>
              </div>
              
              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="group/skill relative px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default overflow-hidden"
                  >
                    {/* Animated Background on Hover */}
                    <span className={`absolute inset-0 bg-gradient-to-r ${categoryColors[index % 3]} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}></span>
                    <span className="relative group-hover/skill:text-gray-900 transition-colors duration-300">
                      {skill}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
