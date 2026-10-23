// import { Fragment } from "react"; No longer needed since React 17

import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${ props => props.active ? 'blue' : 'none' };
`;

// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  // (item: string) =>
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hooks are special functions that let you "hook into" React features. For example, useState is a Hook that lets you add React state to function components. Calling useState declares a "state variable". This is a way to preserve some values between the function calls. Normally, variables "disappear" when the function exits but state variables are preserved by React.
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} Former way of conditional rendering using ternary operator */}
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={ index === selectedIndex }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
