export default class StudioGhibli {  
  static async searchGhibli(id) {
    try {
      const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
      const ghibliResponse = response.json();
      
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } 
      
      return ghibliResponse;
    } catch(error) {
      return error;
    }
  }
}