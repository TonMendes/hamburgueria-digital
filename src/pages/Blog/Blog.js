import React, { useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";
import Burger1 from "../../assets/menu/burger-11.jpg";
import Burger2 from "../../assets/menu/burger-15.jpg";
import Burger3 from "../../assets/menu/burger-17.jpg";
import "./BlogStyle.css";

const posts = [
  {
    image: Burger1,
    data: "15 de Março, 2026",
    titulo: "O segredo do blend perfeito",
    resumo:
      "Descubra como desenvolvemos a combinação ideal de carnes para criar o hambúrguer mais suculento da cidade. Uma história de paixão e pesquisa.",
  },
  {
    image: Burger2,
    data: "02 de Abril, 2026",
    titulo: "Double Burger: a nova sensação",
    resumo:
      "O Double Burger chegou para saciar a fome de verdade. Conheça os bastidores da criação do nosso lançamento mais esperado do ano.",
  },
  {
    image: Burger3,
    data: "18 de Abril, 2026",
    titulo: "Defumação artesanal: como fazemos",
    resumo:
      "O processo de defumação do Smokey House leva horas de dedicação. Veja como transformamos uma técnica tradicional em sabor premium.",
  },
];

function Blog() {
  useEffect(() => {
    document.title = "Blog - Tasty Burger";
  }, []);

  return (
    <Layout>
      <section className="blog_page_banner">
        <Container>
          <Row>
            <Col className="text-center">
              <h1>Blog</h1>
              <p>Novidades, dicas e bastidores da Tasty Burger</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="blog_page_posts">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>Últimas Publicações</h2>
            </Col>
          </Row>
          <Row>
            {posts.map((post, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <div className="blog_card">
                  <div className="blog_card_img overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.titulo}
                      className="img-fluid"
                    />
                  </div>
                  <div className="blog_card_body">
                    <span className="blog_date">{post.data}</span>
                    <h4>{post.titulo}</h4>
                    <p>{post.resumo}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="blog_page_reviews">
        <Container>
          <Row>
            <Carousel controls={true} indicators={true} interval={5000}>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User1} className="img-fluid" alt="Depoimento 1" />
                  </div>
                  <p>
                    "O atendimento é impecável e o hambúrguer chegou quentinho!
                    Dá para sentir que os ingredientes são frescos. Com certeza
                    meu novo lugar favorito para pedir no final de semana."
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5>POR RICARDO SANTOS</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User2} className="img-fluid" alt="Depoimento 2" />
                  </div>
                  <p>
                    "A opção vegana é simplesmente sensacional! É difícil achar
                    um burger vegetal tão bem temperado e suculento. O molho de
                    ervas da casa é o toque final perfeito."
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5>POR AMANDA OLIVEIRA</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User3} className="img-fluid" alt="Depoimento 3" />
                  </div>
                  <p>
                    "Melhor custo-benefício da região. Os combos são muito bem
                    servidos e a entrega foi muito mais rápida do que eu esperava.
                    Recomendo o Ultimate Bacon para quem tem fome de verdade!"
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5>POR JOÃO FERREIRA</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User4} className="img-fluid" alt="Depoimento 4" />
                  </div>
                  <p>
                    "Fiz um pedido para a família toda e todos adoraram. A
                    facilidade de pedir pelo app e o desconto de primeira
                    compra foram ótimos diferenciais. Nota dez!"
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5>POR JULIANA COSTA</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Blog;
