fetch("https://raw.githubusercontent.com/Monochromasity/1.0-demonlist/main/list.json");
.then(x => x.text());
.then(y => JSON.parse(y));
.then(z => console.log(z));
