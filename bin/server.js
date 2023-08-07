import app from '../index.js';

const PORT = 8080;

app().listen(PORT, () => {
  console.log(`Server was started on PORT: '${PORT}'`)
});