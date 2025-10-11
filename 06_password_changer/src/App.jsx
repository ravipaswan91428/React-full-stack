import { useEffect, useRef, useState } from "react"

function App(){
  
  const [password, setPassword] = useState();
  const [length, setLength] = useState(12);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isSpecialCharacterAllowed, setIsSpecialCharacterAllowed] = useState(false);

  const refPass = useRef(null)

  function passwordGenerator(
    length=12,
    isNumberAllowed,
    isSpecialCharacterAllowed
  ){
      let newPassword = " ";
      let baseSymbol = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(isNumberAllowed){
        baseSymbol = baseSymbol + "1234567890";
      }
      if(isSpecialCharacterAllowed){
        baseSymbol = baseSymbol + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
      }

      for(let i=0;i<length;i++){
        const index = Math.floor(Math.random()*baseSymbol.length);
        newPassword = newPassword + baseSymbol.charAt(index);
      }
      console.log(newPassword);
      setPassword(newPassword);
  }
  function copyToClipboard(){
    navigator.clipboard.writeText(password)
    refPass.current.select()
  }

  useEffect(()=>{
        passwordGenerator(length,isNumberAllowed,isSpecialCharacterAllowed)
  },[length,isNumberAllowed,isSpecialCharacterAllowed])

  return (
    <>
    <div className="w-screen h-screen bg-gray-950 flex justify-center items-center">
      <div className="h-68 w-96 border-1 p-3.5 rounded-4xl bg-amber-50">
        <h1 className="flex w-full text-4xl font-bold mt-2.5 p-1">Password Generator</h1>
        <div className="text-2xl">
          <input
            type="text"
            value={password}
            aria-readonly
            className="border-1 p-1.5 mt-2 rounded-l-2xl border-r-0"
            id="password"
            ref={refPass}
          />
          <button className="bg-blue-500 p-1.5 border-1 rounded-r-2xl hover:bg-blue-400"
          onClick={copyToClipboard} >Copy</button>
        </div>
        <div className="text-gray-700"><span>length{length}</span>
          <input
            type="range"
            value={length}
            min={6}
            max={100}
            className="flex flex-1 w-full cursor-pointer"
            onChange={(e)=>{
              setLength(e.target.value)
            }}
          />
        </div>
          <div className="flex">
          <div className="p-2 gap-4 flex"><span>Add Numbers</span>
            <input
              type="checkbox"
              onChange={(e)=>{
                setIsNumberAllowed(e.target.checked)
              }}
            />
          </div>
          <div className="p-2 gap-4 flex"><span>Add Special Characters</span>
            <input
              type="checkbox"
              onChange={(e)=>{
                setIsSpecialCharacterAllowed(e.target.checked)
              }}
            />
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
