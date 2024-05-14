import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { Student } from "./types/Students";

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);

  const addStudent = (student: Student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id: number) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const editStudent = (student: Student) => {
    setStudents(students.map((stu) => (stu.id === student.id ? student : stu)));
    setCurrentStudent(null);
  };
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Management</h1>
      <div className="flex flex-col gap-3">
        <StudentForm
          addStudent={addStudent}
          editStudent={editStudent}
          currentStudent={currentStudent}
        />
        <StudentList
          students={students}
          deleteStudent={deleteStudent}
          editStudent={setCurrentStudent}
        />
      </div>
    </div>
  );
}

export default App;
