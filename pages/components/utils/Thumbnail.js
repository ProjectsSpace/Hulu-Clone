import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const base_url = "https://image.tmdb.org/t/p/original";

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 pb-4 transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={`${base_url}/${result.backdrop_path || result.poster_path}`}
        layout="responsive"
        width="1920"
        height="1080"
        alt={result.title}
      />

      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex gap-2 items-center opacity-0 group-hover:opacity-100">
          <span className="uppercase">
            {result.media_type && `${result.media_type}`}
          </span>
          <span>{result.release_date || result.first_air_date}</span>
          <span className="flex items-center">
            <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
          </span>
        </p>
      </div>
    </div>
  );
});

// Making eslint happy without shutting it's mouth
Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
