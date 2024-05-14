import React, { useState, useEffect } from "react";
import { Student } from "../types/Students";

interface StudentFormProps {
  addStudent: (student: Student) => void;
  editStudent: (student: Student) => void;
  currentStudent: Student | null;
}

const StudentForm: React.FC<StudentFormProps> = ({
  addStudent,
  editStudent,
  currentStudent,
}) => {
  const [student, setStudent] = useState<Student>(
    currentStudent || { id: 0, name: "", age: 0, major: "" }
  );

  useEffect(() => {
    if (currentStudent) {
      setStudent(currentStudent);
    }
  }, [currentStudent]);

  const handleChange = (e: {
    target: { name: number | string; value: number | string };
  }) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (student.id === 0) {
      addStudent({ ...student, id: Date.now() });
    } else {
      editStudent(student);
    }
    setStudent({ id: 0, name: "", age: 0, major: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 border rounded-md"
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={student.age}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 border rounded-md"
      />
      <input
        name="major"
        placeholder="Major"
        value={student.major}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 border rounded-md"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {student.id === 0 ? "Add Student" : "Edit Student"}
      </button>
    </form>
  );
};

export default StudentForm;
