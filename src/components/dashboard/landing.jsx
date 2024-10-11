import { useEffect, useRef, useState } from "react";
import ActionCard from "../../cards/actionCard";
import LxtButton from "../buttons/lxtButton";
import "./landing.scss";
import "../../styles/productView.scss";
import ProductCard from "../../cards/productCard";
import "../../styles/clientView.scss";
import "../../styles/testimonialView.scss";
import ProfileCard from "../../cards/profileCard";

const actionCardData = [
  {
    id: 0,
    icon: "css.svg",
    heading: "KAYAK (Car Rent)",
    content:
      "A car rental platform that offers an easy way to book rental vehicles across various locations. The platform provides a user-friendly interface for browsing available cars, comparing prices, and making reservations.",
    reflectingImg: "project1.png",
  },
  {
    id: 1,
    icon: "css.svg",
    heading: "MENTRO (Job IT)",
    content:
      "A car rental platform that offers an easy way to book rental vehicles across various locations. The platform provides a user-friendly interface for browsing available cars, comparing prices, and making reservations.",
    reflectingImg: "jobIT.png",
  },
  {
    id: 2,
    icon: "css.svg",
    heading: "TripGuide",
    content:
      "A job-seeking platform that connects job seekers with IT companies. The platform provides job listings, a resume builder, and application tracking, catering to both applicants and recruiters.",
    reflectingImg: "tripGuide.png",
  },
  {
    id: 3,
    icon: "css.svg",
    heading: "SELL FEET PIC (E-Commerce Shop)",
    content:
      "An e-commerce platform that provides a seamless shopping experience for customers. It supports a wide range of products, secure payment gateways, and an easy-to-use admin panel for managing inventory.",
    reflectingImg: "ecommerce.png",
  },
  {
    id: 4,
    icon: "css.svg",
    heading: "TECHDOM (Social Media Agency)",
    content:
      "A dashboard for managing social media accounts, tracking performance metrics, and scheduling posts. It offers analytics, reports, and engagement tracking across multiple social media platforms.",
    reflectingImg: "socialMedia.png",
  },
  {
    id: 5,
    icon: "css.svg",
    heading: "OTO Fitness Tracker)",
    content:
      "A mobile and web application that helps users track their fitness goals, log workouts, monitor diet plans, and stay motivated with community challenges and personalized recommendations.",
    reflectingImg: "fitness.png",
  },
];

const productCardData = [
  {
    id: 0,
    icon: "js.svg",
    title: "Custom Web Applications",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
  {
    id: 1,
    icon: "js.svg",
    title: "Custom Web Applications",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
  {
    id: 2,
    icon: "js.svg",
    title: "Custom Web Applications",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
  {
    id: 3,
    icon: "js.svg",
    title: "Custom Web Applications",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
  {
    id: 4,
    icon: "js.svg",
    title: "Custom Web Applications",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
  {
    id: 5,
    icon: "js.svg",
    title: "Custom Web Applications",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
];

const productCardData2 = [
  {
    id: 0,
    icon: "js.svg",
    title: "Tailored Solution",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
  {
    id: 1,
    icon: "js.svg",
    title: "Tailored Solution",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
  {
    id: 2,
    icon: "js.svg",
    title: "Tailored Solution",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
  {
    id: 3,
    icon: "js.svg",
    title: "Tailored Solution",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
  {
    id: 4,
    icon: "js.svg",
    title: "Tailored Solution",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
  {
    id: 5,
    icon: "js.svg",
    title: "Tailored Solution",
    description:
      "We offer custom website design and development services that are perfectly aligned with your brand identity and business goals.",
  },
];

const TestimonialView = () => {
  return (
    <>
      <div className="testimonial-container">
        <div className="testimonial-heading">
          <span>What Others Say About our Services</span>
        </div>
        <div className="testimonial-card-container">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </>
  );
};

const ClientView = () => {
  return (
    <>
      <div className="client-container">
        <div className="client-heading">Trusted Clients</div>
        <div>Worked with Startup funded by Accel India & Ycombinator</div>
        <div className="client-img-container">
          <img src="volonte.png" />
          <img src="ltfinance.png" />
          <img src="axis.png" />
          <img src="tresemme.png" />
        </div>
      </div>
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
      <div className="product-container">
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
      </div>
    </>
  );
};

const ServiceView = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <>
      <div className="service-container">
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
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const HomeView = () => {
  return (
    <>
      <div className="home-container">
        <div className="text-container">
          <span>
            Transforming Ideas into Digital Success:{" "}
            <span>An Innovative Solution</span>
          </span>
          <span>
            Join us in crafting customized solutions that drive your business
            forward.
          </span>
          <span>
            <LxtButton text={"Accepting New Projects"} color={"#7a70e8"} />
          </span>
        </div>
        <div className="vector-container">
          <img src="home.png" width={"100%"} />
        </div>
      </div>
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
