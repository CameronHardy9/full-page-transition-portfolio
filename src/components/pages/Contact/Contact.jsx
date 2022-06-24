import './Contact.css';

export default function Contact(){
    return(
        <section className="contactContainer page red">
            <label htmlFor="contactForm">Get in touch!</label>
            <form id='contactForm'>
                <input type="text" name="fullName" placeholder='Full Name' />
                <input type="email" name="email" placeholder='Email' />
                <input type="tel" name="phone" placeholder='Phone' />
                <textarea name="message" cols="30" rows="5" placeholder='Message'></textarea>
                <button type="submit">SEND</button>
            </form>
        </section>
    );
};