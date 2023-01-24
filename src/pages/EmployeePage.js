import React, { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";

const EmployeePage = () => {
    const [foods, setFoods] = useState([]);

    function createData(
        name,
        calories,
        fat,
        carbs,
        protein,
      ) {
        return { name, calories, fat, carbs, protein };
    }

    useEffect(() => {
        const rows = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
        ];

        setFoods(rows);
    }, []);

    console.log("Employee Page : ", foods);

    return (
        <div>
            <EmployeeTable 
                foods={foods}
                judulKolomPertama="Dessert"
            />
        </div>
    );
};

export default EmployeePage;
