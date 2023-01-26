import React, { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";

const EmployeePage = () => {
    const [employees, setEmployees] = useState([]);
    const [emailList, setEmailList] = useState([]);
    const [employeeSummaries, setEmployeeSumaries] = useState([]);

    function getEmployeeData() {
        try {
            fetch("https://jsonplaceholder.typicode.com/users")
              .then(resp => resp.json())
              .then((data) => {
                console.log("Berhasil manggil API");
                // setEmployees(data);
                setEmployees(data);
              });
          } catch (error) {
            console.log("Error : " + error.message);
          }
    }

    useEffect(() => {
        console.log("useEffect once terpanggil");
        getEmployeeData();
    }, []);

    useEffect(() => {
        console.log("Employees terpanggil");
        if (employees.length > 0) {
            //Email
            const list = employees.map((item) => item.email);
            setEmailList(list);

            //Summary
            const temp = employees.map((item => {
                return {
                    name: item.name,
                    email: item.email,
                    companyName: item.company.name
                }
            }));
            setEmployeeSumaries(temp);
        }
    }, [employees]);

    useEffect(() => {
        if (emailList.length > 0) {
            const emailSortDesc = emailList.sort((a, b) => {
                const emailA = a.toLowerCase();
                const emailB = b.toLowerCase();
                if (emailA < emailB) {
                  return 1;
                }
                if (emailA > emailB) {
                  return -1;
                }
                return 0;
            });
            setEmailList(emailSortDesc);
            console.log("Sort descending", emailSortDesc);
        }
    }, [emailList]);

    return (
        <div>
            <EmployeeTable 
                listPegawai={employees}
                headerPertama="Nama"
                headerKedua="Email"
                headerKetiga="No. Handphone"
            />
            {/* {emailList.length > 0 && emailList.map((item) => <div>{item}</div>)} */}
            {employeeSummaries.length > 0 && JSON.stringify(employeeSummaries)}
        </div>
        
    );
};

export default EmployeePage;
