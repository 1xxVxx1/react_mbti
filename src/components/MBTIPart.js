import NewInputLink from "./NewInputLink";
import MBTILists from "./MBTILists";
import styled from "styled-components";


function CompMBTIPart ({className = ""}) {
  return (
    <div className={className}>
      <NewInputLink />
      <MBTILists />
    </div>
  )
};

const MBTIPart = styled(CompMBTIPart)`
  width: 528px;
`;

export default MBTIPart;