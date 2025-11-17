import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const ContactInfo = ({ profile }) => {
  const socialIcons = {
    github: { icon: FaGithub, label: 'GitHub' },
    linkedin: { icon: FaLinkedin, label: 'LinkedIn' },
    twitter: { icon: FaTwitter, label: 'Twitter' },
    facebook: { icon: FaFacebook, label: 'Facebook' }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Contact Information */}
      <div className="card p-8 mb-8">
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
          Contact Information
        </h2>
        <div className="space-y-4">
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              <HiMail className="text-primary-600 text-2xl" />
              <span className="text-lg">{profile.email}</span>
            </a>
          )}
          {profile.phone && (
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-4 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              <HiPhone className="text-primary-600 text-2xl" />
              <span className="text-lg">{profile.phone}</span>
            </a>
          )}
          {profile.location && (
            <div className="flex items-center gap-4 text-gray-700">
              <HiLocationMarker className="text-primary-600 text-2xl" />
              <span className="text-lg">{profile.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Social Media */}
      {profile.socialLinks && (
        <div className="card p-8">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
            Social Media
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(profile.socialLinks).map(([platform, url]) => {
              if (!url) return null;
              const social = socialIcons[platform];
              if (!social) return null;
              const Icon = social.icon;
              
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <Icon className="text-4xl text-gray-600 group-hover:text-primary-600 transition-colors duration-200" />
                  <span className="text-sm font-medium text-gray-700">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
