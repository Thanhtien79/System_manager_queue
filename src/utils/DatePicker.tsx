import { useState }  from 'react';
import  DatePicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css'
import Calendar from '../assets/img/calendar.png'
const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <div className='Date'>  
      <img src={Calendar} alt="" />
      <DatePicker  
      
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
      />
     
    </div>
  );
};

export default DatePickerComponent;
