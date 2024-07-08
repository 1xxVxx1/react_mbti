import MBTIList from "./MBTIList";
import { getSurveys } from "../api/api";
import { useEffect, useState } from "react";


function MBTILists () {
  const [surveys, setSurveys] = useState([]);

  const handleLoad = async () => {
    const result = await getSurveys();
    setSurveys(result);
  }

  useEffect(() => {
    handleLoad();
  }, [])

  return (
    <MBTIList surveys={surveys}/>
  )
};

export default MBTILists;