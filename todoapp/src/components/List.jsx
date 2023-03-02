import { UilTrashAlt } from "@iconscout/react-unicons";
const List = ({ todo, toggleComplete, handleDelete }) => {
  const style = {
    li: `flex justify-between p-2 my-2 capitalize text-gray-500  focus:outline-gray-200 dark:focus:outline-gray-900 text-sm`,

    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center text-gray-500 hover:text-purple-600`,
  };

  return (
    <div>
      <li className={style.li}>
        <div className={style.row}>
          <input
            className="accent-purple-600"
            onChange={() => toggleComplete(todo)}
            type="checkbox"
            checked={todo.completed ? "checked" : ""}
          />
          <p
            onClick={() => toggleComplete(todo)}
            className={todo.completed ? style.textComplete : style.text}
          >
            {todo.text}
          </p>
        </div>
        <button onClick={() => handleDelete(todo.id)} className={style.button}>
          <UilTrashAlt size={16} />
        </button>
      </li>
    </div>
  );
};

export default List;
