import React, { useState } from "react";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { ArticleProps } from "../interfaces/Interfaces";

const Article: React.FC<ArticleProps> = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const getDescription = () => isExpanded ? article.description : article.description.substring(0, 70) + '...';

  return (
    <Box className={`grid-item ${isExpanded ? 'expanded' : ''}`}>
      <Card style={{ margin: '5px', overflow: 'hidden' }}>
        <CardContent>
          <Typography variant="h5" component="h2">{article.title}</Typography>
          <Typography color="textSecondary" gutterBottom>{article.author}</Typography>
          <Typography color="textSecondary" gutterBottom>{article.date}</Typography>
          <Typography variant="body2" component="p">{getDescription()}</Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            size="small"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Cerrar" : "Leer más"}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Article;