import React from "react";

const StudentList = ({ person, deleteStudent }) => {
  return (
    <div>
      <table className=" mt-3 table table-striped">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Firstname</th>
            <th className="text-center">LastName</th>
            <th className="text-center">Phone</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {person.length > 0 &&
            person.map((item, index) => (
              <tr key={item.id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{item.firstName}</td>
                <td className="text-center">{item.lastName}</td>
                <td className="text-center">{item.phone}</td>
                <td className="d-flex gap-3 d-flex justify-content-center">
                  <button className="btn btn-success">Edit</button>
                  <button
                    className="btn btn-danger text-center"
                    onClick={() => deleteStudent(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
