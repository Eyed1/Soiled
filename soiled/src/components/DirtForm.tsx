import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import React, { useState } from "react";
import Axios from "axios";
import { FormEvent } from "react";

interface FormData {
  nitrogen: string;
  phosphorous: string;
  potassium: string;
  date: string;
  pH: string;
  temperature: string;
  rainfall: string;
}

export const DirtForm = () => {
  const url = "http://127.0.0.1:5000/form_submit";
  const [data, setData] = useState<FormData>({
    nitrogen: "",
    phosphorous: "",
    potassium: "",
    date: "",
    pH: "",
    temperature: "",
    rainfall: "",
  });
  function handle(event: React.ChangeEvent<HTMLInputElement>) {
    const newdata: FormData = { ...data };
    newdata[event.target.id as keyof typeof data] = event.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    Axios.post(url, {
      nitrogen: data.nitrogen,
      phosphorous: data.phosphorous,
      potassium: data.potassium,
      date: data.date,
      pH: data.pH,
      temperature: data.temperature,
      rainfall: data.rainfall,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <form onSubmit={(event) => submit(event)}>
        <label htmlFor="nitrogen">Nitrogen Levels</label>
        <input
          onChange={(event) => handle(event)}
          value={data.nitrogen}
          type="text"
          id="nitrogen"
        />

        <label htmlFor="phosphorous">Phosphorous Levels</label>
        <input
          onChange={(event) => handle(event)}
          value={data.phosphorous}
          type="text"
          id="phosphorous"
        />

        <label htmlFor="potassium">Potassium Levels</label>
        <input
          onChange={(event) => handle(event)}
          value={data.potassium}
          type="text"
          id="potassium"
        />

        <label htmlFor="date">Date</label>
        <input
          onChange={(event) => handle(event)}
          value={data.date}
          type="date"
          id="date"
        />

        <label htmlFor="pH">pH levels</label>
        <input
          onChange={(event) => handle(event)}
          value={data.pH}
          type="text"
          id="pH"
        />

        <label htmlFor="temperature">Temperature</label>
        <input
          onChange={(event) => handle(event)}
          value={data.temperature}
          type="text"
          id="temperature"
        />

        <label htmlFor="rainfall">Average Rainfall</label>
        <input
          onChange={(event) => handle(event)}
          value={data.rainfall}
          type="text"
          id="rainfall"
        />

        <button>Submit</button>
      </form>
    </div>
  );
};
