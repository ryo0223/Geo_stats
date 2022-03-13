import { MapContainer, Marker, Popup, TileLayer,MapConsumer } from 'react-leaflet'
import { LatLngExpression, CircleMarker,LocationEventHandlerFn,LocationEvent,LatLng } from 'leaflet';
import './gdp_world.css';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react'
import {
  useMapEvents, useMapEvent
} from 'react-leaflet'

import L from 'leaflet';
import { useEffect, useRef,  } from 'react'
import {  Pane, Rectangle , } from 'react-leaflet'
import {LatLngBoundsExpression,Control,DomUtil} from "leaflet"
import { Legend } from './atom/legend';
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

  

  //console.log(positions);
  
  return (
      <>
      {
          list_pos.map((loc)=>{
            console.dir(loc);
            
              return(<>
                <p>
      latitude: {51}, longitude: {}{' '}
      <button>reset</button>
    </p>
              <Marker position={loc as LatLngExpression} icon={iconflag}>
      <Popup>You are here</Popup>
    </Marker>
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