import { Box, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const HeaderArticles = () => {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
    >
      <h3>Articulos</h3>
      <TextField
        id="search"
        label="Buscar articulo"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <SearchIcon style={{ color: 'gray' }} />
          ),
        }}
      />
    </Box>
  )
}

export default HeaderArticles;