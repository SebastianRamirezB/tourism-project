import { LeftButton } from './ui/LeftButton'
import { RightButton } from './ui/RightButton'

export const MotionControlButtons = ({actionFunction}) => {


  return (
    <div className="flex gap-[30px]">
        <LeftButton actionFunction={actionFunction} />
        <RightButton actionFunction={actionFunction} />
    </div> 
  )
}
