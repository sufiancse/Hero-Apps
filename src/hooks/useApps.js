import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoad(true);
    axios
      .get("/appsData.json")
      .then((res) => setApps(res.data))
      .catch((err) => setError(err))
      .finally(()=> setLoad(false))
  }, []);
  return {apps,load,error}
};
export default useApps;
