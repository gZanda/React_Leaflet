import './App.css';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';

function App() {

  // Markers
  const markers = [
    {
      geoCode: [-21.2335, -44.9984],
      popUp: " Casinha "
    },
    {
      geoCode: [-21.2275, -44.9815],
      popUp: " UFLA "
    }
  ]

  // Custom Icon
  const myIcon = new Icon({
    iconUrl:  require("./Icon.png"),
    iconSize: [30, 30]
  });

  return (
    <div className="App">

      <MapContainer center={[-21.2399, -44.9984]} zoom={14} >

        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker => (
          <Marker position={marker.geoCode} icon={myIcon} >
            <Popup>
              {marker.popUp}
            </Popup>
          </Marker>
        )))}

      </MapContainer>

    </div>

    

  );
}

export default App;
