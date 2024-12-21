import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";
const ItemType = "TODO_ITEM";   
export const DraggableTodo = ({ item, handleDelete }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id: item.id, status: item.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <TodoItem ref={drag} isDragging={isDragging} status={item.status}>
      <p>
        <b>Title:-</b>
        {item.title}
      </p>
      <p>
        <b>Status:-</b>
        {item.status}
      </p>
      <Button onClick={() => handleDelete(item.id)}>Delete</Button>
    </TodoItem>
  );
};



const TodoItem = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
  padding: 10px;
  background-color: cyan;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: grab;
  text-align: center;
`;
const Button = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: rgb(243, 234, 239);
  color: black;
  border: none;
  border-radius: 20px;
`;
