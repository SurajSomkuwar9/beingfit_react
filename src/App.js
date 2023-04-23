import React from 'react';
import './App.css';

function App() {
  return (
    <div> 

        {/* <!--==================== HEADER ====================--> */}
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">

                    <img src="./img/logo-nav.png" alt="Logo" /> BeingFit
                    
                </a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#program" className="nav__link">Program</a>
                        </li>
                        <li className="nav__item">
                            <a href="#choose" className="nav__link">Choose Us</a>
                        </li>
                        <li className="nav__item">
                            <a href="#pricing" className="nav__link">Pricing</a>
                        </li>
                        <li className="nav__item">
                            <div className="nav__link">
                                <a href="#footer" className="button nav__button">
                                    Register Now
                                </a>
                            </div>
                        </li>
                    </ul>

                    <div className="nav__close" id="nav-close">
                        <i className="ri-close-line"></i>
                    </div>
                </div>

                {/* <!-- Toggle button --> */}
                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-menu-line"></i>
                </div>
            </nav>
            
        </header>

        {/* <!--==================== MAIN ====================--> */}
        <main className="main"> 
            {/* <!--==================== HOME ====================--> */}
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__data">
                        <h2 className="home__subtitle">MAKE YOUR</h2>
                        <h1 className="home__title">BODY SHAPE</h1>
                        <p className="home__description">
                            In here we will help you to shape and build your ideal 
                            body and live your life to the fullest.
                        </p>
                        <a href="#" className="button button__flex">
                            Get Started <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>

                    <div className="home__images">
                        <img src="assets/img/home-img.png" alt="home image" 
                         className="home__img"/> 
                        
                        <div className="home__triangle home__triangle-3"></div>
                        <div className="home__triangle home__triangle-2"></div>
                        <div className="home__triangle home__triangle-1"></div>
                    </div>
                </div>
            </section>

            {/* <!--==================== LOGOS ====================--> */}
            <section className="logos section">
                <div className="logos__container container grid">
                    <img src="assets/img/logo1.png" alt="logo image" className="logos__img"/>
                    <img src="assets/img/logo2.png" alt="logo image" className="logos__img"/>
                    <img src="assets/img/logo3.png" alt="logo image" className="logos__img"/>
                    <img src="assets/img/logo4.png" alt="logo image" className="logos__img"/>
                </div>
                
            </section>

            {/* <!--==================== PROGRAM ====================--> */}
            <section className="program section" id="program">
                <div className="container">
                    <div className="section__data">
                        <h2 className="section__subtitle">Our Program</h2>
                        <div className="section__titles">
                            <h1 className="section__title-border">BUILD YOUR</h1>
                            <h1 className="section__title">BEST BODY</h1>
                        </div>
                    </div>

                    <div className="program__container grid">
                        <article className="program__card">
                            <div className="program__shape">
                                <img src="assets/img/program1.png" alt="program image" className="program__img"/> 
                            </div>

                            <h3 className="program__title">Flex Muscle</h3>

                            <p className="program__description">
                                Creating tension that's temporarily making the muscle 
                                fibers smaller or contracted.
                            </p>

                            <a href="#" className="program__button">
                                <span></span>
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </article>
                        <article className="program__card">
                            <div className="program__shape">
                                <img src="assets/img/program2.png" alt="program image" className="program__img"/> 
                            </div>

                            <h3 className="program__title">Cardio Exercise</h3>

                            <p className="program__description">
                                Exercise your heart rate up and keeps it 
                                up for a prolonged period of time.

                            </p>

                            <a href="#" className="program__button">
                                <span></span>
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </article>
                        <article className="program__card">
                            <div className="program__shape">
                                <img src="assets/img/program3.png" alt="program image" className="program__img"/> 
                            </div>

                            <h3 className="program__title">Basic Yoga</h3>

                            <p className="program__description">
                                Diaphragmatic this is the most common breathing 
                                technique you'll find in yoga.

                            </p>

                            <a href="#" className="program__button">
                                <span></span>
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </article>
                        <article className="program__card">
                            <div className="program__shape">
                                <img src="assets/img/program4.png" alt="program image" className="program__img"/> 
                            </div>

                            <h3 className="program__title">Weight Lifting</h3>

                            <p className="program__description">
                                Attempts a maximum weight single lift of a 
                                barbell loaded with weight plates.

                            </p>

                            <a href="#" className="program__button">
                                <span></span>
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </article>
                    </div>
                </div>
            </section>

            {/* <!--==================== CHOOSE US ====================--> */}
            <section className="choose section" id="choose">
                <div className="choose__overflow">
                    <div className="choose__container container grid">
                        <div className="choose__content">
                            <div className="section__data">
                                <h2 className="section__subtitle">Best Reason</h2>
                                <div className="section__titles">
                                    <h1 className="section__title-border">WHY</h1>
                                    <h1 className="section__title-border">CHOOSE US ?</h1>
                            </div>
                        </div>

                        <p className="choose__decription">
                            Choose your favorite className and start now. Remember the 
                            only bad workout is the one you didn't do.
                        </p>

                        <div className="choose__data">
                            <div className="choose__group">
                                <h3 className="choose__number">200+</h3>
                                <p className="choose__subtitle">Total Members</p>
                            </div>
                            <div className="choose__group">
                                <h3 className="choose__number">50+</h3>
                                <p className="choose__subtitle">Best trainers</p>
                            </div>
                            <div className="choose__group">
                                <h3 className="choose__number">25+</h3>
                                <p className="choose__subtitle">Programs</p>
                            </div>
                            <div className="choose__group">
                                <h3 className="choose__number">100+</h3>
                                <p className="choose__subtitle">Awards</p>
                            </div>
                        </div>
                    </div>

                    <div className="choose__images">
                        <img src="assets/img/choose-img.png" alt="choose image" className="choose__img"/> 
                        
                        <div className="choose__triangle home__triangle-1"></div>
                        <div className="choose__triangle home__triangle-2"></div>
                        <div className="choose__triangle home__triangle-3"></div>
                    </div>
                </div>
            </div>
        </section>

            {/* <!--==================== PRICING ====================--> */}
            <section className="pricing section" id="pricing">
                <div className="container">
                    <div className="section__data">
                        <h2 className="section__subtitle">Pricing</h2>
                        <div className="section__titles">
                            <h1 className="section__titles-border">OUR</h1>
                            <h1 className="section__titles">SPECIAL PLAN</h1>
                        </div>
                    </div>

                    <div className="pricing__container grid">
                        <article className="pricing__card">
                            <header className="pricing__header">
                                <div className="pricing__shape">
                                    <img src="assets/img/pricing1.png" alt="pricing image" className="pricing__img"/> 
                                </div>

                                <h1 className="pricing__title">BASIC PACKAGE</h1>
                                <h2 className="pricing__number">&#8377;5000</h2>
                            </header>

                            <ul className="pricing__list">
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>5 Days In A Week
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>01 Sweatshirt
                                </li>
                                <li className="pricing__item pricing__item-opacity">
                                    <i className="ri-checkbox-circle-line"></i>01 Bottle of Protein
                                </li>
                                <li className="pricing__item pricing__item-opacity">
                                    <i className="ri-checkbox-circle-line"></i>Access to Videos
                                </li>
                                <li className="pricing__item pricing__item-opacity">
                                    <i className="ri-checkbox-circle-line"></i>Muscle Stretching
                                </li>
                            </ul>

                            <a href="" className="button button__flex pricing__button">
                                Purchase Now<i className="ri-arrow-right-line"></i>
                            </a>
                        </article>

                        <article className="pricing__card pricing__card-active" >
                            <header className="pricing__header">
                                <div className="pricing__shape">
                                    <img src="assets/img/pricing2.png" alt="pricing image" className="pricing__img"/> 
                                </div>

                                <h1 className="pricing__title">PREMIUM PACKAGE</h1>
                                <h2 className="pricing__number">&#8377;6000</h2>
                            </header>

                            <ul className="pricing__list">
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>5 Days In A Week
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>01 Sweatshirt
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>01 Bottle of Protein
                                </li>
                                <li className="pricing__item pricing__item-opacity">
                                    <i className="ri-checkbox-circle-line"></i>Access to Videos
                                </li>
                                <li className="pricing__item pricing__item-opacity">
                                    <i className="ri-checkbox-circle-line"></i>Muscle Stretching
                                </li>
                            </ul>

                            <a href="" className="button button__flex pricing__button">
                                Purchase Now<i className="ri-arrow-right-line"></i>
                            </a>
                        </article>

                        <article className="pricing__card">
                            <header className="pricing__header">
                                <div className="pricing__shape">
                                    <img src="assets/img/pricing3.png" alt="pricing image" className="pricing__img"/> 
                                </div>

                                <h1 className="pricing__title">DIAMOND PACKAGE</h1>
                                <h2 className="pricing__number">&#8377;7000</h2>
                            </header>

                            <ul className="pricing__list">
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>5 Days In A Week
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>01 Sweatshirt
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>01 Bottle of Protein
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>Access to Videos
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>Muscle Stretching
                                </li>
                            </ul>

                            <a href="" className="button button__flex pricing__button">
                                Purchase Now<i className="ri-arrow-right-line"></i>
                            </a>
                        </article>
                    </div>
                </div>
            </section>

            {/* <!--==================== CALCULATE ====================--> */}

            <section className="calculate section">
                <div className="calculate__container container grid">
                    <div className="calculate__content">
                        <div className="section__titles">
                            <h1 className="section__title-border">CALCULATE</h1>
                            <h1 className="section__title">YOUR BMI</h1>
                        </div>
    

                    <p className="calculate__description">
                        The body mass index (BMI) calculator calculates
                        body mass index from your weight and height.
                    </p>    


                    <form action="" className="calculate__form" id="calculate-form">
                        <div className="calculate__box">
                            <input type="number" placeholder="Height" className="calculate__input" id="calculator-cm"/> 
                            <label for="" className="calculate__label"/>cm
                        </div>
                        <div className="calculate__box">
                            <input type="number" placeholder="Weight" className="calculate__input" id="calculator-kg"/>
                            <label for="" className="calculate__label"/>kg
                        </div>


                        <button type="submit" className="button button__flex">
                            Calculate Now <i className="ri-arrow-right-line"></i>
                        </button>
                    </form>


                    <p className="calculate__message" id="calculate-message"></p>
                </div>


                <img src="assets/img/calculate-img.png" alt="calculate image" className="calculate__img"/>
            </div>
        </section>
        </main>
            
            
            
            
        
        {/* <!--==================== FOOTER ====================--> */}
       
        <footer className="footer section" id="footer">

            <div className="footer__container container grid">
                <div>
                    <a href="#" className="footer__logo">
                        <img src="assets/img/logo-nav.png" alt=""/> Being Fit
                    </a>
                    <p className="footer__description">
                        Subscribe for company <br/> updates below.
                    </p>
                
                    <form action="" className="footer__form" id="contact-form">
                        <input type="email" name="user_email" placeholder="Your email" className="footer__input" id="contact-user"/>
                        <button type="submit" className="button">
                            Subscribe
                        </button>
                    </form>


                    <p className="footer__message" id="contact-message"></p>
                </div>


                <div className="footer__content">
                    <div>
                        <h3 className="footer__title">
                            SERVICES
                        </h3>


                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Flex muscle</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Cardio exercise</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Basic yoga</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Weight lifting</a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="footer__title">
                            PRICING
                        </h3>


                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Basic</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Premium</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Diamond</a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="footer__title">
                            COMPANY
                        </h3>


                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">About us</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Careers</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Customers</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Partners</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        
            <div className="container">
            <div className="footer__group">
            <ul class="footer__social">
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener" class="footer__social-link">
                            <i class="ri-facebook-circle-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener" class="footer__social-link">
                            <i class="ri-twitter-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener" class="footer__social-link">
                            <i class="ri-instagram-line"></i>
                        </a>
                    </li>
                </ul>


                <span className="footer__copy">
                    © 2023 BeingFit. All Rights Reserved.
                </span>
            </div>
        </div>
    </footer>

    

        {/* <!--========== SCROLL UP ==========--> */}
        <a href="#" className="scrollup" id="scroll-up">
            <i className="ri-arrow-up-line"></i>
        </a>



    </div>
  );
}

export default App;
