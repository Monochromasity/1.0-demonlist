async function fetchlist() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/Monochromasity/1.0-demonlist/refs/heads/main/list.json");
    const list = await response.json();
    return list
  } catch (error) {
    console.log(error);
  }
}

async function printlist() {
  const list = await fetchlist();
  console.log(JSON.stringify(list));
}

printlist()
