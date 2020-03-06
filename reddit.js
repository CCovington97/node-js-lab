const fs = require("fs");
const path = require("path");
const request = require("request");
let arr = [];
let dataPath = path.join(__dirname, "./popular-articles.json");

request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) throw err;
  JSON.parse(body).data.children.forEach(post => {
    arr.push({
      author: post.data.author,
      url: post.data.url,
      title: post.data.title
    });
    console.log(arr);
  });
  fs.writeFile(dataPath, JSON.stringify(arr), err => {
    if (err) throw err;
    console.log("Got it!");
  });
});