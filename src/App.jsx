import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Issues from './pages/Issues.jsx';
import Events from './pages/Events.jsx';
import Volunteer from './pages/Volunteer.jsx';
import VoterInfo from './pages/VoterInfo.jsx';
import Endorsements from './pages/Endorsements.jsx';
import Newsroom from './pages/Newsroom.jsx';
import Contact from './pages/Contact.jsx';
import Donate from './pages/Donate.jsx';

export default function App() {
  return (
    <Router basename="/Bowling-Green/">
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/issues">Issues</Link> |{' '}
        <Link to="/events">Events</Link> |{' '}
        <Link to="/volunteer">Volunteer</Link> |{' '}
        <Link to="/voter-info">Voter Info</Link> |{' '}
        <Link to="/endorsements">Endorsements</Link> |{' '}
        <Link to="/newsroom">Newsroom</Link> |{' '}
        <Link to="/contact">Contact</Link> |{' '}
        <Link to="/donate">Donate</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/events" element={<Events />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/voter-info" element={<VoterInfo />} />
        <Route path="/endorsements" element={<Endorsements />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}
