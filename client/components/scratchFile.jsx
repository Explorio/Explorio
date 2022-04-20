import axios from 'axios';

const createMap = () => {
  try {
    axios
      .get('https://maps.googleapis.com/maps/api/staticmap', {
        params: {
          center: 'Boston, MA',
          key: 'AIzaSyDe0wrLQxDD68cZIPk4ZG4RAnhCj0dS8Qo'
        }
      })
      .then(function (response) {
        const mapImage = response;
        return mapImage;
      });
  } catch (err) {
    console.log(err);
  }
};

console.log(createMap);
