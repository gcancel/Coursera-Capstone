import greeksalad from './images/greeksalad.png';
import falafel from './images/falafel.jpg'
import flatbread from './images/flatbread.jpg';
import heroImage from './images/little-lemon-hero.webp';
import aboutImage from './images/little-lemon-show.webp';
import portrait from './images/Portrait_Placeholder.png'
import {Link} from 'react-router-dom';

const myHighlights = [

    {
        image: falafel,
        item: "Falafel",
        text: "This is Falafel text... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        price: "10.99",

    },
    {
        image: greeksalad,
        item: "Greek Salad",
        text: "This is Greek Salad text... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        price: "12.99",

    },
    {
        image: flatbread,
        item: "Mediteranean Flatbread",
        text: "This is Mediteranean Flatbread text... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        price: "12.99",

    },


];

const myTestimonials = [
    {
        photo: portrait, 
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        rating: "★★★★★",
    },
    {
        photo: portrait, 
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        rating: "★★★★★",
    },
    {
        photo: portrait, 
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        rating: "★★★★",
    },
    {
        photo: portrait, 
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        rating: "★★★★",
    },
];

const hightlights = myHighlights.map(hightlight =>{
    return(
        <article>
            <img src={hightlight.image} width="100px" height="100px" alt="Yummy Dishes"/>
            <div class="item-price">
                <p>{hightlight.item}</p>
                <p>{hightlight.price}</p>
            </div>
            <p>{hightlight.text}</p>
            <a href="#"><b>Order a Delivery</b></a>
        </article>
    )
})

const testimonials = myTestimonials.map(testimonial =>{
    return(
        <article>
            <p>Rating: {testimonial.rating}</p>
            <img src={testimonial.photo} alt="user pic"/>
            <div class="testimonial-text">
                <p>{testimonial.text}</p>
            </div>
        </article>
    )
})

function Main(){
    return(
        <main className="container">

            <section className="hero" id="hero-section">
                <div id="hero-text">
                    <h2>Little Lemon</h2>
                    <p>Chicago</p>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    <button><Link to='/BookingPage'>Reserve a Table</Link></button>
                </div>
                    <img src={heroImage} width="30%" height="100%" alt="Hero Pic" />
            </section>
            <section className="highlight-heading">
                    <article>
                        <h2>Specials</h2>
                        <button>Online Menu</button>
                    </article>
            </section>
            <section className="highlights">
                    {hightlights}
            </section>

            <section className="testimonial">
                <article className="test-heading">
                    <h3>Testimonials</h3>
                    <div className="test-items">
                        {testimonials}
                    </div>
                </article>
            </section>

            <section className="about" id="about-section">
                <article>
                    <h2>Little Lemon</h2>
                    <p>Chicago</p>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                </article>
                <img src={aboutImage} width="100px" height="100px" alt="about image"/>
            </section>
        </main>
    )
}

export default Main;