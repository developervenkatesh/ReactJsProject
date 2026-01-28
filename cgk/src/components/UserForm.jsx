import { useState } from "react";
import axios from "axios";
import "./usersForm.css";

const UserForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    gender: "",
    experience: "",
    user_summary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.msg || "User added successfully");
        onClose();
      } else {
        alert(result.msg || "Failed to add user");
      }
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Sign In</h2>

      <div className="row">
        <input
          name="first_name"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          name="last_name"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="row">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />
      </div>

      <div className="row">
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="row">
        <input
          type="number"
          name="experience"
          placeholder="Experience (Years)"
          onChange={handleChange}
        />
      </div>

      <textarea
        className="full-width"
        name="user_summary"
        placeholder="User Summary"
        onChange={handleChange}
      />

      <div className="file-upload">
        <input
          className="fileUploadInput"
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn primary">
          Save
        </button>
        <button type="button" className="btn secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserForm;
