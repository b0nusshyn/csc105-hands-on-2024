import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const schema = z.object({
  number: z.preprocess((val) => Number(val), z.number().min(1).max(100)),
  q: z.enum(["love", "like"], {
    errorMap: () => ({ message: "Select either 'love' or 'like'" }),
  }),
  size: z.enum(["small", "medium", "large"], {
    errorMap: () => ({ message: "Select a valid size" }),
  }),
});

export default function FavoritePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate(`/fav/${data.number}?q=${data.q}&size=${data.size}`);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" border  space-y-2 rounded w-90 p-8 "
        >
          <h2 className="text-xl font-semibold text-center mb-4">
            Favorites Page
          </h2>

          <label className="block">Number:</label>
          <input
            {...register("number", { valueAsNumber: true })}
            type="number"
            className="w-full p-2 border rounded"
          />
          {errors.number && (
            <p className="text-red-500">{errors.number.message}</p>
          )}

          <label className="block mt-2">Q:</label>
          <select {...register("q")} className="w-full p-2 border rounded">
            <option value="">Select</option>
            <option value="love">Love</option>
            <option value="like">Like</option>
          </select>
          {errors.q && <p className="text-red-500">{errors.q.message}</p>}

          <label className="block mt-2">Size:</label>
          <select {...register("size")} className="w-full p-2 border rounded">
            <option value="">Select</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          {errors.size && <p className="text-red-500">{errors.size.message}</p>}

          <button
            type="submit"
            className="mt-4 p-2 w-full bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
