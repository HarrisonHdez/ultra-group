"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import HotelList from "@/components/HotelList";
import { useEffect, useState } from "react";

export default function Home() {
  const [hotelList, setHotelList] = useState([]); 

  useEffect(() => {
    const storedHotelList = JSON.parse(localStorage.getItem("hotelList")) || [];
    setHotelList(storedHotelList);
  }, []);
  return (
    <main>
      <header className="home">
        <Navbar />
        <div className="home__content container">
          <div className="home__text">
            <h1 className="home__title">
              Busca hoteles cerca de ti de
              <span className="home__span"> forma facil y rapido</span>{" "}
            </h1>

            <p className="home__subtitle">
              La forma mas facil y rapida de conseguir hoteles cerca de ti sin
              importar donde estes
            </p>

            <div className="home__buttons">
              <a
                tabIndex={0}
                href="#"
                role="link"
                className="home__start"
                title="Clic para ir a About"
                aria-label="Book a Demo"
              >
                Empezar
              </a>
              <a
                tabIndex={0}
                href="#"
                role="link"
                className="home__contact"
                title="Clic para ir a About"
                aria-label="Contact Us"
              >
                Descrubre Más
              </a>
            </div>
          </div>
          <div className="home__image">
            <img
             
              width={500}
              height={500}
              src="/image/banner3.png"
              alt="team"
              className="animate__animated animate__fadeIn"
            />
          </div>
        </div>
      </header>
      <HotelList initialHotelList={hotelList} />
    </main>
  );
}
