import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
// const token = 'BQA3v5OEuB8Yqlz_KkbC5PAgxK5_2qwMGgod0ywp45MFEHAFoOVV-cHViPgmosTqTposSM2rob1KlpkMsf5AHK3sn1e5O4CNmicp3I_UXrWtzvRJYKWtag9xtVhLlIivTafH6CnkHVmWu-Qy-RgUpwKoujNskc8CA_5xrkein-UcXOU8BnuuTz6io8MNgIE7yulzSdaKdZ5nDXYfHoPAtBvogIqusxLLmMVo1UVlMjsEvlkIEmq9g8B41oiExj27q6SajE8GlV9EpzEr1EKc42r6';
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body:JSON.stringify(body)
//   });
//   return await res.json();
// }

// async function getTopTracks(){
//   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
//   return (await fetchWebApi(
//     'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
//   )).items;
// }

// const topTracks = await getTopTracks();
// console.log(
//   topTracks?.map(
//     ({name, artists}) =>
//       `${name} by ${artists.map(artist => artist.name).join(', ')}`
//   )
// );
