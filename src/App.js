import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Personal from "./components/Personal";

function App() {
  return (
    <>
      <nav className=" w-full h-[64px] bg-slate-400 ">
        <h1 className=" text-center py-4 text-3xl">CV PROJECT</h1>
      </nav>
      <div className="container mx-auto pb-5">
        <Personal />
        <Education />
        <Experience />
      </div>
    </>
  );
}

export default App;
