import axios from 'axios';

const fetchData = async () => {
  const url = 'https://app.fracttal.com/api/items';
  const hawkCredentials = {
    id: 'tIh55rnN6xfhNmKqUVP6',
    key: 'JigaY7uOI3PR4oXKoDfGbNAjiUQuahO99ovfGR10J7tYq8hMi4UCr3',
  };

  const headers = {
    Authorization: `Hawk id=${hawkCredentials.id}, key=${hawkCredentials.key}`,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
 

export default fetchData;
