/* eslint-disable linebreak-style */
export default function handleResponseFromAPI(promise) {
  return promise
    // eslint-disable-next-line no-unused-vars
    .then((response) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      console.error(error);
      return new Error();
    });
}
