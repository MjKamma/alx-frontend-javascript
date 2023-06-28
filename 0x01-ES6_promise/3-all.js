/* eslint-disable linebreak-style */
import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResponse, userResponse] = results;
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    // eslint-disable-next-line no-unused-vars
    .catch(() => {
      console.log('Signup system offline');
    });
}
