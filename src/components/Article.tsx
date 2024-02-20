import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Article as ArticleType } from "../interfaces/Interfaces";

interface ArticleProps {
  articles: ArticleType[];
}

const Article: React.FC<ArticleProps> = ({ articles }) => {
  return (
    <>
      {articles.map((item: ArticleType, index: number) => (
        <Card key={index} sx={{ width: { sx: '90%', sm: '20%' }, margin: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="h2">{item.title}</Typography>
            <Typography color="textSecondary" gutterBottom>{item.author}</Typography>
            <Typography color="textSecondary" gutterBottom>{item.date}</Typography>
            <Typography variant="body2" component="p">{item.description}</Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}  >
            <Button size="small">Leer más</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Article;