"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HotelList from "@/components/HotelList";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [hotelName, setHotelName] = useState("");
  const [hotelList, setHotelList] = useState([]);
  const [editedHotel, setEditedHotel] = useState(null); // Nuevo estado para rastrear el hotel en edición
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
      // Editar el hotel existente
      const updatedHotelList = hotelList.map((hotel) => {
        if (hotel.id === editedHotel.id) {
          return { ...hotel, name: hotelName };
        }
        return hotel;
      });

      localStorage.setItem("hotelList", JSON.stringify(updatedHotelList));
      setHotelList(updatedHotelList);
      setEditedHotel(null); // Salir del modo de edición
      setHotelName(""); // Limpiar el campo de entrada
    } else if (hotelName.trim() !== "") {
      // Agregar un nuevo hotel
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
      setEditedHotel(hotelToEdit); // Establecer el hotel en edición
      setHotelName(hotelToEdit.name); // Llenar el campo de entrada con el nombre actual del hotel
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
            isAdminPage={true} // O puedes usar una variable o estado para gestionarlo
          />
        </div>
      </div>
    </main>
  );
};

export default AdminPage;
