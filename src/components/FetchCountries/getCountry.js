import axios from 'axios';

export const getCountry = async name => {
  const searchParams = 'name,capital,population,flags,languages';
  try {
    const result = await axios.get(
      `https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`
    );
    return result;
  } catch (error) {
    console.error(error.message);
  }

  /* return fetch(`https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Oops, there is no country with that name');
    })
    .catch(error => console.error(error.message)); */
};
