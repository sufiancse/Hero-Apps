import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [load, setLoad] = useState(false);
  

  useEffect(() => {
    setLoad(true);
    axios
      .get("/appsData.json")
      .then(res => {
        setTimeout(() => {
          setApps(res.data)
          setLoad(false)
        }, 800);
      })
      .catch((err) =>{
        console.log(err)
        setLoad(false)
      })
      // .then((res) => setApps(res.data))
      // .catch((err) => setError(err))
      // .finally(()=> setLoad(false))
  }, []);
  return {apps,load}
};
export default useApps;
