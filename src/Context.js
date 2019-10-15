import React from 'react';

const tvContext = React.createContext({
  shows: [],
  deleteTvShow: () => {}
})

export default tvContext;