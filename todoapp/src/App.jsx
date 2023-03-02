import "./App.css";
import Body from "./components/Body";
import ControlBar from "./components/ControlBar";
import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  query,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("please enter a valid task");
      return;
    }

    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };
  // Read
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todoArr = [];
      querySnapshot.forEach((doc) => {
        todoArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todoArr);
    });
    return () => unsubscribe();
  }, []);
  // Update

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };
  // Delete
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <main className=" flex flex-col gap-5 items-center py-10 bg-indigo-50 dark:bg-black h-screen">
      <ControlBar />
      <Body
        input={input}
        setInput={setInput}
        todos={todos}
        toggleComplete={toggleComplete}
        createTodo={createTodo}
        handleDelete={handleDelete}
      />
    </main>
  );
}

export default App;
