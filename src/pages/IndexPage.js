import InfoTitle from "../components/InfoTitle";
import MBTIPart from "../components/MBTIPart";
import styled from "styled-components";
import { useState } from"react";


function MainPage ({className=""}) {
  const [selectMBTI, setSelectMBTI] = useState();
  const handleClick = (e) => {
    setSelectMBTI(e.target.innerText);
  };
  return (
    <div className={className}>
      <InfoTitle selectMBTI={selectMBTI} onDelete={setSelectMBTI}/>
      <MBTIPart onClick={handleClick}/>
    </div>
  )
};

const IndexPage = styled(MainPage)`
  width: 865px;
  margin: 60px auto;
  display: flex;
  gap: 39px;
  justify-content: space-between;
`;

export default IndexPage;