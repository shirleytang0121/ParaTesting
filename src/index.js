import createApp from './app';

const app = createApp();

app.listen(process.env.PORT||8081, () => {
  
  console.log('Running on port 8081');
});
