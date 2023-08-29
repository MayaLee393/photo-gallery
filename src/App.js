import logo from './logo.svg';
import './App.css';
import ImageSlider from "./ImageSlider"

function App() {
  const slides = [
    {url: 'http://localhost:3000/IMG_6361.jpg',  title: 'Ham 1'},
    {url: 'http://localhost:3000/IMG_6428.jpg',  title: 'Ham 2'},
    {url: 'http://localhost:3000/IMG_6921.jpg',  title: 'Ham 3'},
    {url: 'http://localhost:3000/IMG_7428.jpg',  title: 'Ham 4'},
    {url: 'http://localhost:3000/IMG_8036.jpg',  title: 'Ham 5'}
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto"
  }
  return (
    <div className="App">
      <h1>Maya's Photo Gallery</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>
    </div>
  );
}

export default App;
