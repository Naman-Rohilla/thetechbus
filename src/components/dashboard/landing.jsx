import { useEffect, useRef, useState } from "react";
import ActionCard from "../cards/actionCard";
import LxtButton from "../buttons/lxtButton";
import "./landing.scss";
import "../../styles/productView.scss";
import ProductCard from "../cards/productCard";
import "../../styles/clientView.scss";
import "../../styles/testimonialView.scss";
import ProfileCard from "../cards/profileCard";
import SectionView from "../section/sectionView";
import actionCardData from "../../jsons/actionCardData";
import productCardData from "../../jsons/productCardData";
import productCardData2 from "../../jsons/productCardData2";

const TestimonialView = () => {
  return (
    <>
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
    </>
  );
};

const ClientView = () => {
  return (
    <>
      <div className="client-subheading">
        Worked with Startup funded by Accel India & Ycombinator
      </div>
      <div className="client-img-container">
        <img src="volonte.png" />
        <img src="ltfinance.png" />
        <img src="axis.png" />
        <img src="tresemme.png" />
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
      <div className="product-heading">
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
    </>
  );
};

const ServiceView = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <>
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
            <a href="#contact">
              <LxtButton text={"Accepting New Projects"} />
            </a>
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
      <SectionView
        id="service"
        backgroundColor={"rgba(229, 231, 235, 0.3)"}
        heading={"A Portfolio of Our Accomplished Projects"}
      >
        <ServiceView />
      </SectionView>
      <SectionView
        id="product"
        backgroundColor="white"
        heading={"A Dedicated Team of Innovators:"}
      >
        <ProductView />
      </SectionView>
      <SectionView
        id="client"
        backgroundColor="rgba(229, 231, 235, 0.3)"
        heading={"Trusted Clients"}
      >
        <ClientView />
      </SectionView>
      <SectionView
        id="about"
        backgroundColor="white"
        heading={"What Others Say About our Services"}
      >
        <TestimonialView />
      </SectionView>
    </>
  );
}
