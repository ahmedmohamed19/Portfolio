import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import styles from "./Navigation.module.css"; // ملف CSS مخصص

const Navigation = () => {
    return (
        <Navbar expand="lg" fixed="top" className={styles.navbar}>
            <Container>
                {/* اسم الموقع */}
                <Navbar.Brand as={Link} to="/" className={styles.brand}>
                    My Portfolio
                </Navbar.Brand>

                {/* زر القائمة في الأجهزة الصغيرة */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* العناصر في المنتصف */}
                    <Nav className={`mx-auto ${styles.navLinks}`}>
                        <Nav.Link as={Link} to="/" className={styles.navItem}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className={styles.navItem}>About</Nav.Link>
                        <Nav.Link as={Link} to="/Projects" className={styles.navItem}>Projects</Nav.Link>
                        <Nav.Link as={Link} to="/Skills" className={styles.navItem}>Skills</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={styles.navItem}>Contact</Nav.Link>
                    </Nav>

                    {/* أيقونات السوشيال ميديا والواتساب */}
                    <SocialIcons />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
