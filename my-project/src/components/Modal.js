import { forwardRef, useImperativeHandle } from "react";
import { createportal } from "react-dom"


const Modal = forwardRef(function Modal({children},ref) {

    useImperativeHandle(ref,()=>{
   return{
    open(){
        dialog.current.showModal();
    }
   };
    });

  return createportal(
  <dialog ref={dialog}>
    {children}
  </dialog>,document.getElementById('modal-root')
  );
})
export default Modal;
