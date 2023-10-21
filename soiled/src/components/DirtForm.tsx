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
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="form-container">
      <h1>Dirt Form</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="nitrogen">Nitrogen Levels</label>
            <input type="text" id="nitrogen" {...register("nitrogen")} />
          </div>

          <div className="form-field">
            <label htmlFor="phosphorous">Phosphorous Levels</label>
            <input type="text" id="phosphorous" {...register("phosphorous")} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="potassium">Potassium Levels</label>
            <input type="text" id="potassium" {...register("potassium")} />
          </div>

          <div className="form-field">
            <label htmlFor="rainfall">Average Rainfall</label>
            <input type="text" id="rainfall" {...register("rainfall")} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="pH">pH levels</label>
            <input type="text" id="pH" {...register("pH")} />
          </div>

          <div className="form-field">
            <label htmlFor="temperature">Temperature</label>
            <input type="text" id="temperature" {...register("temperature")} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" {...register("date")} />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
      <div className="form-row">
        <div className="form-field">
          <input type="reset" value="Reset" />
        </div>
      </div>
    </div>
  );
};


//rainfall mm/day
//temperature F
//pH 
//levels mg/kg soil