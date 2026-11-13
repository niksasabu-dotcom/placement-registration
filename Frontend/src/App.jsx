import { useState } from "react";
import axios from "axios";

function App() {
  const [f_name, setFname] = useState("");
  const [l_name, setLname] = useState("");
  const [p_no, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [skills, setSkills] = useState("");
  const [u_name, setUsername] = useState("");
  const [pwd, setPassword] = useState(""); 

  const [students, setStudents] = useState([]);

  function register() {
    axios.post("http://localhost:5000/register", {
      f_name,
      l_name,
      p_no,
      email,
      qualification,
      skills,
      u_name,
      pwd
    })
      .then((res) => {
        alert(res.data);
      });
     
}

function display() {
  axios.get("http://localhost:5000/display")
    .then((res) => {
      setStudents(res.data);
    });
}

return (
  <div align="center">

    <h1>Placement Registration</h1>

    <input
      type="text"
      placeholder="First Name"
      onChange={(e) => setFname(e.target.value)}
    />
    <br /><br />

    <input
      type="text"
      placeholder="Last Name"
      onChange={(e) => setLname(e.target.value)}
    />
    <br /><br />

    <input
      type="text"
      placeholder="Phone"
      onChange={(e) => setPhone(e.target.value)}
    />
    <br /><br />

    <input
      type="email"
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
    />
    <br /><br />

    <input
      type="text"
      placeholder="Qualification"
      onChange={(e) => setQualification(e.target.value)}
    />
    <br /><br />

    <input
      type="text"
      placeholder="Skills"
      onChange={(e) => setSkills(e.target.value)}
    />
    <br /><br />

    <input
      type="text"
      placeholder="Username"
      onChange={(e) => setUsername(e.target.value)}
    />
    <br /><br />

    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
    />
    <br /><br />

    <button onClick={register}>
      Register
    </button>

    &nbsp;&nbsp;

    <button type="button"
      onClick={display}>
      Display
    </button>

    <h2>Registered Job Seekers</h2>

    <table border="1">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Qualification</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.f_name}</td>
            <td>{student.l_name}</td>
            <td>{student.p_no}</td>
            <td>{student.email}</td>
            <td>{student.qualification}</td>
            <td>{student.skills}</td>
          </tr>
        ))}
      </tbody>
    </table>

  </div>
);
}

export default App;