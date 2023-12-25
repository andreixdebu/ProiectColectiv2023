import React, { Fragment, useState } from "react";
import Logo from "../Homepage/images/shadow 1.png";
import Burger from "../Homepage/images/image 4.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../Navbar";
import "./MenuPage.css";

const Menu = () => {
  const [visibleItem, setVisibleItem] = useState(null);
  const [reservationData, setReservationData] = useState({
    nume: "",
    prenume: "",
    nrPersoane: "",
  });
  const [tableCheckbox1, setTableCheckbox1] = useState(false);
  const [tableCheckbox2, setTableCheckbox2] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);

  const handleCheckboxChange1 = () => {
    setChecked1(!isChecked1);
  };

  const handleCheckboxChange2 = () => {
    setChecked2(!isChecked2);
  };

  const handleItemClick = (itemNumber) => {
    setVisibleItem(itemNumber === visibleItem ? null : itemNumber);
  };

  const handleReservationInputChange = (field, value) => {
    setReservationData({ ...reservationData, [field]: value });
  };

  const handleTableCheckboxChange = (checkboxNumber) => {
    if (checkboxNumber === 1) {
      setTableCheckbox1(!tableCheckbox1);
      setTableCheckbox2(false);
    } else if (checkboxNumber === 2) {
      setTableCheckbox2(!tableCheckbox2);
      setTableCheckbox1(false);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    const selectedHour = e.target.value;
    setSelectedTime(selectedHour);
    setShowTimePicker(false);
  };

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
    setShowTimePicker(false);
  };

  const handleTimePickerClick = () => {
    setShowTimePicker(!showTimePicker);
    setShowCalendar(false);
  };
  return (
    <Fragment>
        <Navbar/>
    <div className="menupage">
      <div className="rectangle"></div>
      <img src={Logo} alt="Logo" className="logo"></img>
      <div className="photo-square"></div>
      <img src={Burger} alt="Burger" className="burger"></img>
      <div className="rectangle-orange-title"></div>
      <div className="title-rectangle">
        <h1 className="title">Shadow Cafe-Bar</h1>
      </div>
      <div className="orange-filter"></div>
      <button className="filter">Filter</button>
      <div className="orange-search"></div>
      <input className="search" type="text" placeholder="Search" />
      <div className="orange-menu"></div>

      <div className="checkbox-item1" onClick={handleCheckboxChange1}>
        <label className={`checkbox ${isChecked1 ? "checked" : ""}`}></label>
      </div>
      <div className="item1" onClick={() => handleItemClick(1)}>
        <text className="item1-text">Burger de Vita Black Angus</text>
        <text className="gramaj">600g</text>
        <text className="price">38,5 RON</text>
      </div>

      <div className="description-square">
        {visibleItem === 1 && (
          <p>
            Cartofi - 350g, Fulgi de Porumb (Conține Gluten) - 120g, Chiflă -
            90g, Tofu afumat - 50g, Salata iceberg - 40g, Castraveti intregi in
            otet (Conține Muștar) - 40g, Roșii proaspete - 40g, Maioneză
            (Conține Muștar) - 30g, Fulgi de ceapa (Conține Gluten) - 30g, Faina
            alba de grau superioara tip 000 - 30g, Ciuperci mixte - 30g, Sos de
            maioneza vegetala (Conține Soia, Muștar) - 30ml, Ulei de măsline -
            20ml, Ceapa - 20g, Fasole - 20g, Usturoi - 5g, Pătrunjel - 5g,
            Colorant: Caroteni (amestec de caroteni, b -caroteni) (E 160 a),
            Conservant: Sorbat de potasiu (E 202), Acid acetic (E 260),
            Antioxidant: Extract bogat de tocoferol (E 306), Sarea de Ca a EDTA
            (E 385), Corector de aciditate: Acid citric (E 330), Agent de
            îngroșare: Guma Guar (E 412)
          </p>
        )}
      </div>
      <div className="checkbox-item2" onClick={handleCheckboxChange2}>
        <label className={`checkbox ${isChecked2 ? "checked" : ""}`}></label>
      </div>
      <div className="item2" onClick={() => handleItemClick(2)}>
        <text className="item2-text">Burger Pulled Pork</text>
        <text className="gramaj">600g</text>
        <text className="price">39 RON</text>
      </div>

      <div className="description-square">
        {visibleItem === 2 && <p>Description for Burger Pulled Pork.</p>}
      </div>
      <div className="orange-go-to-cart"></div>
      <button className="go-to-cart">Go to Cart</button>
      <div className="orange-add-to-cart"></div>
      <button className="add-to-cart">Add Items to Cart</button>
      <div className="orange-reservation">
        <div>
          <label htmlFor="nume">Nume:</label>
          <input
            type="text"
            id="nume"
            value={reservationData.nume}
            onChange={(e) =>
              handleReservationInputChange("nume", e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="prenume">Prenume:</label>
          <input
            type="text"
            id="prenume"
            value={reservationData.prenume}
            onChange={(e) =>
              handleReservationInputChange("prenume", e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="nrPersoane">Nr de persoane:</label>
          <input
            type="text"
            id="nrPersoane"
            value={reservationData.nrPersoane}
            onChange={(e) =>
              handleReservationInputChange("nrPersoane", e.target.value)
            }
          />
        </div>
      </div>
      <div className="table">Plasare Masa</div>

      <div className="checkbox-container">
        <div
          className={`checkbox ${tableCheckbox1 ? "checked" : ""}`}
          onClick={() => handleTableCheckboxChange(1)}
        ></div>
        <p className="checkbox-text">Afara</p>

        <div
          className={`checkbox ${tableCheckbox2 ? "checked" : ""}`}
          onClick={() => handleTableCheckboxChange(2)}
        ></div>
        <p className="checkbox-text">Inauntru</p>
      </div>

      <div className="orange-calendar">
        <div>
          <label htmlFor="data">Data:</label>
          <div className="data-rectangle" onClick={handleCalendarClick}>
            {selectedDate && selectedDate.toDateString()}
            {showCalendar && (
              <div className="custom-calendar-wrapper">
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate || undefined}
                  tileClassName={({ date }) =>
                    selectedDate &&
                    date.toISOString().split("T")[0] ===
                      selectedDate.toISOString().split("T")[0]
                      ? "selected-date"
                      : ""
                  }
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="ora">Ora:</label>
          <div className="time-rectangle" onClick={handleTimePickerClick}>
            {selectedTime}
            {showTimePicker && (
              <div className="custom-time-picker-wrapper">
                <select onChange={handleTimeChange}>
                  <option value="">Select Time</option>
                  <option value="9:00">9:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                  <option value="23:00">23:00</option>
                  <option value="00:00">00:00</option>
                  <option value="01:00">01:00</option>
                  <option value="02:00">02:00</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="orange-make-reservation"></div>
      <button className="make-a-reservation">Make a Reservation</button>
    </div>
    </Fragment>
  );
};

export default Menu;
