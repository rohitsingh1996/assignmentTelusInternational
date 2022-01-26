import React, { useContext }  from "react";
import Employee from "../models/employee";
import classes from './TableList.module.css'

const List: React.FC <{items:Employee[],onEditEmployee:(employee:Employee)=>void}> = (props) => {

    return (
        <table>
            <caption>Employee Information</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.items.map((employee:Employee)=>{
                        return (
                            <tr key={employee.id}>
                                <th scope="row">{employee.firstName}&nbsp;{employee.lastName}</th>
                                <td>{employee.email}</td>
                                <td>
                                    <button className={classes.editBtn} onClick={()=>props.onEditEmployee(employee)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};
  
export default List;