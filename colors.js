require("dotenv").config();
const axios = require("axios");

const url = "https://news.ycombinator.com/xuser";

async function run() {

  const resp = await axios.post(
    url,
    {
      id: process.env.HN_USER,
      hmac: process.env.HN_HMAC,
      about: "",
      email: process.env.HN_EMAIL,
      showd: "no",
      nopro: "no",
      maxv: "20",
      mina: "180",
      topc: "1fffff", //"d2c7fa",
      delay: "0",
    },
    {
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        Referer: "https://news.ycombinator.com/",
        "Content-Type": "application/x-www-form-urlencoded",
        Origin: "https://news.ycombinator.com",
        Connection: "keep-alive",
        Cookie: process.env.HN_SESSION_COOKIE,
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Sec-GPC": "1",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
      },
    }
  );

  console.log(resp.status);
}

run();
