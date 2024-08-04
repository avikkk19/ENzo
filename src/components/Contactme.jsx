import React, { useState } from "react";
import Section from "./Section";
import emailjs from "emailjs-com";
import Button from "./Button";
import { LeftLine } from "./design/Pricing";
import { RightLine } from "./design/Pricing";

const Contactme = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("");

  const sendEmail = async () => {
    if (!name || !email || !message) {
      setStatusMessage("Please fill in all the fields");
      setStatusColor("orange");
      return;
    }

    try {
      let response = await emailjs.send(
        "service_8x08u2r",
        "template_6vqktlp",
        {
          from_email: email,
          from_name: name,
          message: message,
        },
        "vMyMpzPERljGlEY8p"
      );
      console.log("SUCCESS!", response.status, response.text);
      setStatusMessage("Email sent successfully");
      setStatusColor("green");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("There was an error sending the email");
      setStatusColor("red");
    }
  };

  return (
    <Section className=" overflow-hidden">
      <div className="container lg:-mt-12 mt-2 relative lg:flex" id="contact">
        <div className="lg:mb-36 my-12 bg-n-8 p-8 rounded-3xl lg:ml-[360px]">
          <h1 className="h1 text-color-1 uppercase">Contact Us.</h1>
          <p className="h7  lg:mb-10"> Through Email to know us better.</p>
          <div className="relative">
            <label className="h3 text-2xl   capitalize" htmlFor="name">
              Enter your:
            </label>
            <input
              className="p-2.5 w-80 mt-3  rounded-2xl mb-6 lg:mb-10"
              type="text"
              name="name"
              id="name"
              placeholder="Name here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <div className="relative lg:-m-8 ">
              <LeftLine />
              <RightLine />
            </div>
            <label className="h3 text-2xl capitalize" htmlFor="email">
              Enter your:
            </label>
            <input
              className="p-2.5 mt-3 w-80 rounded-2xl  mb-6"
              type="email"
              name="email"
              id="email"
              placeholder="Email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label className="h3 text-2xl capitalize" htmlFor="message">
              Enter your :
            </label>
            <textarea
              className="p-2.5 mt-3 w-80 rounded-2xl  mb-6"
              name="message"
              id="message"
              placeholder="Message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <p
              id="statusMessage"
              style={{ color: statusColor }}
              className="mt-4"
            >
              {statusMessage}
            </p>
            <Button
              className="lg:mb-32 ml-[25px] mb-12 lg:mt-10 lg:ml-[140px] lg:w-80"
              onClick={sendEmail}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contactme;
