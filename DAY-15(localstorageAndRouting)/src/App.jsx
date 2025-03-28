import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRoutes from './Routes/MainRoutes'
import Navbar from './components/Navbar'
import './Pages/Pages.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Navbar />
      <MainRoutes />
    </ThemeProvider>
    </>
  )
}

export default App
