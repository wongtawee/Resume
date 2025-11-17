const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Skills</h2>
      <div className="space-y-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
