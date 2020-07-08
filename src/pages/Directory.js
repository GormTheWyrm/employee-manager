import React from "react";
import OptionsTab from "../components/OptionsTab";
import "../App.css";
import TableHead from "../components/TableHead"
import TableRow from "../components/TableRow"
// consider renaming DirectoryTable?
import EmployeeList from "../utils/EmployeeList.json"

class Directory extends React.Component {
    state = {
        filter: "All",  //ideally I shoudl add some code to change things into lowercase
        sort: "Default",
        viewList: EmployeeList
        //this should initialize view list to the json data
    };

    setFilter = (event) => {
        console.log("setFilter function");
        let myFilter = event.target.value;
        console.log(myFilter);
        this.setState({ filter: myFilter });
        let newArray = EmployeeList.filter(emp => emp.department === myFilter);
        if (myFilter === "all") {
            this.setState({ viewList: EmployeeList });    //Worked!
        } else {
            this.setState({ viewList: newArray });    //did not work!
        }
    }

    setSort = (event) => {
        console.log("setSort function");
        let mySort = event.target.value;
        console.log(mySort);
        let sortingArray = this.state.viewList;
        // sortingArray.sort(function = (a,b) => {});
        sortingArray.sort(function(a,b) {
            //a.mySort  // that wont work, will it?
            
        });

        // let sortedArray = this.state.viewList.sort();   //testing; not a good function!
        // I need to sort objects by a property...
        // let sortedArray = this.state.viewList.sort();

        // console.log(sortedArray);

        /*
        array.sort(compareFunction)
        
        function(a, b){return a-b}
        When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
        
        Example:
        
        When comparing 40 and 100, the sort() method calls the compare function(40,100).
        
        The function calculates 40-100, and returns -60 (a negative value).
        
        The sort function will sort 40 as a value lower than 100.
        */

    }




    // componentDidMount() {

    //     console.log("mounted");

    // }
    // componentDidUpdate() {

    //     console.log("component did update")
    // }






    render() {
        return (
            <div>
                <OptionsTab
                    setFilter={this.setFilter}
                    setSort={this.setSort}
                    filter={this.state.filter}
                    sort={this.state.sort}
                />
                <table className="table table-dark">
                    <thead>
                        <TableHead />
                    </thead>
                    <tbody>
                        {this.state.viewList.map(employee => (
                            <TableRow
                                key={employee.id}
                                myId={employee.id}
                                firstName={employee.firstName}
                                lastName={employee.lastName}
                                department={employee.department}
                                role={employee.role}
                                salary={employee.salary}
                            />
                        ))}

                    </tbody>
                    {/* <p>TestVar {this.state.testVar}</p> */}
                </table>
            </div>
        );

    }
}
export default Directory;