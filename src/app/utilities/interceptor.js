const { fetch: originalFetch } = window;
window.fetch = async (...args) => {
  const token = sessionStorage.getItem("token");
  let [resource, options] = args;
  if (token) {
    if (options?.headers) {
      options.headers['Authorization'] = `Bearer ${token}`
    } else {
      options = {
        ...options,
        headers: {
          Authorization:`Bearer ${token}`
        }
      }
    }
  };


  const response = await originalFetch(resource, options);
  return response;
};