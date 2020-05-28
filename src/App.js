import React from "react";
import "./App.css";
import { Bingo } from "./Bingo";
import { phrases } from "./data";

const randomizedData = phrases
    .map(p => ({ text: p, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(p => p.text)
    .slice(0, 25)

export default function App() {
  return (
    <div className="App">
      <Bingo phrases={randomizedData} />
    </div>
  );
}
