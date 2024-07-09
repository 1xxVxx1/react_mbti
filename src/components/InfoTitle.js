import styled from "styled-components";
import deleteIcon from "../assets/images/x.svg";

function CompInfoTitle ({className = "", selectMBTI, onDelete}) {

  const HandleDelete = (e) => {
    onDelete("");
  };
  
  return (
    <div className={className}>
      <div>
        <h1>
          MBTI별
          <br/>
          <span>좋아하는 색</span>
          {selectMBTI && <div>{selectMBTI}<img src={deleteIcon} alt="delete-icon" onClick={HandleDelete}/></div>}
        </h1>
      </div>
    </div>)
};

const InfoTitle = styled(CompInfoTitle)`
  width: 297px;
  color: #464E5E;
  text-align: right;
  &>div {
    border-radius: 80px;
    background-color: #F5F7FB;
    height: 288px;
    padding: 80px 40px;
    h1 {
      margin-bottom: 32px;
      font-size: 40px;  
      font-weight: 400;
      line-height: 48px;
      span {
        font-weight: 800;
      }
    }
  }
`;

export default InfoTitle;