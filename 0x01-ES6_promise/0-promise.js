function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const success = false; // Simulating a failed API call
      if (success) {
        const error = new Error('API request failed');
        reject(error); // Rejecting the Promise with the error
      } else {
        const mockResponse = { data: 'Mock response from API' };
        resolve(mockResponse); // Resolving the Promise with the mock response
      }
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
  });
}

export default getResponseFromAPI;
