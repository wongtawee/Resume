import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Hero = ({ profile }) => {
  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    facebook: FaFacebook
  };

  return (
    <div className="text-center">
      {/* Profile Image */}
      {profile.profileImage && (
        <div className="mb-8">
          <img
            src={profile.profileImage}
            alt={profile.name}
            className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
          />
        </div>
      )}

      {/* Name & Title */}
      <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-4">
        {profile.name}
      </h1>
      <h2 className="text-2xl md:text-3xl text-primary-600 font-medium mb-6">
        {profile.title}
      </h2>

      {/* Bio */}
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
        {profile.bio}
      </p>

      {/* Social Links */}
      {profile.socialLinks && (
        <div className="flex justify-center space-x-6">
          {Object.entries(profile.socialLinks).map(([platform, url]) => {
            if (!url) return null;
            const Icon = socialIcons[platform];
            return Icon ? (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                aria-label={platform}
              >
                <Icon size={32} />
              </a>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

export default Hero;
