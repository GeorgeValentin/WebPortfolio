import emailjs from "@emailjs/browser";

import "./ContactPage.styles.scss";
import { useRef, useState } from "react";

const initialFormState = {
  from_name: "",
  user_email: "",
  message: "",
};

const ContactPage = () => {
  const form = useRef();
  const [formState, setFormState] = useState(initialFormState);

  const onInputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_028bjak",
        "template_lslgucl",
        form.current,
        "StzQ7Tw77KEl0sMcM"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          setFormState(initialFormState);
        },
        (error) => {
          console.log(error);
          alert("The email was not sent!");
        }
      );
  };

  return (
    <div>
      <h1 className="contact-page-header fs-1 fw-bolder text-center">
        Contact Me
      </h1>

      <form
        className="contact-page-form d-flex justify-content-center align-items-center flex-column gap-2 mt-2"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="d-flex justify-content-center align-items-center gap-2 flex-column w-100">
          <label className="fw-bold">Name</label>
          <input
            className="contact-page-form_field"
            type="text"
            name="from_name"
            placeholder="Name"
            value={formState.from_name}
            onChange={onInputChangeHandler}
            required
          />
        </div>

        <div className="d-flex justify-content-center align-items-center gap-2 flex-column w-100">
          <label className="fw-bold">Email</label>
          <input
            className="contact-page-form_field"
            type="email"
            name="user_email"
            placeholder="Email"
            value={formState.user_email}
            onChange={onInputChangeHandler}
            required
          />
        </div>

        <div className="d-flex justify-content-betcenterween align-items-center gap-2 flex-column w-100">
          <label className="fw-bold">Message</label>
          <textarea
            id="contact-page-form_message-field"
            className="contact-page-form_field"
            name="message"
            placeholder="Message"
            value={formState.message}
            onChange={onInputChangeHandler}
            required
          />
        </div>
        <input
          className="contact-page-form_submit btn btn-outline-dark fw-bold border border-2 border-dark mt-3"
          type="submit"
          value="Send"
        />
      </form>

      <section className="contact-page-form-information">
        <h4 className="fw-bold">Contact Details:</h4>

        <div className="contact-page-form-information_elements">
          <div className="d-flex justify-content-between">
            <img
              className="contact-page-form-information_logo"
              src="../../../../images/phone.png"
              alt="phone"
            />

            <span className="fst-italic">+40 729-179-032</span>
          </div>

          <div className="d-flex justify-content-between">
            <img
              className="contact-page-form-information_logo"
              src="../../../../images/mail.png"
              alt="mail"
            />

            <span className="fst-italic">george.cujba15@gmail.com</span>
          </div>
        </div>

        {/* <div className="fst-italic">
          I usually respond to emails in about 1 day!
        </div>
        <div className="fst-italic">
          You can also call me at my phone number:
          <span className="fw-bold">+40 729-179-032</span>
        </div> */}
      </section>
    </div>
  );
};

export default ContactPage;
