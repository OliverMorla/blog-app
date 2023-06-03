import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';
import "./Footer.scss"

const Footer = () => {
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
                    <h3 className="heading">Contact Us</h3>
                    <div className="icon-w">
                        <FontAwesomeIcon icon={faFacebook} className='icon' />
                        <FontAwesomeIcon icon={faTwitter} className='icon' />
                        <FontAwesomeIcon icon={faInstagram} className='icon' />
                        <FontAwesomeIcon icon={faLinkedin} className='icon' />
                    </div>
                    <div className="info-w">
                        <h3>Contact info:</h3>
                        <address>
                            <Link href={''}>myemail@gmailcom</Link>
                            <p>324-233-2231</p>
                            <p>111-11 111St, NY, NY</p>
                        </address>
                    </div>
                </div>
                <div className="newsletter-w">
                    <h3 className="heading">Subscribe to Newsletter</h3>
                    <form>
                        <input type="text" name="email" id="email-n" placeholder='Enter Email' className='newsletter-textbox' />
                        <buthrefn type="submit" className='sub-btn'>Suscribe</buthrefn>
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