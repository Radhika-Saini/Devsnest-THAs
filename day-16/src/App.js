
import './App.css';
import MemeCard from './MemeCard';
import Chess from './Chess';

function App() {
  return (
    <div className="App">
      <div className="Meme">
        <h2 className="heading-text">Meme Card</h2>
        <MemeCard meme="Study-Meme" source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZ1EFsidmIFtmvnU7BmcKQB-DLY1deCNR2g&usqp=CAU" text="Hehehe"/>
      </div>

      <div className="Chess">
        <h2 className="heading-text">Chess Board</h2>
        <Chess/>
      </div>
    </div>
  );
}

export default App;
