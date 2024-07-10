import styled from "styled-components";
import arrow from "../assets/images/arrow.svg";

function ComMBTIList ({surveys, className = "", onClick}) {
  const handleClick = (e) => {
    onClick(e);
  } 
  return (
    <ul className={className}>
      {surveys.map((survey) => {
        const backColor = survey.colorCode;
        const PickColor = styled.div`
          background-color: ${backColor}
        `;
        return (
        <li>
          <div>{survey.id}</div>
          <div onClick={handleClick}>{survey.mbti}</div>
          <PickColor />
          <img src={arrow} alt="arrow"/>
          <div>{survey.colorCode}</div>
        </li>
      )
      })}
    </ul>
  )
};

const MBTIList = styled(ComMBTIList)`
  padding: 0;
  li {
    list-style: none;
    padding: 16px 40px;
    display: flex;
    gap: 20px;
    div {
      width: 70px;
    }
  }
`;

export default MBTIList;