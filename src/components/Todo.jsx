import { BiTrash, BiEditAlt, BiCheckDouble } from "react-icons/bi";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
    return (
        <div className=" flex-col md:flex-row flex justify-between items-center  mb-2 mt-2  font-['JosefinSans'] card-item backdrop-blur-[3px] rounded-[20px] shadow-[-5px 6px 28px rgba(0, 0, 0, 0.12)] bg-grayMain">
            <div className="mb-2 text-center sm:mb-0 sm:text-left ">
                {todo.text}
            </div>
            <div>
                <button
                    className="btn-action text-xl transition ease-in-out delay-100   hover:font-bold font-['JosefinSans'] p-2"
                    onClick={onComplete}
                >
                    <BiCheckDouble className="hover:scale-150 transition ease-in-out hover:text-success delay-150" />
                </button>
                <button
                    className="btn-action text-xl  transition ease-in-out delay-100  hover:font-bold font-['JosefinSans'] p-2"
                    onClick={onDelete}
                >
                    <BiTrash className="hover:scale-150 transition ease-in-out delay-150  hover:text-red-600"/>
                </button>
                <button
                    className="btn-action text-xl transition ease-in-out delay-100 hover:font-bold font-['JosefinSans'] p-2"
                    onClick={onEdit}
                >
                    <BiEditAlt className="hover:scale-150 transition ease-in-out delay-150  hover:text-blue-800 "/>
                </button>
            </div>
        </div>
    );
};

export default Todo;
