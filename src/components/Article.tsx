import React, { useState } from "react";
import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { ArticleProps } from "../interfaces/Interfaces";

const Article: React.FC<ArticleProps> = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const getDescription = () => isExpanded ? article.content : article.content.substring(0, 70) + '...';

  return (
    <Box className={`grid-item ${isExpanded ? 'expanded' : ''}`}>
      <Card style={{ margin: '5px', overflow: 'hidden' }}>
        <CardActionArea onClick={() => setIsExpanded(!isExpanded)}>
          <CardContent>
            <Typography variant="h5" component="h2">{article.title}</Typography>
            <Typography color="textSecondary" gutterBottom>{article.author}</Typography>
            <Typography color="textSecondary" gutterBottom>{article.created_at}</Typography>
            <Typography variant="body2" component="p">{getDescription()}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Article;