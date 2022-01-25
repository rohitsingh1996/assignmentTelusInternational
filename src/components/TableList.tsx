import React  from "react";
import classes from './TableList.module.css'

const List: React.FC = (props) => {
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
                <tr>
                    <th scope="row">Nick Pettit</th>
                    <td>nick@example.com</td>
                    <td>
                        <button className={classes.editBtn}>Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
  
export default List;