const Education = ({ education }) => {
  if (!education || education.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
            <p className="text-primary-600 font-medium mt-1">{edu.institution}</p>
            <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
            {edu.description && (
              <p className="text-gray-600 mt-3">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
