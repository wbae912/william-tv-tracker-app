import React from 'react';

const tvContext = React.createContext({
  shows: [],
  deleteTvShow: () => {},
  addTvShow: () => {},
  updateTvShow: () => {},
  getAllShows: () => {}
})

export default tvContext;

//USE TERNARY...AND CREATE CONTEXT/STATE PASS IT DOWN TO THE COMPONENTS AND MAKE IT RE-RENDER

//NOT QUERY...BUT USE THE REQ.BODY through EXPRESS.JSON instead....FETCH WILL CARRY BODY WITH IT

//USER DATA MUST BE PASSED OVER REQ.BODY....BUT CAN USE REQ.QUERY IF I WANT TO