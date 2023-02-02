import { useDispatch } from "react-redux";
import { editPage } from "../../redux/state/stateSlice";

function Exit() {
  const dispatch = useDispatch();

  return (
    <div
      className="w-9 h-9 font-manrope bg-red-500 text-white absolute top-0 right-0 z-50 rounded-full flex items-center justify-center cursor-pointer"
      onClick={() => dispatch(editPage(1))}
    >
      Exit
    </div>
  );
}

export default Exit;
