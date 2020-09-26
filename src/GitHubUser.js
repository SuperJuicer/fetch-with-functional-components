import React, {useState, useEffect} from 'react';

const GitHubUser = ({login}) => {
    // We need some state
    const [data, setData] = useState(null);
  
    // We need some data to set to state
    useEffect(() => {
      
        fetch(`https://api.github.com/users/${login}`)
          .then(response => response.json())
          .then(setData)
          .catch(error => (console.log(error)));
    
    }, [login, data]);
  
    if (data && data.length !== 0) {
      return (
        <>       
          <p style={{wordBreak: 'break-all'}}>{JSON.stringify(data)}</p>
          <hr></hr>
          <h1>{data.login}</h1>
          <a href={data.html_url}><img src={data.avatar_url} alt="an orange with a stem and a leaf" max-width="auto"/></a>
        </>
      )
    }
  
    return <p>Loading data?</p>;
  };

  export default GitHubUser;