import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";
//import { SMTPClient } from 'emailjs';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Zorunlu";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Geçersiz e-posta adresi.";
    }
    return error;
  }

  const SERVICE_ID = "service_p2qby3m"
  const TEMPLATE_ID = "template_6myw6fo"
  const PUBLIC_KEY = "Dg9Ke35rdU-swI1yg"
  const USER_TOKEN = "tnfIHfiEKWkNQOBhkmZQu"

  /*const client = new SMTPClient({
    user: 'user',
    password: 'password',
    host: 'smtp.your-email.com',
    ssl: true,
  });*/

  
  const mesajGonder = () => {
    /*client.send(
      {
        text: 'i hope this works',
        from: 'derleme.19@gmail.com',
        to: 'ncpyolcu@gmail.com',
        cc: '',
        subject: 'testing emailjs',
      },
      (err, message) => {
        console.log(err || message);
      }
    );*/
    const templateParams = {
      name: 'James',
      notes: 'Check this out!'
    };

    emailjs.send(SERVICE_ID,TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(function(response) {
        console.log('SUCCESS!', response?.status, response?.text);
      }, function(err) {
        console.log('FAILED...', err);
      });
  }

  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">İletişime Geçin.</h4> 
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={async (values) => { //TODO mesajı RAsoft gmaile bağla
                  await sendMessage(500);
                  alert(JSON.stringify(values, null, 2));
                  // show message

                  messageRef.current.innerText =
                    "Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.";
                  // Reset the values 
                  values.name = "";
                  values.email = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = ''
                  }, 2000)
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="form-group">
                        <Field
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="İsim"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <Field
                        as="textarea"
                        id="form_message"
                        name="message"
                        placeholder="Mesaj"
                        rows="4"
                        required="required"
                      />
                    </div>

<<<<<<< HEAD
                    <button type="submit" className="butn bord" onClick={mesajGonder}>
                      <span>Mesajı Gönderin</span>
=======
                    <button type="submit" className="butn bord">
                      <span>Gönder</span>
>>>>>>> 840ee304c36b356ceea6da3a8efc8540e322387b
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Bize Ulaşın.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{ContactFromDate.email}</a>
                </h5>
                <h5>{ContactFromDate.phone}</h5>
              </div>
              <h3 className="wow" data-splitting>
                Adres
              </h3>
              <div className="item">
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6>
              </div>
              <div className="social mt-50">
              <a href="https://wa.me/905413566434" className="icon">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.facebook.com/rasoft.sosyal/" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/rasoftcomtr" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/rasoft-sosyal/" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
