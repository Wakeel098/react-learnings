import { useState, useCallback , useEffect,useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);

  const [Password, setPassword] = useState("");

const  passwordRef=useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdegghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^^&*()_+";
    }
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);
 //console.log(Password)
  useEffect(()=>{
  PasswordGenerator()
},[length, numAllowed, charAllowed, PasswordGenerator])


const copyPasswordToClipBoard=useCallback(()=>{
passwordRef.current?.select()
// passwordRef.current?.setSelectionRange(0,6)    // used to select in range but in clipboard whole password will be selected

  window.navigator.clipboard.writeText(Password)

},[Password])
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className=" text-lg flex-col bg-gray-700 rounded-lg p-3 flex items-center justify-center">
          <div>Password Generator</div>
          <div className="my-3 w-[80%]  rounded-lg ">
            <input
              type="text"
              value={Password}
              placeholder="password"
              readOnly
                ref={passwordRef}

              className="text-orange-700 p-1 outline-none w-[75%] rounded-l-lg"
            />
            <button 
            onClick={copyPasswordToClipBoard}
            className="bg-blue-600  w-[15%] p-1 rounded-r-lg ">
              copy
            </button>
          </div>
          <div className="flex gap-8">
            <div>
              <input
                type="range"
                name="range"
                min={0}
                max={20}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <label htmlFor="range">Length:({length})</label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numberInput"
                name="numAllowed"
                onChange={() => {
                  setnumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numAllowed">Numbers</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                name="charAllowed"
                onChange={() => {
                  setcharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charAllowed">Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
