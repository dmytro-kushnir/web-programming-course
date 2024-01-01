import { Link } from 'react-router-dom';
import './homePage.scss';
import { FaArrowRight, FaBookOpen, FaCode } from 'react-icons/fa';

import { Container, Row, Col } from 'react-bootstrap';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import Image from '../image/index.tsx';

function CourseIntro() {
  const config = useConfig(useAppName());
  const { appPath } = config;

  return (
    <section>
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg={5}>
            <Image path="/images/apps/wp/about.jpg" alt="Мета та завдання курсу" />
          </Col>
          <Col lg={7}>
            <div className="wow fadeInUp">
              <h2>Мета та завдання курсу</h2>
              {/* eslint-disable-next-line max-len */}
              <p>Мета курсу - формування сучасного рівня інформаційної та комп&apos;ютерної культури, набуття практичних навичок роботи при створенні інтерактивних технологій.</p>
              {/* eslint-disable-next-line max-len */}
              <p>В навчальній дисципліні відбувається ознайомлення студентів концептуальним основам сучасних мов Веб-програмування:</p>
              <ul className="about-list">
                <li>
                  <FaArrowRight className="fa-arrow-right" />
                  {/* eslint-disable-next-line max-len */}
                  Концепції дії, концепції розробки Веб-додатків, концепції стилів у Веб-програмуванні.
                </li>
                <li>
                  <FaArrowRight className="fa-arrow-right" />
                  Загальним положеням та властивостям технологій Веб-програмування.
                </li>
                <li>
                  <FaArrowRight className="fa-arrow-right" />
                  Стандартам розробки програмного забезпечення.
                </li>
                <li>
                  <FaArrowRight className="fa-arrow-right" />
                  Побудови складних систем на базі технології Веб-програмування.
                </li>
              </ul>
              {/* eslint-disable-next-line max-len */}
              <p>Завдання курсу полягає у тому, щоб навчити студентів використовувати підходи до реалізації динамічних веб-додатків, вибір відповідних засобів при розв’язанні конкретних задач, продемонструвати різноманітність варіантів для втілення власних ідей.</p>
              <Link to={`${appPath}/self-work`} className="button button-effect">Підсумок вивчення</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function CourseInfo() {
  const config = useConfig(useAppName());
  const { appPath } = config;

  return (
    <section className="courseshort">
      <Container>
        <Row className="courseshort-box wow fadeInUp">
          <Col className="courseshort-item">
            <div className="courseshort-item-content">
              <h4>Теоретична частина</h4>
              <p>Лекції, презентації</p>
            </div>
            <Link to={`${appPath}/lectures`}>
              <FaBookOpen className="icon" />
            </Link>
          </Col>
          <Col className="courseshort-item courseshort-item-secondary">
            <div className="courseshort-item-content">
              <h4>Практична частина</h4>
              <p>Лабораторні та самостійна роботи</p>
            </div>
            <Link to={`${appPath}/self-work`}>
              <FaCode className="icon" />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function HomePage() {
  return (
    <main>
      <CourseIntro />
      <CourseInfo />
    </main>
  );
}

export default HomePage;
