/* eslint-disable linebreak-style */
// eslint-disable-next-line import/named
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPromise])
    .then((results) => {
      const arr = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          arr.push({ status: result.status, value: result.value });
        } else {
          arr.push({
            status: result.status,
            value: `Error: ${result.reason.message}`,
          });
        }
      });
      return arr;
    });
}
