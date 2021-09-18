import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
const App = () => {
  return (
    <div className="flex items-center w-screen h-screen bg-red-600 justify-center">
      <CountdownTimer countdownTimesStampMs={1656795600000} />
    </div>
  );
};

export default App;
