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
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/articles`);
        if (!response.ok) {
          throw new Error('Could not get data');
        }
        const data = await response.json();
        setArticles(data);
        localStorage.setItem('articles', JSON.stringify(data));
      } catch (error) {
        console.error('Error getting data:', error);
        getLocalStorage();
      }
    };
    fetchData();
  }, []);// Ejecutar solo una vez al montar el componente

  const getLocalStorage = () => {
    const storedArticles = localStorage.getItem('articles');
    if (storedArticles !== null && typeof storedArticles === 'string') {
      setArticles(JSON.parse(storedArticles));
    } else {
      setArticles([]);
    }
  };

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