import React from 'react';
import GitHubUser from './GitHubUser';

/**
 * Function to render the App
 *
 */
const App = () => {
  const user = 'SuperJuicer';

  return <GitHubUser login={user}/>
};

export default App;