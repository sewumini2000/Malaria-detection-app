import Sidebar from '../navigation/Sidebar';
import ParasiteDetector from '../components/ParasiteDetector';
import { useAppContext } from '../context/AppContext';
import About from './About';
import ParasiteInfo from '../components/ParasiteInfo';

const Home = () => {
const { view } = useAppContext();

  const renderContent = () => {
    switch (view) {
      case 'parasitedetector':
        return <ParasiteDetector />;
        case 'about':
            return <About />;
            case 'parasiteinfo':
            return <ParasiteInfo />;
      default:
        return <ParasiteDetector />;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar  />
      <div style={{
        flex: 1,
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        padding: '20px',
      }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
