import React from 'react'
import { Container, ToastContainer, Toast, Image, ButtonGroup, Button,Row,Col } from 'react-bootstrap'
import ppPlaceholder from '../assets/img/pp-placeholder.svg'
import arrowDown from '../assets/img/arrow-down.svg'
import routineIcon from '../assets/img/routine-icon.svg'
import excerciseIcon from '../assets/img/excercise-icon.svg'
import cronoIcon from '../assets/img/crono-icon.svg'
const Home = () => {
  return (
    <Container className="g-0 vh-100 d-flex flex-column pt-13 align-items-center">
      <ToastContainer className="p-3" position="top-end">
        <Toast>
          {/* <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header> */}
          <Toast.Body className="d-flex py-1 px-2 justify-content-between">
            <div className="d-flex" style={{ columnGap: .5 + 'rem' }}>
              <Image src={ppPlaceholder} />
              <div className="d-flex flex-column">
                <p className="m-0 text-primary fw-bold">Ragnar Lothbrok</p>
                <p className="m-0 font-sm text-primary">Categat</p>
              </div>
            </div>
            <Image src={arrowDown} />
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <h4 className="text-primary fw-bold pb-7">
        <span className="fw-normal">¡Hola</span> Ragnar Lotbrok!
      </h4>
      <p className="m-0 custom-font-1 pb-5 text-secondary">Tus métricas generales son las siguientes:</p>
      <ButtonGroup className="pb-5" style={{ columnGap: 18 + 'px' }}>
        <Button variant="outline-primary" className="rounded-pill px-6" style={{ paddingTop: 6 + 'px', paddingBottom: 6 + 'px' }}>Año</Button>
        <Button variant="outline-primary" className="rounded-pill px-6" style={{ paddingTop: 6 + 'px', paddingBottom: 6 + 'px' }}>Mes</Button>
        <Button variant="outline-primary" className="rounded-pill px-6" style={{ paddingTop: 6 + 'px', paddingBottom: 6 + 'px' }}>Semana</Button>
      </ButtonGroup>
      <div className="mini-dashboard d-flex">
        <Row className="g-0 w-100 font-secondary" xs={3}>
          <Col className="d-flex flex-column align-items-center py-5 px-7">
            <Image className="mb-3" src={routineIcon} style={{ width: 2 + 'rem' }} />
            <h1 className="mb-2 fw-bold text-primary">25</h1>
            <p className="m-0 font-sm font-primary">Rutinas realizadas</p>
          </Col>
          <Col className="d-flex flex-column align-items-center py-5 px-7">
            <Image className="mb-3" src={excerciseIcon} style={{ width: 2 + 'rem' }} />
            <h1 className="mb-2 fw-bold text-primary">124</h1>
            <p className="m-0 font-sm font-primary">Ejercicios realizados</p>
          </Col>
          <Col className="d-flex flex-column align-items-center py-5 px-7">
            <Image className="mb-3" src={cronoIcon} style={{ width: 2 + 'rem' }} />
            <h1 className="mb-2 fw-bold text-primary">146 <span className="fs-5">min.</span> </h1>
            <p className="m-0 font-sm text-black font-primary">Tiempo de ejercicio</p>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Home