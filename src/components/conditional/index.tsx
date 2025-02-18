import * as React from 'react'
import {Children} from 'react'

interface ConditionalProps {
  render: boolean
  children: JSX.Element[] | JSX.Element
}

export const Conditional = ({children, render}: ConditionalProps): JSX.Element => {
  const [first, second] = Children.toArray(children)
  return <>{render ? first : second ? second : <></>}</>
}
