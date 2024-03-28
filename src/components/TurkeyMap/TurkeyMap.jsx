import Turkey from "@react-map/turkey";
import { useEffect } from "react";

const TurkeyMap = () => {
  useEffect(() => {
    var mySVG = document.getElementsByTagName("svg");
    mySVG[0].setAttribute("viewBox", "-100 -40 1000 400");
  }, []);
  return <Turkey size={1500} />;
};

export default TurkeyMap;
