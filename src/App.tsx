import React, { useContext, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import TableList from "./components/TableList";
import Employee from "./models/employee";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([
    new Employee("Radha", "Sharma", "ram.charan@gmail.com", "female"),
    new Employee("Nick", "Fury", "nick.fury@gmail.com", "male"),
    new Employee("Raj", "Kumar", "raj.kumar@gmail.com", "male"),
    new Employee("Ravi", "Shankar", "ravi.shankar@gmail.com", "male"),
  ]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>();

  const editEmplyeeHandler = (employee: Employee) => {
    setIsEditMode(true);
    setSelectedEmployee(employee);
  };
  const updateDetailsHandler = (data: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
  }) => {
    setIsEditMode(false);
    setEmployees(prevState =>{
      debugger
      let newState = prevState.map(el => el.id === data.id ? data : el)
      return newState
    })
    console.log(data);
  };
  return (
    <React.Fragment>
      {!isEditMode && (
        <TableList items={employees} onEditEmployee={editEmplyeeHandler} />
      )}
      {isEditMode && (
        <Editor
          currentEmployee={selectedEmployee}
          onUpdateEmployee={updateDetailsHandler}
        />
      )}
    </React.Fragment>
  );
}

export default App;
