import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="px-3 py-2">{heading}</h1>
      {items.length === 0 && <p>Not itmems found!</p>}
      <ul className="list-group mx-3">
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
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {selectedIndex !== -1 && <p>Selected item: {items[selectedIndex]}</p>}
    </>
  );
}

export default ListGroup;
