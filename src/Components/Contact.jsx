import React from "react";

export default function (props) {
  const [result, setResult] = React.useState("");

  let myStyle = {
    backgroundColor : props.mode === 'dark'? '#1F1F1F':'white',
    color : props.mode === 'dark'? 'white':'black' 
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b6adfd6a-5df6-414c-868d-cd6c04dae568");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          ...myStyle,
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          width: "500px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2 style={{ ...myStyle, textAlign: "center"}}>Contact Us</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
          style={{
            ...myStyle,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
          style={{
            ...myStyle,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter Your phone number"
          required
          style={{
            ...myStyle,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <textarea
          name="message"
          placeholder="Enter Your Message Here"
          required
          style={{
            ...myStyle,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            minHeight: "100px",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            ...myStyle,
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "white",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Submit Form
        </button>
        <span style={{ ...myStyle, textAlign: "center", marginTop: "10px"}}>
          {result}
        </span>
      </form>
    </div>
  );
}

