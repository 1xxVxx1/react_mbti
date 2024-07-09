import styled from "styled-components";
import arrow from "../assets/images/arrow.svg";

function ComMBTIList ({surveys, className = ""}) {
  return (
    <ul className={className}>
      {surveys.map((survey) => (
        <li>
          <div>{survey.id}</div>
          <div>{survey.mbti}</div>
          <div><img src={arrow} alt="arrow"/></div>
          <div style={{backgroundColor: `${survey.colorCode}`}}></div>
          <div>{survey.colorCode}</div>
        </li>
      ))}
    </ul>
  )
};

const MBTIList = styled(ComMBTIList)`
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