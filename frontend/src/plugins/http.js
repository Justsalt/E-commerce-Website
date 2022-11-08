const get = async (url) => {
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  };
  const response = await fetch("http://localhost:4000/" + url, options);
  const { status } = response;
  const res = await response.json();

  return { status, res };
};

const post = async (url, data) => {
  const options = {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("http://localhost:4000/" + url, options);
  const { status } = response;
  const res = await response.json();

  return { status, res };
};

export { get, post };
