import React from 'react';

const tvContext = React.createContext({
  shows: [],
  deleteTvShow: () => {},
  addTvShow: () => {},
  updateTvShow: () => {},
  getAllShows: () => {},
  toggleIsLoggedOff: () => {}
})

export default tvContext;