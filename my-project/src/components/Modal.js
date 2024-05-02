import React from 'react'
import { createportal } from "react-dom"
export default function Modal({children}) {
  return (
  <dialog>
    {children}
  </dialog>
  )
}
