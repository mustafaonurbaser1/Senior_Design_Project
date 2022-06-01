import React from 'react'
import { StyledIcon } from './IconElements'

export const Icon = ({color,children}) => {
  return (
    <StyledIcon background = {color}>{children}</StyledIcon>
  )
}
