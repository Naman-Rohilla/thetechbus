import menuItems from "../../jsons/menuItems";
import "./footer.scss";

const Form = () => {
  return (
    <div className="form">
      <div className="input-form-container">
        <input placeholder="Full Name" />
        <input placeholder="Company Name" />
      </div>
      <div className="input-form-container">
        <input placeholder="Email" />
        <input placeholder="Phone no." />
      </div>
      <div className="text-area-container">
        <textarea className="text-area" placeholder="Describe Your Idea" />
      </div>
      <div className="button-container">
        <span>Send Message</span>
      </div>
    </div>
  );
};

const ConnectText = () => {
  return (
    <div className="content-container">
      <span className="connect-heading">How Does It Work?</span>

      <div className="connect-steps">
        <span>
          <span>1. Intro Call</span>
          <span>
            During a 30-minute meeting, our domain expert dives into your
            business and describes the steps for future collaboration.
          </span>
        </span>
        <span>
          <span>2. Discovery Call</span>
          <span>
            Together with you, our technical team defines the user flow, feature
            list, and project risks.
          </span>
        </span>
        <span>
          <span>3. Project Planning</span>
          <span>
            We provide the implementation plan, timelines, and estimations for
            your project.
          </span>
        </span>
      </div>
    </div>
  );
};

const LinkContainer = () => {
  return (
    <div className="link-container">
      <div className="link-url">
        <div>
          <span>Company</span>
          {menuItems.map((mt, index) => (
            <a key={index} href={mt.redirect} className="item">
              {mt.link}
            </a>
          ))}
        </div>

        <div className="contact-footer">
          <span>Contact</span>
          <span>support@thetechbus.com</span>
          <span>+91-8553388439</span>
        </div>
      </div>
      <div className="title-footer">
        <img src="logo.png" />
        <span>The Tech Bus</span>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <>
      <section id="contact" className="footer-container">
        <div className="work-container">
          <ConnectText />
          <Form />
        </div>
        <div className="divide-line"></div>
        <LinkContainer />
        <div className="social-media">
          <div>
            <a href="https://www.linkedin.com/company/thetechbusconnects">
              <img height={25} width={25} src="linkedin-brands-solid.svg" />
            </a>
            <a href="https://www.instagram.com/the_tech_bus?igsh=MXAxd3BqMXhzenRqOQ%3D%3D&utm_source=qr">
              <img height={25} width={25} src="instagram-brands-solid.svg" />
            </a>
          </div>
          <span>
            Join us in crafting customized solutions that drive your business
            forward.
          </span>
        </div>
      </section>
    </>
  );
}
