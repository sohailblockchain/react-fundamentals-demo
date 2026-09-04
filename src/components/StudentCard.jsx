function StudentCard({ name, course }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>Course: {course}</p>
    </div>
  );
}

export default StudentCard;
