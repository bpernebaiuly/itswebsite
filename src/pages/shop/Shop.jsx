import React from "react";
import { Navbar, Footer } from "../../components/shared";
import { FaWhatsapp } from "react-icons/fa";

const Shop = () => {
  return (
    <>
      <Navbar />
      <div className="shop_parent" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.9rem", marginBottom: "1rem", textAlign: "center" }}>
          Ата-аналар үшін:
        </h1>
        <div style={{ lineHeight: "1.6", fontSize: "1.4rem" }}>
          <p>• Сіз қандай арнайы білім беру бағдарламасын қолданасыз?</p>
          <p>• Үйде оқытуды қалай ұйымдастырасыз?</p>
          <p>• Инклюзивті мектепке орналастыруда қандай қиындықтар болды?</p>
          <p>• Қандай дамыту орталықтарына бардыңыздар?</p>
          <p>• Эмоциялық күйзелістен қалай шықтыңыз?</p>
          <p>• Отбасылық өмірде қандай өзгерістер болды?</p>
          <p>• Ата-аналарға арналған қолдау топтарын білесіз бе?</p>
        </div>
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: "bold", fontSize: "1.3rem" }}>
            <FaWhatsapp size={24} color="#25D366" />
            <span style={{ color: "#25D366" }}>WhatsApp</span> топтың сілтемесі:
          </span>
          <a
            href="https://chat.whatsapp.com/EZXf3pAcLM364VwOJjHLXm"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: "0.5rem",
              textDecoration: "underline",
              color: "#25D366",
              fontWeight: "bold",
              fontSize: "1.1rem",
              transition: "color 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#128C7E"} // ховер түсі
            onMouseLeave={(e) => e.currentTarget.style.color = "#25D366"} // бастапқы түсі
          >
            https://chat.whatsapp.com/EZXf3pAcLM364VwOJjHLXm
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
