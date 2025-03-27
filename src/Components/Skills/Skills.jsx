import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiFirebase, SiFlutter, SiDart, SiNextdotjs, SiCplusplus } from "react-icons/si";
import styles from "./Skills.module.css";

const completedSkills = [
    { name: "HTML5", icon: <FaHtml5 />, level: "90%", color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, level: "85%", color: "#1572B6" },
    { name: "Bootstrap", icon: <FaBootstrap />, level: "85%", color: "#7952B3" },
    { name: "JavaScript", icon: <FaJs />, level: "80%", color: "#F7DF1E" },
    { name: "React.js", icon: <FaReact />, level: "80%", color: "#61DAFB" },
    { name: "Redux Toolkit", icon: <SiRedux />, level: "75%", color: "#764ABC" },
    { name: "Git", icon: <FaGitAlt />, level: "80%", color: "#F1502F" },
    { name: "GitHub", icon: <FaGithub />, level: "80%", color: "#181717" },
    { name: "Python", icon: <FaPython />, level: "75%", color: "#3776AB" },
    { name: "C++", icon: <SiCplusplus />, level: "70%", color: "#00599C" },
    { name: "OOP", icon: "🛠️", level: "80%", color: "#6A5ACD" },
    { name: "SOLID Principles", icon: "📐", level: "75%", color: "#FF6347" },
    { name: "Design Patterns", icon: "🎨", level: "70%", color: "#4682B4" },
    { name: "Data Structures & Algorithms", icon: "🔢", level: "65%", color: "#32CD32" }
];

const inProgressSkills = [
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "70%", color: "#38B2AC" },
    { name: "Next.js", icon: <SiNextdotjs />, level: "70%", color: "#000000" },
    { name: "Firebase", icon: <SiFirebase />, level: "65%", color: "#FFCA28" },
    { name: "Dart", icon: <SiDart />, level: "75%", color: "#02569B" },
    { name: "Flutter", icon: <SiFlutter />, level: "60%", color: "#02569B" },
];

const Skills = () => {
    return (
        <>
            <div className={styles.skillsSection}>
                <h2 className={styles.skillsTitle}>Skills</h2>
                <div className={styles.skillsContainer}>
                    {completedSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className={styles.skillItem}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.skillHeader}>
                                <span className={styles.skillIcon} style={{ color: skill.color }}>{skill.icon}</span>
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                            <div className={styles.progressBar}>
                                <motion.div
                                    className={styles.progressFill}
                                    style={{ backgroundColor: skill.color }}
                                    initial={{ width: "0%" }}
                                    animate={{ width: skill.level }}
                                    transition={{ duration: 1 }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className={styles.skillsSection}>
                <h2 className={styles.skillsTitle}>In Progress Skills</h2>
                <div className={styles.skillsContainer}>
                    {inProgressSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className={styles.skillItem}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.skillHeader}>
                                <span className={styles.skillIcon} style={{ color: skill.color }}>{skill.icon}</span>
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                            <div className={styles.progressBar}>
                                <motion.div
                                    className={styles.progressFill}
                                    style={{ backgroundColor: skill.color }}
                                    initial={{ width: "0%" }}
                                    animate={{ width: skill.level }}
                                    transition={{ duration: 1 }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Skills;
