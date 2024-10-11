import { useEffect, useRef, useState } from "react";
import ActionCard from "../cards/actionCard";
import LxtButton from "../buttons/lxtButton";
import "./landing.scss";
import "../../styles/productView.scss";
import ProductCard from "../cards/productCard";
import "../../styles/clientView.scss";
import "../../styles/testimonialView.scss";
import ProfileCard from "../cards/profileCard";

const actionCardData = [
  {
    id: 0,
    icon: "car-side-solid.svg",
    heading: "KAYAK (Car Rent)",
    content:
      "A car rental platform that offers an easy way to book rental vehicles across various locations. The platform provides a user-friendly interface for browsing available cars, comparing prices, and making reservations.",
    reflectingImg: "project1.png",
    tools: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: 1,
    icon: "briefcase-solid.svg",
    heading: "MENTRO (Job IT)",
    content:
      "A car rental platform that offers an easy way to book rental vehicles across various locations. The platform provides a user-friendly interface for browsing available cars, comparing prices, and making reservations.",
    reflectingImg: "jobIT.png",
    tools: ["Angular", "Express.js", "MySQL", "GCP"],
  },
  {
    id: 2,
    icon: "plane-departure-solid.svg",
    heading: "TripGuide",
    content:
      "A job-seeking platform that connects job seekers with IT companies. The platform provides job listings, a resume builder, and application tracking, catering to both applicants and recruiters.",
    reflectingImg: "tripGuide.png",
    tools: ["Next.js", "React", "CSS", "AWS"],
  },
  {
    id: 3,
    icon: "cart-shopping-solid.svg",
    heading: "SELL FEET PIC (E-Commerce Shop)",
    content:
      "An e-commerce platform that provides a seamless shopping experience for customers. It supports a wide range of products, secure payment gateways, and an easy-to-use admin panel for managing inventory.",
    reflectingImg: "ecommerce.png",
    tools: ["Vue.js", "Firebase", "StripeAPI"],
  },
  {
    id: 4,
    icon: "photo-film-solid.svg",
    heading: "TECHDOM (Social Media Agency)",
    content:
      "A dashboard for managing social media accounts, tracking performance metrics, and scheduling posts. It offers analytics, reports, and engagement tracking across multiple social media platforms.",
    reflectingImg: "socialMedia.png",
    tools: ["React", "GraphQL", "NodeJS", "GCP"],
  },
  {
    id: 5,
    icon: "person-running-solid.svg",
    heading: "OTO Fitness Tracker)",
    content:
      "A mobile and web application that helps users track their fitness goals, log workouts, monitor diet plans, and stay motivated with community challenges and personalized recommendations.",
    reflectingImg: "fitness.png",
    tools: ["React Native", "Redux", "NodeJS"],
  },
];

