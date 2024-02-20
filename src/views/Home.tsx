import { Box, Divider } from "@mui/material";
import { MOCK_DATA } from "../constants/constants";
import Article from "../components/Article";
import HeaderArticles from "../components/HeaderArticles";


const Home = () => {
  return (
    <Box>
      <HeaderArticles />
      <Divider variant="middle"/>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Article articles={MOCK_DATA}/>
      </Box>
    </Box>
  )
}

export default Home;