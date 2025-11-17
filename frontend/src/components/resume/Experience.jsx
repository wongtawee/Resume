const Experience = ({ experience }) => {
  if (!experience || experience.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Experience</h2>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
            <p className="text-primary-600 font-medium mt-1">{exp.company}</p>
            <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
            {exp.description && (
              <p className="text-gray-600 mt-3">{exp.description}</p>
            )}
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
