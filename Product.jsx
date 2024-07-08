import { useParams } from "react-router-dom";

export function Product() {
  const { id } = useParams();
  return (
    <div>
      <h1>Your product is: {id}!</h1>
    </div>
  );
}
