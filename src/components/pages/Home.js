import React from "react";
// import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";

import Grid from "../atoms/Grid";
import Feature from "../atoms/Feature";
import Section from "../molecules/Section";
import Footer from "../organism/Footer";
import ProductGrid from "../organism/ProductGrid";
import Accordion, { AccordionGroup } from "../atoms/Accordion";
import HeroImage from "../../assets/hero.jpg";
import ServImage01 from "../../assets/serv-01.jpg";
import ServImage02 from "../../assets/serv-02.jpg";
import ServImage03 from "../../assets/serv-03.jpg";
import ServImage04 from "../../assets/serv-04.jpg";
import ServImage05 from "../../assets/serv-05.jpg";
import AboutVideo from "../../assets/road.mp4";

const products = [
  {
    id: 1,
    title: "1ª Habilitação Carro e Moto",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum ea labore. Minima totam.",
    image: ServImage01
  },
  {
    id: 2,
    title: "1ª Habilitação Carro",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum ea labore. Minima totam.",
    image: ServImage02
  },
  {
    id: 3,
    title: "1ª Habilitação Moto",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum ea labore. Minima totam.",
    image: ServImage03
  },
  {
    id: 4,
    title: "Mudança de Categoria Caminhão",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum ea labore. Minima totam.",
    image: ServImage04
  },
  {
    id: 5,
    title: "Aulas Avulsas",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum ea labore. Minima totam.",
    image: ServImage05
  }
];

const Home = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br />
          para ir e vir
        </h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
      <Button color="primary" variant="outlined">
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente Localização">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h4>Nascimento Auto Escola</h4>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            aliquam ab culpa quaerat amet asperiores quia animi ex corporis odit
            facilis deserunt atque facere! Optio aliquam perferendis sunt dicta
            in.
          </p>
          <div>
            <Button color="primary">Saiba Mais</Button>
          </div>
        </div>
        <div>
          <video
            src={AboutVideo}
            width="100%"
            autoPlay
            loop
            muted
            alt="Video by Ruvim Miksanskiy from Pexels"
          ></video>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Duvidas recorrentes</h2>
      </Heading>
        <AccordionGroup>  
          <Accordion title="Como eu renovo minha CNH?">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            dolores pariatur aut porro, iure optio consectetur repellat error
            quisquam sapiente dolorum quibusdam exercitationem commodi, voluptates
            asperiores facere sunt deserunt nesciunt.
          </Accordion>
          <Accordion title="Como faço a mudanaça de categoria?">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            dolores pariatur aut porro, iure optio consectetur repellat error
            quisquam sapiente dolorum quibusdam exercitationem commodi, voluptates
            asperiores facere sunt deserunt nesciunt.
          </Accordion>
          <Accordion title="Fui multado e agora?">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            dolores pariatur aut porro, iure optio consectetur repellat error
            quisquam sapiente dolorum quibusdam exercitationem commodi, voluptates
            asperiores facere sunt deserunt nesciunt.
          </Accordion>
        </AccordionGroup>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
