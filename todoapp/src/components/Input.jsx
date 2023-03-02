import { UilPlus } from "@iconscout/react-unicons";
const Input = ({ createTodo, input, setInput }) => {
  return (
    <div>
      {" "}
      <form onSubmit={createTodo}>
        <div className=" py-1 px-0 ">
          <div className="relative">
            <button className=" absolute top-2.5 right-3  text-sm font-medium text-purple-600 hover:text-purple-800   ">
              <UilPlus size={20} />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className=" py-2.5 px-5 w-72 z-20 text-sm text-gray-900 bg-white rounded-lg   dark:bg-gray-800  dark:text-white focus:outline-gray-200 dark:focus:outline-gray-900 shadow-md  "
              placeholder="I want to..."
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Input;
