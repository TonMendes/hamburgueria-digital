import React, { useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";
import HeroImage from "../../assets/hero/hero-2.png";
import "./AboutStyle.css";

const diferenciais = [
  {
    image: Pizza,
    title: "Sabor Autêntico",
    paragraph:
      "Cada receita é desenvolvida pelo nosso chef com mais de 15 anos de experiência, garantindo um sabor único que você não encontra em outro lugar.",
  },
  {
    image: Salad,
    title: "Ingredientes Frescos",
    paragraph:
      "Selecionamos fornecedores locais e produtos orgânicos para garantir que cada mordida seja saudável, nutritiva e cheia de sabor.",
  },
  {
    image: Delivery,
    title: "Entrega Rápida",
    paragraph:
      "Nossa equipe de entrega é treinada para garantir que seu pedido chegue quente, no prazo e em perfeitas condições até a sua porta.",
  },
];

function About() {
  useEffect(() => {
    document.title = "Sobre Nós - Tasty Burger";
  }, []);

  return (
    <Layout>
      <section className="about_page_banner">
        <Container>
          <Row>
            <Col className="text-center">
              <h1>Sobre Nós</h1>
              <p>Conheça a história da Tasty Burger</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about_page_story">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <h2>Nossa História</h2>
              <p>
                A Tasty Burger nasceu em 2015 com um sonho simples: criar o
                hambúrguer artesanal mais gostoso da cidade. Tudo começou em
                uma cozinha pequena, com uma família apaixonada por culinária
                e um blend secreto desenvolvido ao longo de anos de pesquisa.
              </p>
              <p>
                Hoje, com mais de 10 anos no mercado, somos referência em
                sabor e qualidade. Nossa equipe cresceu, mas nossa essência
                continua a mesma: cada hambúrguer é feito com amor,
                ingredientes frescos e a dedicação de quem cozinha para a
                própria família.
              </p>
              <Link to="/menu" className="btn order_now btn_red mt-3">
                Ver Cardápio
              </Link>
            </Col>
            <Col lg={6} className="text-center">
              <img
                src={HeroImage}
                alt="Nosso hambúrguer artesanal"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about_page_values">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>Nossos Diferenciais</h2>
              <p>Por que a Tasty Burger é diferente de todas as outras?</p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            {diferenciais.map((item, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt={item.title}
                    />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default About;
