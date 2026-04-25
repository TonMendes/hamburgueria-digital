import React, { useState, useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactStyle.css";

function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    document.title = "Contato - Tasty Burger";
  }, []);

  useEffect(() => {
    if (enviado) {
      const timer = setTimeout(() => {
        setEnviado(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [enviado]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <Layout>
      <section className="contact_page_banner">
        <Container>
          <Row>
            <Col className="text-center">
              <h1>Contato</h1>
              <p>Fale com a gente, estamos aqui para ajudar</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact_page_section">
        <Container>
          <Row>
            <Col lg={6} className="mb-5 mb-lg-0">
              <h2>Envie uma Mensagem</h2>
              <p className="contact_intro">
                Tem alguma dúvida, sugestão ou quer fazer um pedido especial?
                Preencha o formulário abaixo e retornaremos em breve.
              </p>

              {enviado && (
                <div className="contact_success">
                  <i className="bi bi-check-circle me-2"></i>
                  Mensagem enviada com sucesso!
                </div>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMensagem">
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="mensagem"
                    rows={5}
                    placeholder="Escreva sua mensagem aqui..."
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button type="submit" className="btn btn_red px-4 py-2 rounded-0">
                  Enviar Mensagem
                </Button>
              </Form>
            </Col>

            <Col lg={6} className="ps-lg-5">
              <h2>Informações</h2>
              <div className="contact_info_box">
                <div className="contact_info_item">
                  <i className="bi bi-geo-alt"></i>
                  <div>
                    <h5>Endereço</h5>
                    <p>Rua JK, n° 120 — Centro</p>
                    <p>CEP 30990-000 — Brasil</p>
                  </div>
                </div>
                <div className="contact_info_item">
                  <i className="bi bi-clock"></i>
                  <div>
                    <h5>Horário de Funcionamento</h5>
                    <p>Seg–Sex: 9:00 às 22:00</p>
                    <p>Sábado: 10:00 às 20:30</p>
                    <p>Domingo: 12:00 às 17:00</p>
                  </div>
                </div>
                <div className="contact_info_item">
                  <i className="bi bi-telephone"></i>
                  <div>
                    <h5>Telefone</h5>
                    <p>(11) 99999-8888</p>
                  </div>
                </div>
                <div className="contact_info_item">
                  <i className="bi bi-envelope"></i>
                  <div>
                    <h5>E-mail</h5>
                    <p>contato@tastyburger.com.br</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Contact;
