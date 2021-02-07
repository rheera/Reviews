import "./App.css";
import React, { useState, useReducer } from "react";
import { reducer } from "./reducer";
import reviews from "./data";

const defaultState = {
  index: 0,
  list: reviews,
};
function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={"title is-1 has-text-centered mt-6 pt-6"}>
          Our Reviews
        </h1>
      </header>
      <div
        style={{
          background: "hsl(205, 78%, 60%)",
          height: "0.25rem",
          width: "5rem",
          margin: "1rem auto 1rem",
        }}
      ></div>
      <section className="section">
        <div className="mx-4 columns has-text-centered is-centered">
          <div className="column is-8-tablet is-5-desktop box">
            <img
              src={state.list[state.index].image}
              alt="user picture"
              style={{
                width: "128px",
                height: "128px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h2
              className="is-subtitle has-text-dark has-text-weight-bold is-capitalized"
              style={{ letterSpacing: "2px" }}
            >
              {state.list[state.index].name}
            </h2>
            <h2 className="is-subtitle has-text-link is-uppercase">
              {state.list[state.index].job}
            </h2>
            <p className={"my-4 mx-4"}>{state.list[state.index].text}</p>
            <div className={"mt-4"}>
              <button
                className={"button is-link is-outlined"}
                onClick={() => {
                  dispatch({ type: "PREV" });
                }}
              >
                {"<"}
              </button>
              <button
                className={"button is-link is-outlined"}
                onClick={() => {
                  dispatch({ type: "NEXT" });
                }}
              >
                {">"}
              </button>
            </div>
            <button
              className="button mt-4"
              onClick={() => dispatch({ type: "RANDOM" })}
            >
              Surprise Me!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
