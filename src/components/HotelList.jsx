"use client";
import React, { useEffect, useState } from "react";

const HotelList = ({ initialHotelList, onEdit, onDelete, isAdminPage }) => {
  const [hotelList, setHotelList] = useState(initialHotelList);

  useEffect(() => {
    setHotelList(initialHotelList);
  }, [initialHotelList]);

  return (
    <div className="card">
      <h2 className="card__title">Lista de Hoteles</h2>
      <div className="card__container">
        {hotelList.map((hotel) => (
          <div key={hotel.id} className="card__content container">
            <h3 className="card__hotel">{hotel.name}</h3>
            {isAdminPage && (
              <div className="card__buttons">
                <button className="card__editar" onClick={() => onEdit(hotel.id)}>Editar</button>
                <button className="card__eliminar" onClick={() => onDelete(hotel.id)}>Eliminar</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;


