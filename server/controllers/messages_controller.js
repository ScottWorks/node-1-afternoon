let messages = [];
let id = 0;

module.exports = {
  create: (request, response) => {
    let message = {
      text: request.body.text,
      time: request.body.time,
      id: id
    };
    console.log('Request Body: ' + request.body);
    console.log('Request Params: ' + request.params);
    id++;
    messages.push(message);
    response.status(200).send(messages);
  },

  read: (request, response) => {
    response.status(200).send(messages);
  },

  update: (request, response) => {
    let index = null;
    messages.forEach((elem, idx) => {
      if (elem.id === Number(request.params.id)) {
        index = idx;
      }
    });

    messages[index] = {
      text: request.body.text || messages[index].text,
      time: messages[index].time,
      id: messages[index].id
    };

    response.status(200).send(messages);
  },

  delete: (request, response) => {
    let index = null;
    messages.forEach((elem, idx) => {
      if (elem.id === Number(request.params.id)) {
        index = idx;
      }
    });

    messages.splice(index, 1);
    response.status(200).send(messages);
  }
};
