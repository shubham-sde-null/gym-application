import React from "react";
import "./Feedback.css";
//this steps are provided by the emailjs just go in documentation and copy the steps shown their
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import SubmittedFeedback from "./SubmittedFeedback";
function Feedback() {
  const [successfull, setSuccessfull] = useState("");
  const form = useRef();
  const nameinput = useRef();
  const emailinput = useRef();
  const textinput = useRef();
  const sendEmail = (e) => {
    setSuccessfull("ok");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9dw3zac",
        "template_j60rqym",
        form.current,
        "1n5OEjAcwvWicIXUA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    nameinput.current.value = "";
    emailinput.current.value = "";
    textinput.current.value = "";
  };
  return (
    <div className="feedback">
      {successfull === "ok" ? (
        <SubmittedFeedback />
      ) : (
        <>
          {" "}
          <p>Your feedback is very precious</p>
          <form ref={form} onSubmit={sendEmail}>
            <input
              ref={nameinput}
              type="text"
              name="name"
              id="name"
              placeholder="enter your name"
            />

            <input
              ref={emailinput}
              type="email"
              id="email"
              name="email"
              placeholder="enter your email"
            />
            <textarea
              ref={textinput}
              name="message"
              rows="7"
              placeholder="Your Feedback"
              required
            ></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Feedback;
