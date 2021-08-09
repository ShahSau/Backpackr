
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

const Map = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const coordinates = {lat:0, lng:0}
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDwgHeLZ2uVD0JXzdxqz53_Od3Xuzg36Do'}}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={''}
      onChange={''}
      onChildClick={''}
      >

      </GoogleMapReact>
        
    </div>
  );
};

export default Map;