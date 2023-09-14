import logo from './logo.svg';
import './App.css';
import ImageSlider from "./ImageSlider"

function App() {
  const slides = [
    {url: './paintings/Painting1.jpg',  title: 'Indian Blankets'},
    {url: './paintings/Painting2.jpg',  title: 'Indian Blankets'},
    {url: './paintings/Painting3.jpg',  title: 'Indian Blankets'},
    {url: './paintings/Painting4.jpg',  title: 'Indian Blankets'},
    {url: './paintings/Painting5.jpg',  title: 'Indian Blankets'},
    {url: './paintings/Painting6.jpg',  title: 'Indian Blankets'},
    {url: './paintings/Painting7.jpg',  title: 'Indian Blankets'},
    {url: './paintings/Painting8.jpg',  title: 'Indian Blankets'},
    {url: './paintings/Painting9.jpg',  title: 'Indian Blankets'},
    {url: './paintings/Painting10.jpg',  title: 'Indian Blankets'}
  ]

  const containerStyles = {
    position: "relative",
    width: "400px",
    height: "600px",
    top: "3.5em",
    margin: "0 auto"
  }
  return (
    <div className="App">
      <div className='headerBox'>
        <h1>Maya's Photo Gallery</h1>
      </div>
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>
    </div>
  );
}

export default App;
