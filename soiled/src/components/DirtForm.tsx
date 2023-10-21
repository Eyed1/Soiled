import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;
export const DirtForm = () => {
  const form = useForm();
  const { register, control } = form;

  renderCount++;
  return (
    <div>
      <h1>Dirt Form ({renderCount / 2})</h1>
      <form>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" {...register("location")} />

        <label htmlFor="date">Date</label>
        <input type="text" id="date" {...register("date")} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
