import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
    console.log(employee)
      .then((response) => {
        console.log(response);
        navigate("/employee/all");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      phone: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1> Add New Employee </h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            {" "}
            First Name{" "}
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h10 w-96 border mt-2 px-2 py-2"
          ></input>{" "}
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            {" "}
            Last Name{" "}
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h10 w-96 border mt-2 px-2 py-2"
          ></input>{" "}
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            {" "}
            Email
          </label>
          <input
            type="text"
            name="email"
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className="h10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            {" "}
            Job Title
          </label>
          <input
            type="jobTitle"
            name="jobTitle"
            value={employee.jobTitle}
            onChange={(e) => handleChange(e)}
            className="h10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            {" "}
            Phone Number
          </label>
          <input
            type="phone"
            name="phone"
            value={employee.phone}
            onChange={(e) => handleChange(e)}
            className="h10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-600 py-2 px-2 w-20"
          >
            {" "}
            Save{" "}
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-600 py-2 px-2 w-20"
          >
            {" "}
            Clear{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
