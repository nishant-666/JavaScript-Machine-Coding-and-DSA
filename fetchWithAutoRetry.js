function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return fetcher().catch((err) => {
    if (maximumRetryCount === 0) {
      return Promise.reject(err);
    }

    return fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
  });
}

const fetcher = () => {
  return new Promise((resolve, reject) => {
    // Simulate a random success or failure
    const isSuccess = Math.random() > 0.5; // 50% chance of success
    setTimeout(() => {
      if (isSuccess) {
        resolve({ data: "API Data" });
      } else {
        reject(new Error("API Error"));
      }
    }, 500); // Simulate network delay
  });
};

fetchWithAutoRetry(fetcher, 3)
  .then((result) => console.log(result)) // Expected output: { data: 'API Data' }
  .catch((error) => console.error(error)); // If retry limit is exceeded
