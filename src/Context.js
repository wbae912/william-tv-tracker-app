import React from 'react';

const tvContext = React.createContext({
  shows: [],
  deleteTvShow: () => {},
  addTvShow: () => {},
  updateTvShow: () => {}
})

export default tvContext;