const productCardData = [
  {
    id: 0,
    icon: "vector1.png",
    title: "Custom Web Applications",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
  {
    id: 1,
    icon: "vector3.png",
    title: "Full-Stack Development",
    description:
      "From front-end design to back-end architecture, our full-stack development services cover every aspect of web app creation, ensuring seamless integration and performance.",
  },
  {
    id: 2,
    icon: "vector2.png",
    title: "Responsive UI/UX Design",
    description:
      "Our team crafts intuitive, mobile-responsive interfaces that enhance user experience, ensuring your web app looks and performs flawlessly on all devices.",
  },
  {
    id: 3,
    icon: "vector4.png",
    title: "API Integration",
    description:
      "We offer robust API integration services to connect your web app with third-party services, enhancing functionality and streamlining operations.",
  },
  {
    id: 4,
    icon: "vector6.png",
    title: "Cloud-Based Solutions",
    description:
      "Our cloud-based development services ensure that your web applications are scalable, reliable, and secure, with easy deployment and management.",
  },
  {
    id: 5,
    icon: "vector5.png",
    title: "Ongoing Support & Maintenance",
    description:
      "We provide continuous support and maintenance to keep your web app up-to-date, secure, and running smoothly, ensuring long-term success.",
  },
];

const productCardData2 = [
  {
    id: 0,
    icon: "vector7.png",
    title: "Tailored Solution",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
  {
    id: 1,
    icon: "vector8.png",
    title: "Comprehensive Services",
    description:
      "From building visually stunning websites to developing powerful e-commerce platforms, managing content systems, and optimizing for search engines, we provide end-to-end digital services.",
  },
  {
    id: 2,
    icon: "vector9.png",
    title: "Mobile-Responsive Design",
    description:
      "Our mobile-responsive design services ensure that your site looks and functions flawlessly on all devices, providing a seamless experience for your users.",
  },
  {
    id: 3,
    icon: "vector10.png",
    title: "Proven SEO Strategies",
    description:
      "Our SEO optimization services are designed to improve search engine rankings & drive targeted traffic to your site, helping reach more customers & grow your business.",
  },
  {
    id: 4,
    icon: "vector11.png",
    title: "Expert App Development",
    description:
      "Our experienced development team can bring your ideas to life. We build apps that are not only functional and user-friendly but also scalable and secure, meeting the demands of your business.",
  },
  {
    id: 5,
    icon: "vector12.png",
    title: "Client-Centric Approach",
    description:
      "Your success is our success. We prioritize clear communication, transparency, and collaboration throughout every project.",
  },
];

const TestimonialView = () => {
  return (
    <>
      <section id="about" className="testimonial-container">
        <div className="testimonial-heading">
          <span>What Others Say About our Services</span>
        </div>
        <div className="testimonial-card-container">
          <ProfileCard
            img={"profile1.png"}
            name={"Richel leblanch"}
            designation={"COO of DEF Corp."}
            summary={
              "I've never met a web developer who cares about success like TheTechBus does."
            }
          />
          <ProfileCard
            img={"profile2.png"}
            name={"James Lee"}
            designation={"CFO of Acme Co."}
            summary={
              "I thought it was impossible to make a website as beautiful as our product, but TheTechBus proved me wrong."
            }
          />
        </div>
      </section>
    </>
  );
};

const ClientView = () => {
  return (
    <>
      <section id="client" className="client-container">
        <div className="client-heading">Trusted Clients</div>
        <div>Worked with Startup funded by Accel India & Ycombinator</div>
        <div className="client-img-container">
          <img src="volonte.png" />
          <img src="ltfinance.png" />
          <img src="axis.png" />
          <img src="tresemme.png" />
        </div>
      </section>
    </>
  );
};

const ProductView = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const intervalRef = useRef(null);

  function startAutoSlide() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setActiveProduct((prevProduct) => (prevProduct === 0 ? 1 : 0));
    }, 10000);
  }

  function handleSetAutoSlide(index) {
    clearInterval(intervalRef.current);
    setActiveProduct(index);

    startAutoSlide();
  }

  useEffect(() => {
    startAutoSlide();

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <section id="product" className="product-container">
        <div className="product-heading">
          <span>A Dedicated Team of Innovators:</span>
          {activeProduct == 0 ? (
            <span>Empowering Businesses with Cutting-Edge Solutions</span>
          ) : (
            <span>Product Managers, Engineers, and Designers</span>
          )}
        </div>
        <div className="card-container">
          <div
            className={`card-data-1 ${
              activeProduct === 0 ? "slide-in" : "slide-out"
            }`}
          >
            {productCardData.map((cd) => (
              <ProductCard
                icon={cd.icon}
                title={cd.title}
                description={cd.description}
              />
            ))}
          </div>
          <div
            className={`card-data-2 ${
              activeProduct === 1 ? "slide-in" : "slide-out"
            }`}
          >
            {productCardData2.map((cd) => (
              <ProductCard
                icon={cd.icon}
                title={cd.title}
                description={cd.description}
              />
            ))}
          </div>
        </div>
        <div className="slider-dots">
          <span
            style={{
              backgroundColor:
                activeProduct == 0 ? "#4996f0" : "rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => handleSetAutoSlide(0)}
          ></span>
          <span
            style={{
              backgroundColor:
                activeProduct == 1 ? "#4996f0" : "rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => handleSetAutoSlide(1)}
          ></span>
        </div>
      </section>
    </>
  );
};

const ServiceView = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <>
      <section id="service" className="service-container">
        <div className="service-heading">
          <span>A Portfolio of Our Accomplised Projects</span>
        </div>
        <div className="service-content">
          <div className="card-container">
            {actionCardData.map((cd) => (
              <>
                {activeCard == cd.id ? (
                  <ActionCard
                    id={cd.id}
                    totalSize={actionCardData.length}
                    icon={cd.icon}
                    heading={cd.heading}
                    content={cd.content}
                    enableContent={true}
                    setActiveCard={setActiveCard}
                  />
                ) : (
                  <ActionCard
                    id={cd.id}
                    totalSize={actionCardData.length}
                    icon={cd.icon}
                    heading={cd.heading}
                    content={cd.content}
                    enableContent={false}
                    setActiveCard={setActiveCard}
                  />
                )}
              </>
            ))}
          </div>
          <div className="img-container">
            {actionCardData.map((cd) => (
              <>
                {activeCard == cd.id && (
                  <div className="content-img-right">
                    <img src={cd.reflectingImg} />
                    <div>
                      {cd.tools.map((tool) => (
                        <span>{tool}</span>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const HomeView = () => {
  return (
    <>
      <section id="home" className="home-container">
        <div className="text-container">
          <span>
            Transforming Ideas into Digital Success:{" "}
            <span>An Innovative Solution</span>
          </span>
          <span>
            At the heart of innovation, we provide tailored digital solutions
            designed to elevate your business. Our team turns your ideas into
            powerful, scalable technologies, ensuring growth, efficiency, and a
            competitive edge in the digital landscape. Let us partner with you
            to transform your vision into a reality.
          </span>
          <span>
            <LxtButton text={"Accepting New Projects"} />
          </span>
        </div>
        <div className="vector-container">
          <img src="home.png" width={"100%"} />
        </div>
      </section>
      <div className="home-stats">
        <div className="stats-container">
          <div>
            <span>#24</span>
            <span>Completed Projects</span>
          </div>
          <div>
            <span>95%</span>
            <span>Client Retention Rate</span>
          </div>
          <div>
            <span>10+</span>
            <span>Diverse Industries</span>
          </div>
          <div>
            <span>5+</span>
            <span>Global Clients</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Landing() {
  return (
    <>
      <HomeView />
      <ServiceView />
      <ProductView />
      <ClientView />
      <TestimonialView />
    </>
  );
}
