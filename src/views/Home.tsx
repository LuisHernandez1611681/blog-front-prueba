import { Box, Divider } from "@mui/material";
import Article from "../components/Article";
import HeaderArticles from "../components/HeaderArticles";
import { useEffect, useState } from "react";
import { API_URL } from "../constants/constants";

const Home = () => {
  const [type, setType] = useState('title'); 
  const [filter, setFilter] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/articles`)
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data); // Actualizar el estado con los datos recibidos
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // Ejecutar solo una vez al montar el componente

  const articulosFiltrados = filter ? articles.filter((article: any) => article[type].toLowerCase().includes(filter.toLowerCase())) : articles;
  const articulosRenderizados = articulosFiltrados.map((article: any, index: number) => (
    <Article key={index} article={article}/>
  ));

  return (
    <Box>
      <HeaderArticles
        typeSearch={type}
        setFilter={setFilter}
        setType={setType}
      />
      <Divider variant="middle" />
      <Box className="grid-container">
        {articulosRenderizados}
      </Box>
    </Box>
  )
}

export default Home;