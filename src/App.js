import React from 'react';
import GitHubUser from './GitHubUser';

const App = () => {
  const user = 'SuperJuicer';

  return <GitHubUser login={user}/>
};

export default App;