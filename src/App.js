import { useEffect, useState } from "react";
import "./App.css";
import GetEachNote from "./Component/GetEachNote";

function Home() {
  const [note, setNote] = useState("");
  const [list, setList] = useState([{ id: 0, content: "" }]);
  const [checkSize, setCheckSize] = useState(false);
  const saveToNoteList = () => {
    if (note !== "") {
      const id = list.length > 0 ? list[list.length - 1].id + 1 : 1;
      const currentNote = [...list, { id: id, content: note }];
      if (list.length >= 5) {
        setCheckSize(true);
      } else {
        setList(currentNote);
        setNote("");
      }
    }
  };
  const removeNote = (id) => {
    setList(list.filter((p) => p.id !== id));
    if (list.length <= 5) {
      setCheckSize(false);
    }
  };
  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-400 shadow-lg rounded-lg p-4 w-80 h-auto max-h-96 overflow-y-auto">
        {checkSize ? (
          <h2 className="text-xl text-yellow-300 font-bold mb-4">
            Please remove some notes{" "}
          </h2>
        ) : (
          <h2 className="text-xl font-bold mb-4">Add Note </h2>
        )}

        <div className="flex items-center space-x-2 mb-4">
          <input
            onChange={(e) => {
              setNote(e.target.value);
            }}
            className="border border-gray-300 rounded-l px-4 py-2 flex-1 min-w-0"
            value={note}
            placeholder="Enter note"
          />
          <button
            onClick={() => {
              saveToNoteList();
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
        <ul className="space-y-4">
          {list.map((item) => (
            <li key={item.id} className="flex items-center">
              <div className="flex-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
                <GetEachNote content={item.content} />
              </div>
              {item.content !== "" && (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-auto"
                  onClick={() => {
                    removeNote(item.id);
                  }}
                >
                  Clear
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
