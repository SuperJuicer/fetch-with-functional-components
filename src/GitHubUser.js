import React, {useState, useEffect} from 'react';
import './GitHubUser.css';

/**
 * Function to render GitHubUser
 *
 * @property login - The GitHub username for whom we are displaying data
 */
const GitHubUser = ({login}) => {
    // We need some state
    const [data, setData] = useState(null);
  
    // We need some data to set to state
    useEffect(() => {
      
        fetch(`https://api.github.com/users/${login}`)
          .then(response => response.json())
          .then(setData)
          .catch(error => (console.log(error)));
    
    }, [login]);
  
    // Make sure we got what we think we got before displaying data.
    if (data && data.length !== 0) {
      return (
        <>       
          <a href={data.html_url}>
            <h1>{data.login}</h1>
            <img src={data.avatar_url} alt="an orange with a stem and a leaf" />
          </a>
          <a href={`https://github.com/${login}?tab=repositories`}>
            <h2>{data.public_repos} repos</h2>
          </a>
        </>
      )
    }
  
    return <p>Loading data?</p>;
  };

  export default GitHubUser;