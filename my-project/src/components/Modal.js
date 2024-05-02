import { forwardRef, useImperativeHandle } from "react";
import { createportal } from "react-dom"
export default function Modal({children}) {
  return createportal(
  <dialog>
    {children}
  </dialog>,document.getElementById('modal-root')
  );
}
