import "./assets/styles/App.css";
import "./assets/styles/index.css";
import TodoApp from "./components/TodoApp";

function App() {
    return (
        <div className=" pt-20 flex flex-col justify-between h-full w-full text-white bg-bottom-left sm:bg-right md:bg-top  ">
            <TodoApp />
            <h1 className="text-center font-['JosefinSans'] font-semibold text-3xl mb-5 mt-5">Fateme Babaei <br></br> Do list</h1>
        </div>
    );
}

export default App;