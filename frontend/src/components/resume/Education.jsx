const Education = ({ education }) => {
  if (!education || education.length === 0) return null;

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 flex items-center gap-3">
        <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="group relative animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
              {/* Degree Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 shadow-lg transform transition-transform duration-500 group-hover:rotate-12">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {edu.degree}
              </h3>
              <p className="text-blue-600 font-semibold mb-1">{edu.institution}</p>
              <p className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm font-medium mb-3">
                {edu.year}
              </p>
              {edu.description && (
                <p className="text-gray-600 leading-relaxed mt-3">{edu.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
