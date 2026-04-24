async function fetchlist() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/Monochromasity/1.0-demonlist/main/list.json");
    const list = await response.json();
    return list
  } catch (error) {
    console.log(error);
  }
}

async function printlist() {
  const list = await fetchlist();
  // console.log(JSON.stringify(list));
  const htmllist = document.getElementById("list");
  for (i = 0; i < list.length; i++) {
    const level = document.createElement("div");
    level.className = "level";
    const placement = document.createElement("b");
    const placementtxt = document.createTextNode("#".concat(i+1));
    placement.appendChild(placementtxt);
    placement.className = "placement";
    level.appendChild(placement);
    console.log(list[i]);
    htmllist.appendChild(level);
  }
}

printlist()
