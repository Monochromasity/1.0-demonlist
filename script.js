const listfetch = await fetch("https://raw.githubusercontent.com/Monochromasity/1.0-demonlist/main/list.json");
const listtxt = await fetch.text();
const list = JSON.parse(listtxt);
console.log(list);
