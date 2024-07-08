import ColorInfo from "../components/ColorInfo";

function MBTIList ({surveys}) {
  return (
    <div>
      <ul>
        <li>번호</li>
        <li>MBTI</li>
        <li>화살표</li>
        <li>
          <ColorInfo />
        </li>
        {surveys.map((survey) => (<li>{survey.id}</li>))}
      </ul>
    </div>
  )
};

export default MBTIList;