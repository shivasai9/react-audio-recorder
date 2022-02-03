import './App.css';
import Notification from './components/Notification/Notification'
import AudioControls from './components/AudioControls/AudioControls'
function App() {
  return (
    <div className="app">
      <Notification />
      <AudioControls />
    </div>
  );
}

export default App;
