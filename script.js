async function fetchlist() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/Monochromasity/1.0-demonlist/main/list.json");
    const list = await response.json();
    return list;
  } catch (error) {
    console.log(error);
  }
}

async function printlist() {
  const list = await fetchlist();
  // console.log(JSON.stringify(list));
  const htmllist = document.getElementById("list");
  for (i = 0; i < list.length; i++) {
    // Level div
    const level = document.createElement("div");
    level.className = "level";
    level.onclick = function() {
      console.log(this);
      // leveldetails(this);
    }
    // Level placement
    const placement = document.createElement("b");
    const placementtxt = document.createTextNode("#".concat(i+1));
    placement.appendChild(placementtxt);
    placement.className = "placement";
    level.appendChild(placement);
    // Level thumbnail
    const thumbnail = document.createElement("img");
    // thumbnail.src = "/thumbnails/".concat(list[i]["level"]).concat(".png");
    thumbnail.src = "https://img.youtube.com/vi/".concat(list[i]["video"]).concat("/maxresdefault.jpg");
    thumbnail.dataset.video = list[i]["video"]
    thumbnail.onload = function() {
      if (this.naturalWidth == 120) {
        this.src = "https://img.youtube.com/vi/".concat(this.dataset.video).concat("/hqdefault.jpg");
      }
    };
    thumbnail.onerror = function() {
      this.onerror = null;
      this.src = "https://img.youtube.com/vi/".concat(this.dataset.video).concat("/hqdefault.jpg");
    };
    level.appendChild(thumbnail);
    // Level info
    const info = document.createElement("div");
    info.className = "info";
    // Level name
    const name = document.createElement("p");
    const nametxt = document.createTextNode(list[i]["level"]);
    name.appendChild(nametxt);
    name.className = "name";
    // Level details
    const details = document.createElement("p");
    details.className = "details";
    // Level creator
    const creator = document.createElement("span");
    const creatortxt = document.createTextNode(list[i]["creator"]);
    creator.appendChild(creatortxt);
    creator.className = "user";
    // Level verifier
    const verifier = document.createElement("span");
    const verifiertxt = document.createTextNode(list[i]["verifier"]);
    verifier.appendChild(verifiertxt);
    verifier.className = "user";
    // Level details text
    const detailstxt1 = document.createTextNode("Published by ");
    details.appendChild(detailstxt1);
    details.appendChild(creator);
    const detailstxt2 = document.createTextNode(" • Verified by ");
    details.appendChild(detailstxt2);
    details.appendChild(verifier);
    // Level rewards
    const rewardvalue = Math.round((Math.pow((((-7*Math.sqrt(499))/(list.length-1))*((i+1)-list.length))/7, 2) + 1)*100)/100;
    const rewards = document.createElement("p");
    const rewardstxt = document.createTextNode("Rewards ".concat(rewardvalue).concat(" points"));
    rewards.appendChild(rewardstxt);
    rewards.className = "rewards";
    info.appendChild(name);
    info.appendChild(details);
    info.appendChild(rewards);
    level.appendChild(info);
    // Append to website
    console.log(list[i]);
    htmllist.appendChild(level);
  }
}

printlist()
