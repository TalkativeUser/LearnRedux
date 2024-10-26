import "./App.css";

import Counter from "./components/Counter";

// 
const App = () => {
 

  console.log("<App /> rendered");

  return (
    <main className=" flex justify-center flex-col items-center ">
      <h1 className="font-extrabold text-yellow-500 pb-10 mt-16 text-center ">Learning Redux Toolkit</h1>
      <div className="flex flex-col items-center justify-center">
      
    <Counter />


 
    
      </div>


  

    </main>
  );
};

export default App;
