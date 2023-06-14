// external imports:
import { useState } from 'react';

// imported components:
import SideNav from './components/SideNav';
import HomeContent from './components/HomeContent';

function App() {
  const [view, setView] = useState('home');
  return (
    <div id="app">
      <SideNav setView={setView} />
      {view === 'home' ? <HomeContent /> : null}
    </div>
  );
}

export default App;
