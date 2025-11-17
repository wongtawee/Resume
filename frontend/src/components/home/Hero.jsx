import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const Hero = ({ profile }) => {
  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    facebook: FaFacebook
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Profile Image with Animation */}
        {profile.profileImage && (
          <div className="mb-8 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="relative w-48 h-48 rounded-full mx-auto object-cover shadow-2xl ring-4 ring-white transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        )}

        {/* Name with Gradient Animation */}
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 animate-slide-in-left">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            {profile.name}
          </span>
        </h1>

        {/* Title with Typing Effect Style */}
        <h2 className="text-2xl md:text-4xl font-medium mb-6 animate-slide-in-right">
          <span className="text-gray-700">{profile.title}</span>
          <span className="inline-block w-1 h-8 bg-blue-600 ml-2 animate-blink"></span>
        </h2>

        {/* Bio with Fade In */}
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed px-4 animate-fade-in animation-delay-500">
          {profile.bio}
        </p>

        {/* Social Links with Hover Effects */}
        {profile.socialLinks && (
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-1000">
            {Object.entries(profile.socialLinks).map(([platform, url], index) => {
              if (!url) return null;
              const Icon = socialIcons[platform];
              return Icon ? (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={platform}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-white p-3 rounded-lg shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <Icon className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300" size={28} />
                  </div>
                </a>
              ) : null;
            })}
          </div>
        )}

        {/* Scroll Down Indicator */}
        <div className="animate-bounce mt-8">
          <HiArrowDown className="text-gray-400 mx-auto" size={32} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
