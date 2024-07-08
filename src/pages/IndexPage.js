import InfoTitle from "../components/InfoTitle";
import MBTIPart from "../components/MBTIPart";
import styled from "styled-components";


function MainPage ({className=""}) {
  return (
    <div className={className}>
      <InfoTitle />
      <MBTIPart />
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