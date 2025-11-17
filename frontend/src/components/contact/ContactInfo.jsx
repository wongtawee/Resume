import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const ContactInfo = ({ profile }) => {
  const socialIcons = {
    github: { icon: FaGithub, label: 'GitHub', color: 'from-gray-700 to-gray-900' },
    linkedin: { icon: FaLinkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
    twitter: { icon: FaTwitter, label: 'Twitter', color: 'from-sky-500 to-blue-600' },
    facebook: { icon: FaFacebook, label: 'Facebook', color: 'from-blue-600 to-indigo-700' }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {profile.contact.email && (
          <a
            href={`mailto:${profile.contact.email}`}
            className="group relative animate-fade-in"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform transition-transform duration-500 group-hover:rotate-12">
                <HiMail className="text-white text-3xl" />
              </div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Email</h3>
              <p className="text-gray-900 font-medium break-all">{profile.contact.email}</p>
            </div>
          </a>
        )}
        
        {profile.contact.phone && (
          <a
            href={`tel:${profile.contact.phone}`}
            className="group relative animate-fade-in animation-delay-200"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform transition-transform duration-500 group-hover:rotate-12">
                <HiPhone className="text-white text-3xl" />
              </div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Phone</h3>
              <p className="text-gray-900 font-medium">{profile.contact.phone}</p>
            </div>
          </a>
        )}
        
        {profile.contact.location && (
          <div className="group relative animate-fade-in animation-delay-400">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform transition-transform duration-500 group-hover:rotate-12">
                <HiLocationMarker className="text-white text-3xl" />
              </div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Location</h3>
              <p className="text-gray-900 font-medium">{profile.contact.location}</p>
            </div>
          </div>
        )}
      </div>

      {/* Social Media */}
      {profile.socialLinks && (
        <div className="animate-fade-in animation-delay-500">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Connect With Me
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(profile.socialLinks).map(([platform, url], index) => {
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
                  className="group relative"
                  style={{ animationDelay: `${(index + 6) * 100}ms` }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.color} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`}></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className="text-white text-3xl" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {social.label}
                    </span>
                  </div>
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
