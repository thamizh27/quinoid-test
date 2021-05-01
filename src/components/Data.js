import React from "react";
import TableList from "./TableList";

const Data = ({ data }) => {
  return (
    <div className="table-div">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Region</th>
          </tr>
        </thead>
        {data.map((item, index) => (
          <TableList key={index} item={item} />
        ))}
      </table>
    </div>
  );
};

export default Data;
