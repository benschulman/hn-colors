require("dotenv").config();
const axios = require("axios");

const url = "https://news.ycombinator.com/xuser";

function getRandomColor() {
  const letters = "0123456789abcdef";
  let color = "";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

async function run() {
  const {
    HN_HMAC: hmac,
    HN_USER: id,
    HN_SESSION_COOKIE: sessionCookie,
  } = process.env;
  const topc = getRandomColor();

  console.log(`Changing color to ${topc}.`)

  return axios.post(
    url,
    {
      id,
      hmac,
      topc,
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
        Cookie: sessionCookie,
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
}

export const handler = async(event) => {
  if(event.TYPE === "SET_RANDOM") {
    return run;
  }
};