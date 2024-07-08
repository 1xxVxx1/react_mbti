import InputTitle from "../components/InputTitle";
import MBTISelectors from "../components/MBTISelectors";
import ColorView from "../components/ColorView";
import ColorInputBtn from "../components/ColorInputBtn";

function NewInputPage () {
  return (
    <div>
      <InputTitle />
      <MBTISelectors />
      <ColorView />
      <ColorInputBtn />
    </div>
  )
};

export default NewInputPage;