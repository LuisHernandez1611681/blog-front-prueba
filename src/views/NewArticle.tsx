import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { API_URL } from "../constants/constants";

const NewArticle = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const getDateNow = () => {
    const dateNow = new Date();
    return dateNow.toLocaleDateString();
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (!title || !author || !content) {
      alert('Todos los campos son obligatorios');
      return;
    }
    
    const date = getDateNow();
    
    console.log('Formulario enviado:', { title, author, date, content });

    fetch(`${API_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'title': title,
        'author': author,
        'created_at': date,
        'content': content
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo obtener los datos');
      }
      setTitle('');
      setAuthor('');
      setContent('');
      window.location.href = '/';
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <Box component='div' display='flex' justifyContent='center'>
      <Box 
        component='div' 
        sx={{ width: { sx: '90%', sm: '50%' } }}
        borderRadius='20px' 
        padding='20px' 
        textAlign='center'
        boxShadow='3'
      >
        <Typography variant='h5' sx={{ my: 2 }}>
          Nuevo Articulo
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="Título"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            label="Autor"
            variant="outlined"
            fullWidth
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            label="Contenido"
            variant="outlined"
            fullWidth
            multiline
            rows={7}
            value={content}
            onChange={(e) => setContent(e.target.value) }
            required
            margin="normal"
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </Box>
        </form>

      </Box>
    </Box>
  )
}

export default NewArticle;