import React from "react";
import { Link } from "react-router-dom";
import styles from "./FloatingNav.module.css";

const FloatingNav = () => {
    return (
        <div className={styles.floatingNav}>
            <Link to="/" className={styles.navItem}>
                <i className="bi bi-house-door"></i>
                <span>Home</span>
            </Link>
            <Link to="/about" className={styles.navItem}>
                <i className="bi bi-person"></i>
                <span>About</span>
            </Link>
            <Link to="/projects" className={styles.navItem}>
                <i className="bi bi-file-earmark"></i>
                <span>Projects</span>
            </Link>
            <Link to="/skills" className={styles.navItem}>
                <i className="bi bi-tools"></i>
                <span>Skills</span>
            </Link>
            <Link to="/contact" className={styles.navItem}>
                <i className="bi bi-card-list"></i>
                <span>Contact</span>
            </Link>
        </div>
    );
};

export default FloatingNav;
