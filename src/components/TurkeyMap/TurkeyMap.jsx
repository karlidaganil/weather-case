import { useEffect } from "react";

import Turkey from "@react-map/turkey";
import { useNavigate } from "react-router-dom";

const TurkeyMap = () => {
  const navigate = useNavigate();

  useEffect(() => {
    var mySVG = document.getElementsByTagName("svg");
    mySVG[0].setAttribute("viewBox", "-115 -55 1000 400");
  }, []);

  return (
    <Turkey
      size={1500}
      onSelect={(city) => navigate(`/${city}`)}
      mapColor="red"
    />
  );
};

export default TurkeyMap;
