const api = async (obj, getData) => {
  const fetchData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n3TDdyviIOPfr7WPDVjB/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: obj,
  });
  await fetchData.json();
  getData();
};

export default api;