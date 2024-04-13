const axios = require('axios');

const data = {
	"data": {
		"temporary" : "data"
	}
};

axios.post('http://localhost:3000/transact', data)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error.response);
  });