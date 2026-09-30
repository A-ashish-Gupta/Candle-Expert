import { useState } from "react";


const ContactForm = () => {

    // useEffect(() => {
    // first
    //     return () => {
    //         effect
    //     };
    // }, [input])
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [course, setCourse] = useState("");
    const [experience, setExperience] = useState("");
    const [learning, setLearning] = useState("");
    const [conset, setConsent] = useState(false);

    return (
        <section className="contact-section" id="contact">
            <div className="section-wrap content-section contact-grid">
                <div className="contact-copy reveal">
                    <p className="eyebrow">
                        Start a conversation <span className="eyebrow-rule"></span>
                    </p>
                    <h2>
                        Curious about
                        <br />
                        <span className="serif-accent">learning?</span>
                    </h2>
                    <p>
                        Tell us what you’d like to explore. We’ll be in touch when enquiry
                        delivery is configured.
                    </p>
                    <div className="contact-details">
                        <span>ALSO FIND US ON</span>
                        <a
                            href="https://www.youtube.com/@Candlexpert"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            YouTube <b>↗</b>
                        </a>
                        <span className="contact-detail-note">
                            Email &amp; WhatsApp details to be supplied
                        </span>
                    </div>
                </div>
                <form className="enquiry-form reveal" id="enquiry-form" noValidate>
                    <div className="form-heading">
                        <span>ENQUIRY FORM</span>
                        <span className="required-note">* REQUIRED</span>
                    </div>
                    <div className="form-row">
                        <label>
                            Full name <span>*</span>
                            <input
                                name="name"
                                autoComplete="name"
                                required
                                minLength="2"
                                placeholder="Your name"
                                value={fullname}
                                onChange={(eve) => {
                                    setFullName(eve.target.value)
                                }}
                            />
                            <small className="field-error"></small>
                        </label>
                        <label>
                            Email address <span>*</span>
                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="you@example.com"
                                value={email}
                                onChange={(eve) => {
                                    setEmail(eve.target.value);
                                }}
                            />
                            <small className="field-error"></small>
                        </label>
                    </div>
                    <div className="form-row">
                        <label>
                            Mobile number <span>*</span>
                            <input
                                name="mobile"
                                type="tel"
                                autoComplete="tel"
                                required
                                minLength="7"
                                placeholder="Your number"
                                value={number}
                                onChange={(eve) => {
                                    setNumber(eve.target.value)
                                }}
                            />
                            <small className="field-error"></small>
                        </label>
                        <label>
                            Interested in
                            <select name="course" onChange={(eve) => { setCourse(eve.target.value) }}>
                                <option value="">Choose a topic</option>
                                <option value="stockMarket">Stock Market &amp; Technical Analysis</option>
                                <option value="Forex">Forex Trading Education</option>
                                <option value="Futures">Futures &amp; Derivatives</option>
                            </select>
                        </label>
                    </div>
                    <label>
                        Experience level
                        <select name="experience" onChange={(eve) => { setExperience(eve.target.value) }}>
                            <option value="">Choose your level</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </label>
                    <label>
                        What would you like to learn?
                        <textarea name="message" rows="3" placeholder="Optional" onChange={(eve) => { setLearning(eve.target.value) }}></textarea>
                    </label>
                    <label className="consent-label">
                        <input type="checkbox" name="consent" required onClick={() => { setConsent(true) }} />
                        <span>
                            I agree to be contacted about this enquiry. My details will only
                            be used to respond to me. <b>*</b>
                        </span>
                    </label>
                    <small className="consent-error"></small>
                    <button className="button button-primary form-submit" disabled={!conset} onClick={() => {
                        console.log(fullname);
                        console.log(email);
                        console.log(number);
                        console.log(course);
                        console.log(experience);
                        console.log(learning);
                        console.log(conset);

                    }}>
                        Send enquiry <span>↗</span>
                    </button>
                    <p className="form-status" aria-live="polite" role="status">
                        Enquiry delivery is not configured yet. This form won’t send or
                        store your information.
                    </p>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
