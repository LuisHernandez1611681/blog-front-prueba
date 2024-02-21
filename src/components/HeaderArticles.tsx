import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { HeaderArticlesProps } from "../interfaces/Interfaces";

const HeaderArticles: React.FC<HeaderArticlesProps> = ({ setFilter, typeSearch, setType }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value);
  const handleSelectChange = (e: SelectChangeEvent<string>) => setType(e.target.value);

  return (
    <Grid
      container
      spacing={2}
      mb={1}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h5"
          sx={{
            textAlign: { xs: 'center', sm: 'left' }
          }}>
          Artículos
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="select-campo-busqueda">Tipo</InputLabel>
              <Select
                labelId="select-campo-busqueda"
                value={typeSearch}
                label="Tipo"
                onChange={handleSelectChange}
              >
                <MenuItem value="title">Título</MenuItem>
                <MenuItem value="author">Autor</MenuItem>
                <MenuItem value="content">Contenido</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="search"
              label="Buscar"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <SearchIcon style={{ color: 'gray' }} />
                ),
              }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HeaderArticles;