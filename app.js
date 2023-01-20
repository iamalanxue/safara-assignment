const express = require('express');
const Queue = require('./js/Queue');

const app = express();
const q = {}
const errorMessage = '<h1>Something Went Wrong</h1>';

app.get('/', (req, res) => {
  res.sendFile('./pages/Queue.html', { root: __dirname });
})

app.get('/CreateQueue/:queueName', (req, res) => {
  const queueName = req.params.queueName;
  q[queueName] = new Queue();
  res.send('<h1>Created Queue!</h1>');
});

app.get('/SendMessage/:queueName/:delayInMS/:message', (req, res) => {
  try {
    const { queueName, delayInMS, message } = req.params;
    const delay = parseInt(delayInMS);
    if(isNaN(delay)) {
      throw new Error("Cannot convert DelayInMS to Integer");
    }
    setTimeout(() => {
      console.log(`Delayed for ${delayInMS} milliseconds`)
      q[queueName].enqueue(message);
      res.status(200).send(`<h1>Sent Message to Queue! MessageID: ${q[queueName].peekTailID()}</h1>`)
    }, delayInMS);
  } catch(error) {
    console.log(error.message);
    res.status(500).send(errorMessage);
  }
});


app.get('/ReceiveMessage/:queueName', (req, res) => {
  try{
    const { queueName } = req.params;
    if(!(queueName in q) || q[queueName].isEmpty()) {
      throw new Error("Can't find queue given name or no messages in queue");
    }
    const message = q[queueName].peek();
    res.status(200).send(`<h1>${message}</h1>`);
  } catch(error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

// app.get('/DeleteMessage/:queueName/:messageID', (req, res) => {
//   try{
//     const { queueName, messageID } = req.params;
//     if(!(queueName in q) || q[queueName].peekHeadID() !== parseInt(messageID)) {
//       throw new Error("Can't find queue given name or wrong message ID");
//     }
//     const message = q[queueName].dequeue();
//     res.status(200).send(`<h1>${message}</h1>`);
//   } catch(error) {
//     console.log(error.message);
//     res.status(500).send(error.message);
//   }
// });

app.get('/DeleteMessage/:queueName/:messageID', (req, res) => {
  try{
    const { queueName, messageID } = req.params;
    const message = q[queueName].deleteID(messageID)
    if(!(queueName in q) || message === -1) {
      throw new Error("Can't find queue given name or message ID in queue");
    }
    res.status(200).send(`<h1>"${message}" message wasDeleted</h1>`);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

//should have redirects 
//should have a condition where if you want to create a Queue with the same queueName then you error
//404 page 
app.use((req, res) => {
  res.status(404).sendFile('./pages/404.html', { root: __dirname });
});

module.exports = app;