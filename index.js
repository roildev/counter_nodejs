import Express from 'express';

export default () => {
  const app = new Express();

  const DEFAULT_COUNTER_VALUE = 0;
  let counter = DEFAULT_COUNTER_VALUE;

  app.get('/', (req, res) => {
    const data = {value: counter};
    res.status(200);
    res.json(data);
  });

  app.post('/increment', (req, res) => {
    counter += 1;
    res.status(204).end();
  });

  app.post('/decrement', (req, res) => {
    counter -= 1;
    res.status(204).end();
  });

  app.delete('/reset', (req, res) => {
    counter = DEFAULT_COUNTER_VALUE;
    res.status(204).end();
  });

  app.put('/set', (req, res) => {
    const { value } = req.query;
    counter = Number(value);
    res.status(204).end();
  });

  return app;
};

// curl -X GET localhost:8080/