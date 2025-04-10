//Este archivo se encarga de conectar a Kafka y enviar eventos cuando se lo indiquemos.
const kafka = require('../config/kafka');

const producer = kafka.producer();

const connectProducer = async () => {
  await producer.connect();
};

const sendUserCreatedEvent = async (userData) => {
  await producer.send({
    topic: 'user-events',
    messages: [
      {
        key: 'user.created', 
        value: JSON.stringify(userData),
      },
    ],
  });
  console.log('✅ Evento user.created enviado a Kafka');
};

module.exports = {
  connectProducer,
  sendUserCreatedEvent,
};
