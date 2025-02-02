import { useState } from 'react'
import './App.css'
import { ToastContainer, toast, Bounce } from 'react-toastify';

function App() {
  const notify = () => toast.success('Logged successfully!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });

  return (
    <>
       <button onClick={notify}>Notify!</button>
       <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
      />
    </>
  )
}

export default App
