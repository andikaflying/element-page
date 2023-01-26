import React, { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";

const EmployeePage = () => {
    const [employees, setEmployees] = useState([]);

    function getEmployeeData() {
        try {
            fetch("https://jsonplaceholder.typicode.com/users")
              .then(resp => resp.json())
              .then((data) => {
                // setEmployees(data);
                setEmployees(data);
              });
          } catch (error) {
            console.log("Error : " + error.message);
          }
    }

    useEffect(() => {
        getEmployeeData();
    }, []);

    return (
        <div>
            <EmployeeTable 
                listPegawai={employees}
                headerPertama="Nama"
                headerKedua="Email"
                headerKetiga="No. Handphone"
            />
        </div>
    );
};

export default EmployeePage;
