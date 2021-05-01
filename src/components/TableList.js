import React from "react";

const TableList = ({ item }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{item.name}</td>
          <td>{item.capital}</td>
          <td>{item.population}</td>
          <td>{item.region}</td>
        </tr>
      </tbody>
    </>
  );
};

export default TableList;
