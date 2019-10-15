import React from 'react';

const tvContext = React.createContext({
  shows: [],
  deleteTvShow: () => {},
  addTvShow: () => {}
})

export default tvContext;