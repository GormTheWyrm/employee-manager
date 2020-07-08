import React from "react";
import "../App.css";



function TableRow(props) {
    return (
        <tr>

            <td>
                <span>{props.myId}</span>
            </td>
            <td>
                <span>{props.firstName}</span>
            </td>
            <td>
                <span>{props.lastName}</span>
            </td>
            <td>
                <span>{props.department}</span>
            </td>
            <td>
                <span>{props.role}</span>
            </td>
            <td>
                <span>${props.salary}</span>
            </td>
     

        </tr>


    );
}
export default TableRow;

    // this should be a single row of informaion; 
    //so a bunch of columns displaying a specific stat for each empoloyee