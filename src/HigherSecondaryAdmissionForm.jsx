import { useState } from "react";

function HigherSecondaryAdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const courses = ["Biology", "Computer Science", "Commerce", "Humanities"];

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      errors.name = "Name should not contain numbers or special characters.";
    }
    if (!formData.address.trim()) errors.address = "Address is required.";
    if (!/^\d{10}$/.test(formData.mobile)) errors.mobile = "Mobile number must be 10 digits.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Invalid email address.";
    if (!formData.gender) errors.gender = "Please select a gender.";
    if (!formData.dob) errors.dob = "Date of birth is required.";
    if (!formData.course) errors.course = "Please select a course.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert(`Data stored successfully:\n${JSON.stringify(formData, null, 2)}`);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      course: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Higher Secondary Admission Form</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="row g-3">
          <div className="col-12">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <div className="text-danger mt-1">{errors.name}</div>}
          </div>
          <div className="col-12">
            <label className="form-label">Address</label>
            <textarea
              name="address"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
            {errors.address && <div className="text-danger mt-1">{errors.address}</div>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Mobile</label>
            <input
              type="text"
              name="mobile"
              className="form-control"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="10-digit mobile number"
            />
            {errors.mobile && <div className="text-danger mt-1">{errors.mobile}</div>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <div className="d-flex align-items-center">
              <div className="form-check me-3">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
            {errors.gender && <div className="text-danger mt-1">{errors.gender}</div>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="form-control"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <div className="text-danger mt-1">{errors.dob}</div>}
          </div>
          <div className="col-12">
            <label className="form-label">Course</label>
            <select
              name="course"
              className="form-select"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">--Select a course--</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {errors.course && <div className="text-danger mt-1">{errors.course}</div>}
          </div>
          <div className="col-12 d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HigherSecondaryAdmissionForm;
