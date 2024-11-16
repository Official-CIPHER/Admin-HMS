import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  // useState for input field of Name
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // State for storing email
  const [email, setEmail] = useState("");

  // State for storing phone
  const [phone, setPhone] = useState("");

  // State for message
  const [message, setMessage] = useState("");

  // function that handle Form Message and send message
  const handleMessage = async (e) => {
    e.preventDefault();

    // That's the way to connect the backend Message sender to frontend by using axios
    try {
      await axios
        .post(
          "https://hospital-management-system-da7n.onrender.com/api/v1/message/send",
          { firstName, lastName, phone, email, message },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // it will notify the success once all data send
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      // if Error occured while post method then throw notification error
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container form-component message-form">
      <h2>Send Us A Message</h2>
      <form onSubmit={handleMessage}>
        <div>
          {/* first Name Input */}
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* Last Name Input */}
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          {/* Email Input */}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Phone Number Input */}
          <input
            type="number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <textarea
          rows={7}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
