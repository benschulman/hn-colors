# HN-Colors
This script changes your HackerNews top color. To run you must set the following environment variables:
- `HN_USER` -> Your HN username
- `HN_HMAC` -> The HMAC field that is sent with the body of `/xuser` post requests
- `HN_SESION_COOKIE` -> The raw string of cookies that will be set to the Cookies header field

To obtain the HMAC and the cookies, you can manually update your color on `news.ycombinator.com/user?id=<YOUR USER ID>` and view the request body and headers that was sent by the browser.