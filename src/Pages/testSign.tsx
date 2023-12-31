import { useState } from "react";
import axios from "axios";

interface SignUpFormState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const TestSign = () => {
  const [formData, setFormData] = useState<SignUpFormState>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    // e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8001/info", formData);
      console.log(formData)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <br />
          <input
            type="text"
            name="firstname"
            id="fname"
            onChange={handleChange}
            value={formData.firstname}
            required
            maxLength={20}
          />
          <br />
        </div>

        <div>
          <label htmlFor="lasttname">last Name</label>
          <br />
          <input
            type="text"
            name="lastname"
            id="lname"
            onChange={handleChange}
            value={formData.lastname}
            required
            maxLength={20}
          />
          <br />
        </div>

        <div>
          <label htmlFor="email">email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            required
            maxLength={40}
          />
          <br />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
            required
            maxLength={15}
          />
          <br />
        </div>

        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default TestSign;
