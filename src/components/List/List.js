import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles.js';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({places,childCliked, isLoading, type, setType, rating, setRating}) => {
    const classes = useStyles();
    

    // if we put what we want to print in {} it will print it with details. if value is 5, with out {} it will print 5
    // but with {} it will print childCliked: 5
    console.log({childCliked})
    const [elRefs, setElRefs] = useState([])
    useEffect(()=>{ 
      // this will create an array of the places and i indicate the clicked place
      const refs = Array(places?.length).fill().map((_, i)=> elRefs[i || createRef()])
      setElRefs(refs)
    },[places])
   
  return (
    <div className={classes.container}>
        <Typography variant="h4">Food & Dining around you</Typography>
        {isLoading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" />
          </div>
        ): (
          <>
        <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select value={type} onChange={(e)=> setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
        </FormControl>
        <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid key={i} item xs={12}>
                <PlaceDetails 
                place={place} 
                selected={Number(childCliked) === i}
                refProp = {elRefs[i]}
                />
              </Grid>
            ))}
        </Grid>
        </>
        )}
    </div>
  );
};

export default List;