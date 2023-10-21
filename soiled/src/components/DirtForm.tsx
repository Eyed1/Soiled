import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import React, { useState } from "react";
import Axios from "axios";
import { FormEvent } from "react";
import farm from "../farm.jpeg"

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
    <div className="form-container">
      <h1>Dirt Form</h1>
      <img className="farm-image" src={farm} alt="My Image" />
      <hr />
      <form onSubmit={(event) => submit(event)}>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="nitrogen">Nitrogen Levels</label>
            <input
              onChange={(event) => handle(event)}
              value={data.nitrogen}
              type="text"
              id="nitrogen"
            />
          </div>

          <div className="form-field">
            <label htmlFor="phosphorous">Phosphorous Levels</label>
            <input
              onChange={(event) => handle(event)}
              value={data.phosphorous}
              type="text"
              id="phosphorous"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="potassium">Potassium Levels</label>
            <input
              onChange={(event) => handle(event)}
              value={data.potassium}
              type="text"
              id="potassium"
            />
          </div>

          <div className="form-field">
            <label htmlFor="rainfall">Average Rainfall</label>
            <input
              onChange={(event) => handle(event)}
              value={data.rainfall}
              type="text"
              id="rainfall"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="pH">pH levels</label>
            <input
              onChange={(event) => handle(event)}
              value={data.pH}
              type="text"
              id="pH"
            />
          </div>

          <div className="form-field">
            <label htmlFor="temperature">Temperature</label>
            <input
              onChange={(event) => handle(event)}
              value={data.temperature}
              type="text"
              id="temperature"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="date">Date</label>
            <input
              onChange={(event) => handle(event)}
              value={data.date}
              type="date"
              id="date"
            />
          </div>
        </div>

        <hr />

        <button type="submit">Submit</button>
      </form>
      {/* <div className="form-row">
        <div className="form-field">
          <input type="reset" value="Reset" />
        </div>
      </div> */}
    </div>
  );
};

//rainfall mm/day
//temperature F
//pH
//levels mg/kg soil
