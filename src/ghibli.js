export default class StudioGhibli {  
  static searchGhibli(id) {
    return fetch(`https://ghibliapi.vercel.app/films/${id}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })      
      .catch(function(error) {
        return error;
      });
  }
}