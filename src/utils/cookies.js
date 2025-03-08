const isClient = typeof window !== "undefined";

// const setCookie = (tokens) => {
//   if (!isClient) return;

//   if (tokens.accessToken && tokens.refreshToken) {
//     const now = new Date();
//     const oneDayLater = new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000);
//     const oneMonthLater = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

//     document.cookie = `accessToken=${
//       tokens.accessToken
//     };expires=${oneDayLater.toUTCString()};path=/`;
//     document.cookie = `refreshToken=${
//       tokens.refreshToken
//     };expires=${oneMonthLater.toUTCString()};path=/`;
//   } else {
//     document.cookie = `accessToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
//     document.cookie = `refreshToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
//   }
// };

function setCookie(name, value, days) {
  if (!isClient) return;

  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

const getCookie = (cookieName) => {
  if (!isClient) return;

  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${cookieName}=`));
  return cookie ? cookie.split("=")[1] : null;
};

const deleteCookie = () => {
  if (!isClient) return;

  document.cookie =
    "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie =
    "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

export { setCookie, getCookie, deleteCookie };
