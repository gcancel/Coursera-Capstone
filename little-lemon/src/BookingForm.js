import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
function BookingForm(props){
    const style = {display: 'grid', maxWidth: 200, gap: 20,}
    const [date, setDate] = useState();
    const [numGuests, setNumGuest] = useState("1");
    const [occasion, setOccasion] = useState("");
    let times = props.times;
    let time = props.availableTime;
    let currDate = date;


    const availableTimes = times.map( item => {
        return(
            <option key={item.index}>{item.time}</option>
        )
      });

     useEffect(() =>{
        console.log(time.time); 
     },[]);

     console.log(currDate);

     const formik = useFormik({
        initialValues: {
          date: new Date(),
          time: '',
          numGuests: '1',
          occasion: 'Birthday',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
          date: Yup.date().typeError('A date must be selected.').required("Entering a date is required."),
          time: Yup.string().typeError("Choosing a time is required.").strict(true),
          type: Yup.string().required("Required"),
          comment: Yup.string().required("Selecting an occasion is required."),
        }),
      });

    return(
        <div class="form-container">
            <div class='form-label' data-test-id="bookingPage">
                <h1>Book Now</h1>
            </div>
            <form style={style} onSubmit={formik.handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="date" name="date" value={currDate} onChange={(e) => setDate(e.target.value)} />
                <div class="error-message">{formik.errors.date}</div>
                <label htmlFor="res-time">Choose time</label>
                <select id="time" name="time"  value={time.time} onChange={(e) => props.setAvailableTime({time: e.target.value})} >
                    {availableTimes}
                </select>
                <div class="error-message">{formik.errors.time}</div>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" value={numGuests} name="numGuests" onChange={(e) => {setNumGuest(e.target.value)}} placeholder="1" min="1" max="10" id="guests" />
                <div class="error-message">{formik.errors.numGuests}</div>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} name="occasion"  onChange={(e) => setOccasion(e.target.value)} >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <div class="error-message">{formik.errors.occasion}</div>
                <button type="submit" aria-label="On Click" onClick={(e) => e.preventDefault()} value="Make Your reservation"><Link to='/ConfirmPage'>Make Your Reservation</Link></button>
            </form>
        </div>
    )
}

export default BookingForm;