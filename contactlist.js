var axios = require('axios');

exports.get = function(req,res){

  var lists;
  var config = {
    method: 'get',
    url: `https://api.hubapi.com/contacts/v1/lists?hapikey=${process.env['HAPIKEY']}`
  };

  // execute HS request
  axios(config)
  .then(function (response) {
    // send 200 on all success requests
    lists = response.data.lists;
    res.status(200).send(lists);
  })
  .catch(function (error) {
    console.log(error);
    res.status(400);
  });
}


  // for (list in lists) {
  //   var list_id = list.listId;
  //   list.contacts = fetchList(list_id);
  //
  // }


// function fetchList(list_id){
//   var config = {
//     method: 'get',
//     url: `https://api.hubapi.com/contacts/v1/lists/${list_id}/contacts/all?hapikey=${process.env['HAPIKEY']}`
//   };
//
//   // execute HS request
//   axios(config)
//   .then(function (response) {
//     // send 200 on all success requests
//     return response.data.contacts;
//     // res.status(200).send(contacts);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return;
//   });
// }
