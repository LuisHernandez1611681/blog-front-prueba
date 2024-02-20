import { Box, Divider } from "@mui/material";
import { MOCK_DATA } from "../constants/constants";
import Article from "../components/Article";
import HeaderArticles from "../components/HeaderArticles";
import { useState } from "react";

const Home = () => {
  const [type, setType] = useState('title'); 
  const [filter, setFilter] = useState('');

  const articulosFiltrados = filter ? MOCK_DATA.filter((article: any) => article[type].toLowerCase().includes(filter.toLowerCase())) : MOCK_DATA;
  const articulosRenderizados = articulosFiltrados.map((article: any, index: number) => (
    <Article key={index} article={article} />
  ));

  return (
    <Box>
      <HeaderArticles 
        typeSearch={type}
        setFilter={setFilter}
        setType={setType}
      />
      <Divider variant="middle" />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {articulosRenderizados}
      </Box>
    </Box>
  )
}

export default Home;