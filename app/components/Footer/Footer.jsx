"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';
import "./Footer.scss"

const Footer = () => {

    async function handleForm(e) {
        e.preventDefault();
        alert('Form submitted successfully!');
    }

    return (
        <footer className="footer-w">
            <div className="section-one">
                <div className="about-us-w">
                    <h3 className="heading">About Us</h3>
                    <p className="info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe voluptate,
                        quaerat, velit debitis nesciunt cumque maxime sunt consequatur vel ab excepturi accusantium?
                        Excepturi obcaecati possimus cum sed officiis sunt!
                    </p>
                </div>
                <div className="features-w">
                    <h3 className="heading">Features</h3>
                    <div className="features-list-w">
                        <div className="feature-item"><Link href={'/about'}>About Us</Link></div>
                        <div className="feature-item"><Link href={'/services'}>Services</Link></div>
                        <div className="feature-item"><Link href={'/testimonials'}>Testimonials</Link></div>
                        <div className="feature-item"><Link href={'/contact'}>Contact Us</Link></div>
                        <div className="feature-item"><Link href={'/privacy'}>Privacy Policy</Link></div>
                        <div className="feature-item"><Link href={'/faq'}>FAQ</Link></div>
                        <div className="feature-item"><Link href={'/tos'}>Terms of Condition</Link></div>
                        <div className="feature-item"><Link href={'/awards'}>Awards</Link></div>
                        <div className="feature-item"><Link href={'/certifications'}>Certifications</Link></div>
                        <div className="feature-item"><Link href={'/partnerships'}>Partnerships</Link></div>
                    </div>
                </div>
                <div className="contact-us-w">
                    <div className="social-icon-w">
                        <h3 className="heading">Contact Us</h3>
                        <div className="icon-w">
                            <Link href={"/"}>
                                <FontAwesomeIcon icon={faFacebook} className='icon' />
                            </Link>
                            <Link href={"/"}>
                                <FontAwesomeIcon icon={faTwitter} className='icon' />
                            </Link>
                            <Link href={"/"}>
                                <FontAwesomeIcon icon={faInstagram} className='icon' />
                            </Link>
                            <Link href={"/"}>
                                <FontAwesomeIcon icon={faLinkedin} className='icon' />
                            </Link>
                        </div>
                    </div>
                    <div className="info-w">
                        <h3>Contact info</h3>
                        <address>
                            <p>myemail@gmailcom</p>
                            <p>324-233-2231</p>
                            <p>111-11 111St, NY, NY</p>
                        </address>
                    </div>
                </div>
                <div className="newsletter-w">
                    <fieldset>
                        <legend> Quick Links </legend>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/'}>Blogs</Link>
                        <Link href={'/'}>News</Link>
                        <Link href={'/'}>Sign In</Link>
                    </fieldset>
                    <h3 className="heading">Subscribe to Newsletter</h3>
                    <form onSubmit={handleForm}>
                        <input
                            type="email"
                            name="email"
                            id="email-n"
                            placeholder='Enter Email'
                            className='newsletter-textbox'
                            required
                        />
                        <button type="submit" className='sub-btn'>Suscribe</button>
                    </form>
                </div>
            </div>
            <div className="section-two">
                <div className="copyright-w">
                    Copyright ©2023 All rights reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;