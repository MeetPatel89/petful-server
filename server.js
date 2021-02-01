const app = require('./modules/app/app');
const { PORT } = require('./modules/config');
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`[petful-server] Listening on ${port}.`);
});
