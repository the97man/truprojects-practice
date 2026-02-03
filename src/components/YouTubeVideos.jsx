// // src/components/YouTubeVideos.jsx

// import { useEffect, useState } from "react";

// export default function YouTubeVideos() {
//   // ✅ API KEY GOES HERE (TOP of component)
//   const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
//   console.log("YT API KEY:", API_KEY);

//   // ✅ YOUR CHANNEL ID (hardcoded is fine)
//   const CHANNEL_ID = "UCcwZ26sm2QtHjilZjCENIAg";

//   // ✅ State to store fetched videos
//   const [videos, setVideos] = useState([]);

//   // ✅ Fetch runs ONCE when component loads
//   useEffect(() => {
//     async function fetchVideos() {
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${API_KEY}`,
//         );

//         const data = await response.json();
//         setVideos(data.items || []);
//       } catch (error) {
//         console.error("YouTube fetch failed:", error);
//       }
//     }

//     fetchVideos();
//   });

//   // ✅ UI
//   return (
//     <div className="max-w-6xl mx-auto py-20 px-4">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         Latest <span className="text-red-500">Videos</span>
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {videos.map((video) => (
//           <iframe
//             key={video.id.videoId}
//             src={`https://www.youtube.com/embed/${video.id.videoId}`}
//             title={video.snippet.title}
//             className="w-full aspect-video rounded-lg shadow"
//             allowFullScreen
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
