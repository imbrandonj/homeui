import '../styles/sidenav.css';

export default function SideNav({ setView }) {
  const showHome = () => setView('home');
  const showNews = () => setView('news');
  const showWeather = () => setView('weather');
  const showSettings = () => setView('settings');

  return (
    <nav id="sidenav">
      <button onClick={showHome}>home</button>
      <button onClick={showNews}>news</button>
      <button onClick={showWeather}>weath</button>
      <button onClick={showSettings}>set</button>
    </nav>
  );
}
