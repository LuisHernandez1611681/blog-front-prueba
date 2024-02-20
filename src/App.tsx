import { Box } from '@mui/material'
import './App.css'
import DrawerAppBar from './components/DrawerAppBar'
import Home from './views/Home'

function App() {
  return (
    <>
      <div className='body'>
        <header>
          <DrawerAppBar />
        </header>
        <Box component="main">
          <Home />
        </Box>
      </div>
    </>
  )
}

export default App
