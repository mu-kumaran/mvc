import { useState } from "react";
import axios from "axios";
function App()
{
  const [rno,setRno] = useState(0)
  const [sname,setSname] = useState("")
  const [mark,setMark] = useState(0)
  const [list,setList] = useState(null)

  const dis = (e)=>{
    if(e.target.name === "rno")
      setRno(e.target.value)
    if(e.target.name === "sname")
      setSname(e.target.value)
    if(e.target.name === "mark")
      setMark(e.target.value)
  }

  function insertfun(){
    var inputdata = {
      rno: parseInt(rno),
      sname: sname,
      mark: parseInt(mark)
    }
    console.log(inputdata)

    axios.get("http://127.0.0.1:1234",{params:inputdata}).then((res)=>{
        console.log(res)
        console.log(res.data)
        setList(res.data)
    }).catch((err)=>{
      console.log(err.response.data)
      setList(err.response.data)
    })
    cleartextbox()
  }
  const cleartextbox = ()=>{
    setRno("")
    setSname("")
    setMark("")
  }

  return(
    <>
    <h2>Student details</h2>
    Roll no: <input type="text" placeholder="Enter roll no" name="rno" value={rno} onChange={(e)=>dis(e)}></input><br></br>
    Student name : <input type="text" placeholder="Enter student name" name="sname" value={sname} onChange={(e)=>dis(e)}></input><br></br>
    Mark: <input type="text" placeholder="Enter mark" name="mark" value={mark} onChange={(e)=>dis(e)}></input><br></br>
    <input type="button" value={"Insert/Save"} onClick={insertfun}></input>
    <h1>{list !== null && list.acknowledged === true && "Successfully Inserted"}</h1>
    <h1>{list !== null && list.acknowledged === true && "ID:"+list.insertedId}</h1>
    </>
  )
}
export default App

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
