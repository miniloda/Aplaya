import logo from './logo.svg';
import './App.css';
import MainLayout from './Components/Main';
import ResponsiveAppBar from './Components/Header';
function App() {
  return (
    <>
      <ResponsiveAppBar />
    <MainLayout />
    </>
  );
}

export default App;
