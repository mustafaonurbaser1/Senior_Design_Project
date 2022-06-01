import React from 'react'
import { StyledButton } from './ButtonElements'

export const Button = ({content , ButtonTheme}) => {
  return (
    <StyledButton ButtonTheme = {ButtonTheme}>{content}</StyledButton>
    )
}