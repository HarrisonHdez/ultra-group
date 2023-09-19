"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HotelList from "@/components/HotelList";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [hotelName, setHotelName] = useState("");
  const [hotelList, setHotelList] = useState([]);
  const [editedHotel, setEditedHotel] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedHotelList = JSON.parse(localStorage.getItem("hotelList")) || [];
    setHotelList(storedHotelList);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.replace("/");
  };

  const handleHotelSubmit = () => {
    if (editedHotel) {
      const updatedHotelList = hotelList.map((hotel) => {
        if (hotel.id === editedHotel.id) {
          return { ...hotel, name: hotelName };
        }
        return hotel;
      });

      localStorage.setItem("hotelList", JSON.stringify(updatedHotelList));
      setHotelList(updatedHotelList);
      setEditedHotel(null);
      setHotelName("");
    } else if (hotelName.trim() !== "") {
      const newHotel = { id: Date.now(), name: hotelName };
      const updatedHotelList = [newHotel, ...hotelList];

      localStorage.setItem("hotelList", JSON.stringify(updatedHotelList));
      setHotelList(updatedHotelList);
      setHotelName("");
    }
  };

  const handleEdit = (hotelId) => {
    const hotelToEdit = hotelList.find((hotel) => hotel.id === hotelId);
    if (hotelToEdit) {
      setEditedHotel(hotelToEdit);
      setHotelName(hotelToEdit.name);
    }
  };

  const handleDelete = (hotelId) => {
    const updatedHotelList = hotelList.filter((hotel) => hotel.id !== hotelId);
    localStorage.setItem("hotelList", JSON.stringify(updatedHotelList));
    setHotelList(updatedHotelList);
  };

  return (
    <main>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <div className="admin">
        <div className="admin__content">
          <p className="admin__paragraph">
            Bienvenido a la página de administración!
          </p>

          <div className="admin__form">
            <input
              className="admin__input"
              type="text"
              placeholder="Nombre del hotel"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
            />
            <button
              className="admin__button"
              type="submit"
              onClick={handleHotelSubmit}
            >
              Agregar
            </button>
          </div>

          <HotelList
            initialHotelList={hotelList}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isAdminPage={true}
          />
        </div>
      </div>
    </main>
  );
};

export default AdminPage;
