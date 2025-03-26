// components/SocialIcons.js
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
    return (
        <div className={styles.socialIcons}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
                <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.github}>
                <i className="bi bi-github"></i>
            </a>
            <a href="tel:01062514437" className={styles.phone}>
                <i className="bi bi-telephone-fill"></i>
            </a>
            <a href="https://wa.me/+201062514437" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
                <i className="bi bi-whatsapp"></i>
            </a>
        </div>
    );
};

export default SocialIcons;
