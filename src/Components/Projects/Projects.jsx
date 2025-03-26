import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./Projects.module.css";
import shopEaseImg from "../../assets/shopify.webp";
import MovieImg from "../../assets/movie.webp";
import foodRecipesImg from "../../assets/recipes.avif";

const projects = [
    {
        title: "Shop Ease",
        description: "An E-commerce platform for easy online shopping.",
        image: shopEaseImg,
        liveDemo: "https://shop-eeasee.netlify.app/",
        github: "https://github.com/ahmedmohamed19/shop-Ease",
        techStack: ["React", "Redux Toolkit", "Bootstrap"]
    },
    {
        title: "Food Recipes",
        description: "A recipe app to explore and save your favorite dishes.",
        image: foodRecipesImg,
        liveDemo: "https://food-recipes10.netlify.app/",
        github: "https://github.com/ahmedmohamed19/Food-Recipes",
        techStack: ["React", "API Integration", "CSS"]
    },
    {
        title: "Movie DB",
        description: "A movie database app to discover trending movies.",
        image: MovieImg,
        liveDemo: "https://movidb10.netlify.app/",
        github: "https://github.com/ahmedmohamed19/Movie",
        techStack: ["React", "TMDB API", "Styled Components"]
    }
];

const Projects = () => {
    return (
        <Container className={styles.projectsSection}>
            <h2 className={styles.projectsTitle}>My Projects</h2>
            <Row>
                {projects.map((project, index) => (
                    <Col key={index} md={6} lg={4} className="mb-4">
                        <Card className={styles.projectCard}>
                            <Card.Img variant="top" src={project.image} className={styles.projectImage} />
                            <Card.Body className={styles.projectInfo}>
                                <Card.Title className={styles.projectTitle}>{project.title}</Card.Title>
                                <Card.Text className={styles.projectDescription}>{project.description}</Card.Text>
                                <div className={styles.techStack}>
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className={styles.techBadge}>{tech}</span>
                                    ))}
                                </div>
                                <div className={styles.projectLinks}>
                                    <Button href={project.liveDemo} target="_blank" className={`${styles.projectButton} ${styles.liveDemo}`}>Live Demo</Button>
                                    <Button href={project.github} target="_blank" className={`${styles.projectButton} ${styles.githubRepo}`}>GitHub</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Projects;
