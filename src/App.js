import './App.css';
import Dataku from "./playlist"
import data from './Data';

function App() {
  return data.map((item) => {
    const { id, album, name, artists } = item;
    return (
      <Dataku key={id}
        image={album.images[0].url}
        title={name}
        albums={album.name}
        artists={artists[0].name}
      />
    );
  });

}

export default App;