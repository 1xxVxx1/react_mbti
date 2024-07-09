import MBTIList from "./MBTIList";
import { getSurveys } from "../api/api";
import { useEffect, useState } from "react";


function MBTILists ({ onClick }) {
  const [surveys, setSurveys] = useState([]);

  const handleLoad = async () => {
    const result = await getSurveys();
    setSurveys(result);
  }

  useEffect(() => {
    handleLoad();
  }, [])

  return (
    <MBTIList surveys={surveys} onClick={onClick}/>
  )
};

export default MBTILists;