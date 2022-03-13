import { useEffect } from "react";
import L from "leaflet";
import './legend.css'

import uk from "../../uk.png"
 const Legend=({ map }:{map:L.Map})=> {
  console.log(map);
  useEffect(() => {
    if (map) {
      
      const legend = new L.Control({ position: "bottomright" });
      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "legend");
        div.innerHTML =
          "<div className=legend-panel>" +`<div class=ukdiv ><span>UK flag<span> <img src='uk.png' class=uk />`
        return div;
      };

      legend.addTo(map);
    }
  }, [map]); //here add map
  return null;
}

export {Legend}
