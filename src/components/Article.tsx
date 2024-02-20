import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { ArticleProps } from "../interfaces/Interfaces";


const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <Card sx={{ width: { sx: '90%', sm: '20%' }, margin: '10px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">{article.title}</Typography>
        <Typography color="textSecondary" gutterBottom>{article.author}</Typography>
        <Typography color="textSecondary" gutterBottom>{article.date}</Typography>
        <Typography variant="body2" component="p">{article.description}</Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}  >
          <Button size="small">Leer más</Button>
        </CardActions>
    </Card>
  );
};

export default Article;