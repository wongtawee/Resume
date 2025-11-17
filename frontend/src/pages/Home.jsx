import Hero from '../components/home/Hero';
import { profileData } from '../data/profileData';

const Home = () => {
  return (
    <div className="container-custom py-20">
      <Hero profile={profileData} />
    </div>
  );
};

export default Home;
