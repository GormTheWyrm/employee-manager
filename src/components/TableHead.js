import React from "react";
import "../App.css";

// need to figure out how to make this appear as a single row in a table... 
//probably do that from directory
function TableHead(props) {
    return (
        <tr>
            <th scope={"col"}>ID</th>
            <th scope={"col"}>First Name</th>
            <th scope={"col"}>Last Name</th>
            <th scope={"col"}>Department</th>
            <th scope={"col"}>Role</th>
            <th scope={"col"}>Salary</th>
          
            
        </tr>
        );
}
export default TableHead;

    // this should be a single row of informaion; 
    //so a bunch of columns displaying a specific stat for each empoloyee
