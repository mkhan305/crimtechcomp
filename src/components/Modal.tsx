import { createPortal } from 'react-dom'
import { useState } from 'react';

const modalRoot = document.getElementById('modal')

export default function Modal() {
  // access modal root element with
  // this is where the modal should be rendered and destroyed

  const [open, setOpen] = useState<boolean>(false); 

  return (
    <>
      <button type="button"
        onClick={() => setOpen(true)} 
        style={{ background: 'black', color:'white', height: 'auto' }}>
          click me!
      </button>

      { open ? 
        createPortal(
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            height: '20rem', 
            width: '20rem', 
            transform: 'translate(-50%, -50%)', 
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid black', 
            borderRadius: '20px'
          }}>
            <p>modal lmao</p> 
            <button onClick={() => setOpen(false)}>exit lmao</button> 

            {
              // TODO: style with the specifications given in the README
            }
          </div>,
          modalRoot as Element,
        ) 
        : null } 
    </>
  )
}
