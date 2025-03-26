import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import main from "../../assets/main.jpg";
import styles from "./Home.module.css";
import SocialIcons from "../SocialIcons/SocialIcons"; // ✅ استدعاء الكومبوننت الجديد

const Home = () => {
    return (
        <Container fluid className={styles.homeSection}>
            <Row className="justify-content-center align-items-center">
                {/* النصوص والمعلومات */}
                <Col lg={6} className="d-flex flex-column align-items-center">
                    <h1 className={styles.greetingText}>Hello, I'm</h1>
                    <h1 className={styles.nameText}>Ahmed Mohamed</h1>
                    <h2 className={styles.jobTitle}>
                        I'm a <span>Front-end & Cross Platform Mobile Developer</span>
                    </h2>

                    {/* ✅ استخدام الكومبوننت الجديد */}
                    <SocialIcons />

                    {/* الأزرار */}
                    <div className={styles.buttons}>
                        <Link to="/Projects" className={styles.btnPrimary}>
                            🚀 View My Work
                        </Link>
                        <a href="/AhmedCv.pdf" download="AhmedCv.pdf" className={styles.btnSecondary}>
                            📄 Download CV
                        </a>
                    </div>
                </Col>

                {/* صورة الملف الشخصي */}
                <Col lg={6} className="d-flex justify-content-center">
                    <div className={styles.imageContainer}>
                        <img src={main} alt="Profile" className={styles.profileImage} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
