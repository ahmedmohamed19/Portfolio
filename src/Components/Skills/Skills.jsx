import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiFirebase } from "react-icons/si";
import styles from "./Skills.module.css";

const skills = [
    { name: "HTML", icon: <FaHtml5 />, level: "90%", color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, level: "85%", color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, level: "80%", color: "#F7DF1E" },
    { name: "React.js", icon: <FaReact />, level: "80%", color: "#61DAFB" },
    { name: "Redux Toolkit", icon: <SiRedux />, level: "75%", color: "#764ABC" },
    { name: "Bootstrap", icon: <FaBootstrap />, level: "85%", color: "#7952B3" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "70%", color: "#38B2AC" },
    { name: "Firebase", icon: <SiFirebase />, level: "65%", color: "#FFCA28" },
    { name: "Git", icon: <FaGitAlt />, level: "80%", color: "#F1502F" },
    { name: "GitHub", icon: <FaGithub />, level: "80%", color: "#181717" },
];

const Skills = () => {
    return (
        <div className={styles.skillsSection}>
            <h2 className={styles.skillsTitle}>Skills</h2>
            <div className={styles.skillsContainer}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                        <div className={styles.skillHeader}>
                            <span className={styles.skillIcon} style={{ color: skill.color }}>{skill.icon}</span>
                            <span className={styles.skillName}>{skill.name}</span>
                        </div>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: skill.level, backgroundColor: skill.color }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
