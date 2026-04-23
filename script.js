fetch("https://raw.githubusercontent.com/Monochromasity/1.0-demonlist/main/list.json")
.then(x => x.text())
.then(a => console.log(a))
.then(y => JSON.parse(y))
.then(z => console.log(z));
