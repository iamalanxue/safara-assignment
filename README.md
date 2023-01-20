# What I would have done

1. If this was a webserver I would have some redirects to specefic url endpoints
2. There are so many edge cases that I did not cover like a condition where if you want to create a queue with the same queueName it should error. 

# How to run this 
1. First run `npm install` to install all the dependencies 
2. You can then run `npm test` to run all the unit tests and see that they have passed 
3. This application is listening through http://localhost:3000/ so go to that url once you ran `npm install`

- Sample Endpoints
  - http://localhost:3000/CreateQueue/:queueName to create a queue
  - http://localhost:3000/SendMessage/:queueName/:delayInMS/:message to enqueue a message into an existing queue and would error if any request params are incorrect
  - http://localhost:3000/ReceiveMessage/:queueName to get the first out message from the queue
  - http://localhost:3000/DeleteMessage/:queueName/:messageID deletes the message inside the queue if the message ID exists
  