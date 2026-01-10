import { useState } from "react";
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
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
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
          onChange={handleChange}
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
