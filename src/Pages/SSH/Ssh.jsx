import { useEffect } from "react";
import { useRef, useState } from "react";

const Ssh = () => {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  }, []);
  return (<div
    className="App"
    onClick={e => { inputRef.current.focus() }}

  >
    <input type="text"
      ref={inputRef}
      className="terminalInput"
      value={input}
      onChange={e => setInput(e.target.value)}
      onKeyDown={e => {
        if (e.key === "Enter") {
          let newOutput = "";
          newOutput = output + "\n" + "$" + input + "\n";
          switch (input) {
            case "ipconfig":
              newOutput += "192.168.1.200";
              break;
            default:
              newOutput += "Unknown"
          }
          setOutput(newOutput);
          setInput("");
        }
      }}
    />
    <div className="terminal">
      {output}
    </div>
  </div>);
}

export default Ssh;