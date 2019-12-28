import createApp from './app';

const app = createApp();

app.listen(8081, () => {
  // eslint-disable-next-line no-console
  console.log('Running on port 8081');
});
