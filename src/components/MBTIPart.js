import NewInputLink from "./NewInputLink";
import MBTILists from "./MBTILists";
import styled from "styled-components";


function CompMBTIPart ({className = "", onClick}) {
  
  return (
    <div className={className}>
      <NewInputLink />
      <MBTILists onClick={onClick}/>
    </div>
  )
};

const MBTIPart = styled(CompMBTIPart)`
  width: 528px;
`;

export default MBTIPart;