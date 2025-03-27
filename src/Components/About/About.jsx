import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBirthdayCake, FaPhone, FaMapMarkerAlt, FaEnvelope, FaGraduationCap, FaUserTie } from "react-icons/fa";
import profilePic from "../../assets/Personal.jpg";
import styles from "./About.module.css";

const About = () => {
    return (
        <>
            <div className="container styles.aboutSection ">
                <div className="row">
                    <div className="col-12 text-center mt-5">
                        <h2 className={styles.aboutTitle}>About Me</h2>
                        <p className={styles.introText}>
                            Seeking a challenging role in a reputable organization where I can utilize my technical and management skills
                            to contribute to its growth in the Frontend field. A dedicated and hardworking professional, eager to gain hands-on
                            experience and continuously develop my expertise to advance in my career.
                        </p>
                    </div>
                </div>

                <div className="row align-content-center justify-content-center text-center">
                    <div className="col-md-4 text-center">
                        <img src={profilePic} alt="Ahmed Mohamed - Front-End Developer" className={styles.profileImg} />
                    </div>


                    <div className="col-md-8">
                        <h3 className={styles.name}>Ahmed Mohamed</h3>
                        <p className={styles.jobTitle}>Front-End & Cross-Platform Mobile Developer</p>

                        <div className={styles.infoContainer}>
                            <p><FaBirthdayCake className={styles.icon} /> <strong>Birthday:</strong> 23 June 1999</p>
                            <p><FaPhone className={styles.icon} /> <strong>Phone:</strong> +201062514437</p>
                            <p><FaMapMarkerAlt className={styles.icon} /> <strong>Location:</strong> 10th Of Ramadan, Egypt</p>
                            <p><FaEnvelope className={styles.icon} /> <strong>Email:</strong> ahmedmohamedahmeed6@gmail.com</p>
                            <p><FaGraduationCap className={styles.icon} /> <strong>Degree:</strong> Bachelor's in Computer and Information Technology</p>
                            <p><FaUserTie className={styles.icon} /> <strong>Military Status:</strong> Exempted</p>
                        </div>
                    </div>
                </div>



            </div>


        </>

    );
};

export default About;
