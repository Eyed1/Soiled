import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

type FormValues = {
  nitrogen: string;
  phosphorous: string;
  potassium: string;
  date: string;
  pH: string;
  temperature: string;
  rainfall: string;
};
export const DirtForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };
  renderCount++;
  return (
    <div>
      <h1>Dirt Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nitrogen">Nitrogen Levels</label>
        <input type="text" id="nitrogen" {...register("nitrogen")} />

        <label htmlFor="phosphorous">Phosphorous Levels</label>
        <input type="text" id="phosphorous" {...register("phosphorous")} />

        <label htmlFor="potassium">Potassium Levels</label>
        <input type="text" id="potassium" {...register("potassium")} />

        <label htmlFor="date">Date</label>
        <input type="date" id="date" {...register("date")} />

        <label htmlFor="pH">pH levels</label>
        <input type="text" id="pH" {...register("pH")} />

        <label htmlFor="temperature">Temperature</label>
        <input type="text" id="temperature" {...register("temperature")} />

        <label htmlFor="rainfall">Average Rainfall</label>
        <input type="text" id="rainfall" {...register("rainfall")} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
