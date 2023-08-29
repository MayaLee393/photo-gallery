import logo from './logo.svg';
import './App.css';
import ImageSlider from "./ImageSlider"

function App() {
  const slides = [
    {url: 'http://localhost:3000/paintings/Painting1.jpg',  title: 'Indian Blankets'},
    {url: 'http://localhost:3000/paintings/Painting2.jpg',  title: 'Indian Blankets'},
    {url: 'http://localhost:3000/paintings/Painting3.jpg',  title: 'Indian Blankets'},
    {url: 'http://localhost:3000/paintings/Painting4.jpg',  title: 'Indian Blankets'},
    {url: 'http://localhost:3000/paintings/Painting5.jpg',  title: 'Indian Blankets'},
    {url: 'http://localhost:3000/paintings/Painting6.jpg',  title: 'Indian Blankets'},
    {url: 'http://localhost:3000/paintings/Painting7.jpg',  title: 'Indian Blankets'},
    {url: 'http://localhost:3000/paintings/Painting8.jpg',  title: 'Indian Blankets'},
    {url: 'http://localhost:3000/paintings/Painting9.jpg',  title: 'Indian Blankets'},
    {url: 'http://localhost:3000/paintings/Painting10.jpg',  title: 'Indian Blankets'}
  ]

  const containerStyles = {
    width: "500px",
    height: "600px",
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
