import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const FavoriteDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "unknown";
  const size = searchParams.get("size") || "medium";

  return (
    <>
      <Navbar />
      <div className="p-4">
        <p> Your favorite post is{" "}
          <span className="font-bold">{query}</span>. Post ID is{" "}
          <span className="font-bold">{id}</span>. Size is{" "}
          <span className="font-bold">{size}</span>.
        </p>
      </div>
    </>
  );
};

export default FavoriteDetail;
