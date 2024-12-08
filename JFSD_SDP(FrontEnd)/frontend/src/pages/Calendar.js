import React from "react";
import "./Calendar.css";

const Calendar = () => {
  const festivals = {
    "2024-01-14": "Pongal",
    "2024-01-26": "Republic Day",
    "2024-03-08": "Holi",
    "2024-04-10": "Ram Navami",
    "2024-04-22": "Eid-ul-Fitr",
    "2024-08-15": "Independence Day",
    "2024-09-17": "Ganesh Chaturthi",
    "2024-10-02": "Gandhi Jayanti",
    "2024-10-24": "Dussehra",
    "2024-11-12": "Diwali",
    "2024-12-25": "Christmas",
    "2025-01-14": "Pongal",
    "2025-01-26": "Republic Day",
    "2025-03-25": "Holi",
    "2025-04-19": "Ram Navami",
    "2025-04-11": "Eid-ul-Fitr",
    "2025-08-15": "Independence Day",
    "2025-09-06": "Ganesh Chaturthi",
    "2025-10-02": "Gandhi Jayanti",
    "2025-10-14": "Dussehra",
    "2025-11-01": "Diwali",
    "2025-12-25": "Christmas",
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderCalendar = () => {
    const today = new Date();
    const startYear = today.getFullYear();
    const endYear = startYear + 2;

    const calendar = [];

    for (let year = startYear; year <= endYear; year++) {
      for (let month = 0; month < 12; month++) {
        calendar.push(
          <div className="month-container" key={`${year}-${month}`}>
            <h2>
              {months[month]} {year}
            </h2>
            <div className="calendar-grid">
              <div className="calendar-header">Sun</div>
              <div className="calendar-header">Mon</div>
              <div className="calendar-header">Tue</div>
              <div className="calendar-header">Wed</div>
              <div className="calendar-header">Thu</div>
              <div className="calendar-header">Fri</div>
              <div className="calendar-header">Sat</div>
              {renderDays(year, month)}
            </div>
          </div>
        );
      }
    }

    return calendar;
  };

  const renderDays = (year, month) => {
    const days = [];
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`}></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;

      const isFestival = festivals[dateString];

      days.push(
        <div
          className={`calendar-day ${isFestival ? "festival" : ""}`}
          key={`day-${year}-${month}-${day}`}
        >
          <span className="date-number">{day}</span>
          {isFestival && <span className="festival-name">{festivals[dateString]}</span>}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <h1>Indian Festival Calendar (2024-2026)</h1>
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
