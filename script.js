async function fetchlist() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/Monochromasity/1.0-demonlist/main/list.json");
    const list = await response.json();
    return list
  } catch (error) {
    console.log(error);
  }
}

const list = fetchlist()
console.log(list)
