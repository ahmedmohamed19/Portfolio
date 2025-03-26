import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const mailtoLink = `mailto:ahmedmohamedahmeed6@gmail.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AReply to: ${email}`;
        window.location.href = mailtoLink;
    };

    return (
        <Container className={styles.contactSection}>
            <h2 className={styles.contactTitle}>Contact Me</h2>
            <Row>
                <Col lg={6} className={styles.contactInfo}>
                    <p><FaEnvelope className={styles.icon} /> <strong>Email:</strong> ahmedmohamedahmeed6@gmail.com</p>
                    <p><FaPhone className={styles.icon} /> <strong>Phone:</strong> +201062514437</p>
                    <p><FaMapMarkerAlt className={styles.icon} /> <strong>Location:</strong> 10th Of Ramadan, Egypt</p>
                </Col>
                <Col lg={6}>
                    <Form onSubmit={handleSubmit} className={styles.contactForm}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} required placeholder="Type your message here..." />
                        </Form.Group>
                        <Button type="submit" className={styles.submitButton}>Send Message</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
