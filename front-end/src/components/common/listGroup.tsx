import * as React from "react";

const ListGroup = (props: any) => {
  const {
    items,
    selectedItem,
    onItemSelect
  } = props;
  return (
    <ul className="list-group">
      {items.map((item: string) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          Care Recipient {items.findIndex((e: string) => e === item) + 1}
        </li>
      ))}
    </ul>
  );
};
// ListGroup.defaultProps = {
//   valueProperty: "id"
// };

export default ListGroup;
