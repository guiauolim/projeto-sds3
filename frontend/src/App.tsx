import DataTable from "component/DataTable";
import Footer from "component/Footer";
import NavBar from "component/NavBar";

function App() {
  return (
    <>
    <NavBar/>
    <div className="container">
      <h1 className="text-primary">Olá Mundo</h1>

      <DataTable/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
