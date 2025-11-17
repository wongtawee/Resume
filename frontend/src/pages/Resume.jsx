import Education from '../components/resume/Education';
import Experience from '../components/resume/Experience';
import Skills from '../components/resume/Skills';
import { profileData } from '../data/profileData';

const Resume = () => {
  return (
    <div className="container-custom py-16">
      {/* Header with Animation */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Resume
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          My professional journey, skills, and educational background
        </p>
      </div>

      <Education education={profileData.education} />
      <Experience experience={profileData.experience} />
      <Skills skills={profileData.skills} />
    </div>
  );
};

export default Resume;
