import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";

function Video({isWatched, description, time, number}) {
  return (
    <div className="flex py-2">
      <div className="w-1/8 px-1 flex justify-center">
        {isWatched ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
      </div>
      <div className="flex align-bottom flex-col gap-2">
        <span className="font-bold">
          {`${number}. ${description}`}
        </span>
        <div className="flex">
          <FaRegCirclePlay /> <span className="ml-1">{time}min</span>
        </div>
      </div>
    </div>
  )
}

export default Video