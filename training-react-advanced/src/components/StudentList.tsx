import React from "react";
import { Student } from "../types/Students";

interface StudentListProps {
  students: Student[];
  deleteStudent: (id: number) => void;
  editStudent: (student: Student) => void;
}

const StudentList: React.FC<StudentListProps> = ({
  students,
  deleteStudent,
  editStudent,
}) => {
  if (students.length > 0) {
    return (
      <ul className="space-y-2">
        {students.map((student) => (
          <li
            key={student.id}
            className="flex justify-between items-center p-4 border rounded-md"
          >
            <div>
              {student.name} - {student.age} - {student.major}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => editStudent(student)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => deleteStudent(student.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <h1 className="text-center font-bold text-2xl mt-5">
        Data masih kosong...
      </h1>
    );
  }
};

export default StudentList;
