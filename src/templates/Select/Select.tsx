import React from "react";
import './Select.css';

export function Select({ options, title, disabled }: Props) {
  return (
    <div className={"container"}>
      <p className={"title"}>{title}</p>

      <select disabled={disabled}>
        <option className={"option"}>{options[0]}</option>
        <option className={"option"}>{options[1]}</option>
        <option className={"option"}>{options[2]}</option>
        <option className={"option"}>{options[3]}</option>
        <option className={"option"}>{options[4]}</option>
      </select>
    </div>
  );
}

interface Props {
  title: string;
  options: [string, string, string, string, string];
  disabled?: boolean;
}
