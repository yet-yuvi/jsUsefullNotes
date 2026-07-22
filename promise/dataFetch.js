const fetchData = async () => {
  try {
    const response = await fetch('url');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};

fetchData();
