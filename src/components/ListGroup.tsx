// import { Fragment } from "react"; No longer needed since React 17

import { useState } from "react";

// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({items, heading}: Props) {

  // Hooks are special functions that let you "hook into" React features. For example, useState is a Hook that lets you add React state to function components. Calling useState declares a "state variable". This is a way to preserve some values between the function calls. Normally, variables "disappear" when the function exits but state variables are preserved by React.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} Former way of conditional rendering using ternary operator */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
