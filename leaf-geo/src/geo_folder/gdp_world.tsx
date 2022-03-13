import { MapContainer, Marker, Popup, TileLayer,MapConsumer } from 'react-leaflet'
import { LatLngExpression,LocationEventHandlerFn,LocationEvent,LatLng } from 'leaflet';
import './gdp_world.css';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react'
import {
  useMapEvents, useMapEvent
} from 'react-leaflet'
import { Button } from 'react-bootstrap';
import L from 'leaflet';
import { useEffect, useRef,  } from 'react'
import {  Pane, Rectangle , } from 'react-leaflet'
import {LatLngBoundsExpression,Control,DomUtil} from "leaflet"
import { Legend } from './atom/legend';
import { Circle,CircleMarker} from 'react-leaflet';
import { count } from 'console';

type Country={
  latlong:LatLngExpression,
  countryName:string
}
const Japan:Country={latlong:[35.6762,139.6503],countryName:"Japan"};
const US:Country={latlong:[38.9072, -77.0369],countryName:"US"};
const Germany:Country={latlong:[51.1657, 10.4515],countryName:"Germany"};
const UK:Country={latlong:[51.505, -0.09],countryName:"UK"};
const France:Country={latlong:[46.2276, 2.2137],countryName:"France"};
const Italy:Country={latlong:[41.8719, 12.5674],countryName:"Italy"};
const Canada:Country={latlong:[56.1304, -106.3468],countryName:"Canada"};

const G7:Country[]=[Japan,US,Germany,UK,France,Italy,Canada];


const iconflag = new L.Icon({
    iconUrl: require('../uk.png'),
    iconRetinaUrl: require('../uk.png'),
    iconSize: new L.Point(20, 20),
    className: 'leaflet-div-icon'
});


const position:LatLngExpression = [51.505, -0.09]

const positions:LatLngExpression[]=[[51.505, -0.09],[51.505, -1],[51.505, -0.29]];
const LocationMarker =()=>{
  const [position, setPosition] = useState<LatLngExpression|null>(null)
  var position_list:LatLngExpression[]=[];
  const [list_pos,setList_pos]=useState<Array<LatLngExpression|null>>([])
  const map = useMapEvent(
    "click" ,
    (e)=> {
    
      setPosition(e.latlng);
      if(list_pos[0]==null){
          setList_pos([e.latlng]);
      }else{
        setList_pos([...list_pos,e.latlng]);
      }
      
      
    }
  )
  const redOptions = { color: 'red' }
  const fillBlueOptions = { fillColor: 'blue' };
  const center:LatLngExpression = [51.505, -0.09];

  //console.log(positions);
  
  return (
      <>
      {
          list_pos.map((loc)=>{
            console.dir(loc);
            
              return(<>
                
              <Marker position={loc as LatLngExpression} icon={iconflag} >
      <Popup>
        <Button style={{backgroundColor:"lightblue",opacity:0.5}} variant='primary' onClick={()=>{console.log('test')}}>
          Click here
          </Button>
        </Popup>
    </Marker>

        {G7.map(country=>{
          return(
            <CircleMarker
        center={country.latlong}
        pathOptions={redOptions}
        radius={20}>
        <Popup>{country.countryName}</Popup>
      </CircleMarker>

          )
        })}

      

    </>
              )
          }
          )
      /*
   
    
   list_pos === null ? null : list_pos.map(loc=>{
    <Marker position={loc as LatLngExpression}>
      <Popup>You are here</Popup>
    </Marker>
   })
    
*/
   }
    
      
    
  
  
      
  </>
  )
  

  
};


 function PopupExample(){
     const positions:LatLngExpression[]=[[51.505, -0.09],[51.505, -1],[51.505, -0.29]];
     console.log(positions);


     const [map,setMap]=useState<L.Map|null>(null);
     


  


  return (
      <div className='Map'>
    <MapContainer center={position} zoom={13} whenCreated={setMap}
    tap={false}>
      <TileLayer
        attribution='&copy; <a href=:LatLngBoundsExpressionPanePanesExamplePanePopupExampleopup"https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker/>
      <Legend map={map as L.Map}></Legend>
    </MapContainer>
    </div>
  )
}

export default PopupExample;