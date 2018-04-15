import {Promise} from 'bluebird';


export const getUserDetails = (username) =>
{
	return new Promise((resolve,reject) =>
	{
	 fetch('https://swapi.co/api/people/?search='+username)
      .then(results  =>  results.json())
      .then(json => {
      resolve(json);
  })
      .catch(error => {
        resolve('NE');
      });
  });
  
}