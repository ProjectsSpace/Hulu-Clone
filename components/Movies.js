import Thumbnail from "./utils/Thumbnail";
import FlipMove from "react-flip-move";
const Movies = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex justify-center flex-wrap">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Movies;
