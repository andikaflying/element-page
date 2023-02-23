import React, { useCallback, useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import { get, isEqual, isEmpty } from "lodash";
import Button from "../components/Button";

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [emailList, setEmailList] = useState([]);
  const [employeeSummaries, setEmployeeSumaries] = useState([]);

  function getEmployeeData() {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
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
    if (!isEmpty(employees)) {
      //Email
      const list = employees.map((item) => item.email);
      setEmailList(list);

      //Summary
      const temp = employees.map((item) => {
        return {
          name: item.name,
          email: item.email,
          companyName: item.company.name,
        };
      });

      lodashDemo();
    }
  }, [employees]);

  const lodashDemo = () => {
    //get lat lng second object
    console.log("Line 51 ", employees);
    const latLngSecond = get(employees[1], "address.geo");
    console.log("lodash ", latLngSecond);

    //equals
    const addressList = [];
    employees.forEach((item) => {
      if (isEqual(get(item, "id") % 2, 0)) {
        const address =
          get(item, "address.street") +
          " " +
          get(item, "address.suite") +
          " " +
          get(item, "address.city");
        addressList.push(address);
      }
    });
    console.log(addressList);
  };

  useEffect(() => {
    if (emailList.length > 0) {
      setEmailList((prevState) =>
        prevState.sort((a, b) => {
          const emailA = a.toLowerCase();
          const emailB = b.toLowerCase();
          if (emailA < emailB) {
            return 1;
          }
          if (emailA > emailB) {
            return -1;
          }
          return 0;
        })
      );

      console.log("Sort descending", emailList);
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
      <Button />
    </div>
  );
};

export default EmployeePage;
