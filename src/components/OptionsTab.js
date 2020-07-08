import React from "react";
import "../App.css";

function OptionsTab(props) {
    return (

        <div>
            <div className="row">
                <div className={"col-12"}>
                    <h5>Instructions:</h5> 
                     <p>Select a value to sort and a value to filter by. </p>
                    <p>Currently Filtered By: {props.filter} department{props.filter === "all" ? "s" : ""} </p>
                    <p>Currently Sorted By: {props.sort}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <select className="custom-select" value={props.filter} onChange={props.setFilter}>                       
                        <option value="all">Filter By: All</option>
                        <option value="Propaganda">Filter By: Propaganda Department</option>
                        <option value="Executive">Filter By: Executive Department </option>
                        <option value="Acquisitions">Filter By: Acquisitions Department</option>
                        <option value="Intelligence">Filter By: Intelligence Department</option>
                        
                    </select>
                </div>
                <div className="col-6">
                    <select className="custom-select" value={props.sort} onChange={props.setSort}>
                        <option value="default">Sort By: default </option>
                        <option value="id">Sort By: Id </option>
                        <option value="firstName">Sort By: First Name</option>
                        <option value="lastName">Sort By: Last Name</option>
                        <option value="department">Sort By: Department</option>
                    </select>

                </div>
            </div >
        </div >
    );
}
export default OptionsTab;