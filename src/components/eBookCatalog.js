import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

const EBookCatalog = () => {
  const eBooks = [
    {
      id: 1,
      title: 'Harry Potter and the Sorcerer\'s Stone',
      author: 'J.K. Rowling',
      rating: 4.8,
      price: '$9.99',
      category: 'Fantasy',
      image: 'ebook1.png',
    },
    {
      id: 2,
      title: 'Percy Jackson and the Olympians: The Lightning Thief',
      author: 'Rick Riordan',
      rating: 4.5,
      price: '$8.99',
      category: 'Fantasy',
    },
    {
        id: 3,
        title: 'Percy Jackson and the Olympians: The Lightning Thief',
        author: 'Rick Riordan',
        rating: 4.5,
        price: '$8.99',
        category: 'Fantasy',
    },
    {
        id: 4,
        title: 'Percy Jackson and the Olympians: The Lightning Thief',
        author: 'Rick Riordan',
        rating: 4.5,
        price: '$8.99',
        category: 'Fantasy',
    },
      {
        id: 5,
        title: 'Percy Jackson and the Olympians: The Lightning Thief',
        author: 'Rick Riordan',
        rating: 4.5,
        price: '$8.99',
        category: 'Fantasy',
    },
      
    // Add more e-books here
  ];

  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = eBooks.filter((eBook) => {
    // Filter by category and search query
    return (
      (filterCategory === 'All' || eBook.category === filterCategory) &&
      (eBook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        eBook.author.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div>
      <Box marginBottom={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Filter by Category</InputLabel>
              <Select
                value={filterCategory}
                onChange={handleCategoryChange}
                label="Filter by Category"
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Fantasy">Fantasy</MenuItem>
                {/* Add more categories */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Search"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        {filteredBooks.map((eBook) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={eBook.id}>
            <Card variant="outlined">
              <img
                src={eBook.image}
                alt={eBook.title}
                style={{ width: '50%', height: 'auto' }}
              />
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  {eBook.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {eBook.author}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Rating: {eBook.rating}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: {eBook.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EBookCatalog;
