import { useState } from 'react';
import { useRouter } from 'next/router';

export default function VideoCard({ video }) {
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-2xl font-bold mb-2">{video.title}</h2>
      <p className="text-gray-600 mb-4">{video.description}</p>
      <video
        src={video.url}
        controls
        className="w-full h-48 mb-4"
      />
      <div className="flex justify-between">
        <button
          onClick={handleLike}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            liked ? 'bg-green-500 hover:bg-green-700' : ''
          }`}
        >
          {liked ? 'Unlike' : 'Like'}
        </button>
        <button
          onClick={() => router.push(`/video/${video.id}`)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Watch
        </button>
      </div>
    </div>
  );
}