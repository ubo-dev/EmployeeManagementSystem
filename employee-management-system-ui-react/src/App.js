import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import NavBar from "./components/NavBar";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<EmployeeList />}></Route>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employee/all" element={<EmployeeList />}></Route>
          <Route path="/employee/add" element={<AddEmployee />}></Route>
          <Route path="/employee/update/:id" element={<UpdateEmployee />}></Route>
        </Routes>
      </BrowserRouter>s
    </>
  );
}

export default App;
