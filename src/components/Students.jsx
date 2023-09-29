import React, { useState } from "react";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";

const Students = () => {
  const [person, setPerson] = useState(
    JSON.parse(localStorage.getItem("student")) || []
  );
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const addStudent = (newPerson) => {
    let newStudent = [
      ...person,
      {
        id: Math.floor(Math.random() * 100000),
        ...newPerson,
      },
    ];

    localStorage.setItem("student", JSON.stringify(newStudent));
    setPerson(JSON.parse(localStorage.getItem("student")));
  };

  const deleteStudent = (id) => {
    let newStudent = person.filter((el) => el.id !== id);
    localStorage.setItem("student", JSON.stringify(newStudent));
    setPerson(JSON.parse(localStorage.getItem("student")));
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleEditShow = () => {
    setShow(true);
  };

  // const editChange = () => {
  //   handleEditShow();
  // };

  return (
    <div className="container d-flex justify-content-center flex-column">
      <div className="mt-3 d-flex flex-sm-column">
        <form className="">
          <input
            type="text"
            className="form-control mt-4"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {/* <div className="form-group">
          <select
            name="gender"
            id="gender"
            className="form-select form-control"
            onChange={(e) => setSearch(e.target.value)}
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div> */}
        <button className="btn btn-primary mt-4" onClick={handleShow}>
          Add Contact
        </button>
      </div>
      <AddStudent
        show={show}
        handleClose={handleClose}
        person={person}
        addStudent={addStudent}
      />
      <StudentList
        show={show}
        handleClose={handleClose}
        person={person}
        deleteStudent={deleteStudent}
      />

      <h1 className="fs-4">❌- Edit </h1>
      <h1 className="fs-4">❌- Search </h1>
      <h1 className="fs-4">✅- Add contact </h1>
      <h1 className="fs-4">✅- Delete </h1>
      <h1 className="fs-4">✅- Functional Component </h1>
      <h1 className="fs-4">✅- useState </h1>
    </div>
  );
};

export default Students;
