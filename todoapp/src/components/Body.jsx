import Input from "./Input";
import List from "./List";

const Body = ({
  todos,
  toggleComplete,
  createTodo,
  input,
  setInput,
  handleDelete,
}) => {
  return (
    <div class="shadow-lg bg-white dark:bg-gray-900 border-gray-200 px-4 py-2.5 rounded-sm  w-80">
      <Input createTodo={createTodo} input={input} setInput={setInput} />
      <ul className="shadow-lg bg-white rounded-lg dark:bg-gray-800 px-2">
        {todos.map((todo, index) => (
          <List
            key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      {todos.length < 1 ? null : (
        <p className="text-center p-2 text-sm text-gray-500">
          {`${todos.length} items left`}
        </p>
      )}
    </div>
  );
};

export default Body;
