import styled from "styled-components";
import { DraggableTodo } from "./DraggableTodo";
import { useDrag, useDrop } from "react-dnd";
const ItemType = "TODO_ITEM";
export const  Column= ({ title, items, moveTodo, columnStatus, handleDelete }) => {
  const [, drop] = useDrop({
    accept: ItemType,
    drop: (item) => {
      if (item.status !== columnStatus) {
        moveTodo(item.id, columnStatus);
      }
    },
  });

  return (
    <SubContainer ref={drop}>
      <Div>
        <h1>{title}</h1>
      </Div>
      {items.map((item) => (
        <DraggableTodo key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </SubContainer>
  );
};

const SubContainer = styled.div`
  width: 30%;
  border: 1px solid black;
  margin-left: 20px;
  text-align: center;

  background-color: #f9f9f9;
`;
const Div = styled.div`
  width: 100%;
  margin: auto;

  margin-bottom: 10px;
  border-bottom: 1px solid black;
`;