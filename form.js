var axios = require('axios');

// Post form to Hubspot
exports.post = function(req,res){

  // set HS request
  var config = {
    method: 'post',
    url: 'https://api.hsforms.com/submissions/v3/integration/submit/21334118/79e2e702-676e-4b07-b117-df599a4a758c',
    headers: {
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(req.body)
  };

  // execute HS request
  axios(config)
  .then(function (response) {
    // res.status(response.status).send(response.data);
    res.status(200).send(response.data);
  })
  .catch(function (error) {
    res.status(error.response.status).send(error.response.data); //.status(error.status)
  });
}
