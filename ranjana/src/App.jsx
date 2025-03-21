import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", margin: "10px 0" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "10px", margin: "10px 0" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ padding: "10px", margin: "10px 0", height: "100px" }}
        />
        <button type="submit" style={{ padding: "10px", background: "blue", color: "white", border: "none", cursor: "pointer" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
