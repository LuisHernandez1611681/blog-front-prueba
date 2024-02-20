import { Box } from '@mui/material'
import './App.css'
import DrawerAppBar from './components/DrawerAppBar'
import RoutesComponent from './routes'

function App() {
  return (
    <>
      <div className='body'>
        <header>
          <DrawerAppBar />
        </header>
        <Box component="main">
          <RoutesComponent />
        </Box>
      </div>
    </>
  )
}

export default App
