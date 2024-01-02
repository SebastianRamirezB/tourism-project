import React from 'react'
import { LeftButton } from './ui/LeftButton'
import { RightButton } from './ui/RightButton'

export const MotionControlButtons = () => {
  return (
    <div className="flex gap-[30px]">
        <LeftButton />
        <RightButton />
    </div>
  )
}
