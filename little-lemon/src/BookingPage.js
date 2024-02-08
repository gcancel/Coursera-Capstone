import BookingForm from './BookingForm';

function BookingPage(props){
    return(
        <>
            <BookingForm availableTime={props.availableTime} setAvailableTime={props.setAvailableTime} times={props.times}/>
        </>
    )
}

export default BookingPage;