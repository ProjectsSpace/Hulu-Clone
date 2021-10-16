import { useRouter } from "next/router";
import requests from "../utils/requests";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex gap-10 sm:gap-20 px-6 sm:px-16 text-2xl overflow-x-scroll scrollbar-hide justify-center">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            className="whitespace-nowrap cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-6" />
      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-6" />
    </nav>
  );
};
export default Nav;
