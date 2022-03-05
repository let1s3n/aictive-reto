import React from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import ppPlaceholderBig from '../assets/img/pp-placeholder-big.svg'
const Profile = () => {
  return (
    <Container className="g-0 vh-100 d-flex flex-column pt-13 align-items-center">
      <div>
        <Row className="g-0 mb-2">
          <h5 className="m-0 text-primary">Mi cuenta</h5>
        </Row>
        <Row className="g-0" style={{ columnGap: 1 + 'rem' }} xs="auto">
          <Col className="profile-col d-flex flex-column align-items-center justify-content-center" style={{ width: 222 + 'px', height: 291 + 'px' }}>
            <Image src={ppPlaceholderBig} className="mb-5" />
            <div>
              <p className="mb-2 font-sm text-primary fw-bold text-decoration-underline">Subir una foto nueva</p>
              <p className="m-0 text-primary font-sm text-decoration-underline">Quitar foto</p>
            </div>
          </Col>
          <Col className="profile-col p-3 position-relative" style={{ width: 399 + 'px', height: 474 + 'px' }}>
            <Form>
              <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicNombre" style={{ columnGap: 2 + 'rem' }}>
                <Form.Label className="m-0 font-sm text-secondary">Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" className="py-2 px-3 font-sm text-secondary" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicApellido" style={{ columnGap: 2 + 'rem' }}>
                <Form.Label className="m-0 font-sm text-secondary">Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su apellido" className="py-2 px-3 font-sm text-secondary" />
              </Form.Group>

              <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicEmail" style={{ columnGap: 2 + 'rem' }}>
                <Form.Label className="m-0 font-sm text-secondary">Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="rufian.contreri@company.com" className="py-2 px-3 font-sm text-secondary" />
              </Form.Group>

              <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicEmpresa" style={{ columnGap: 2 + 'rem' }}>
                <Form.Label className="m-0 font-sm text-secondary">Organización</Form.Label>
                <Form.Control type="text" placeholder="My Company" className="py-2 px-3 font-sm text-secondary" />
              </Form.Group>

              <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicNacimiento" style={{ columnGap: 2 + 'rem' }}>
                <Form.Label className="m-0 font-sm text-secondary">Fecha de nacimiento</Form.Label>
                <Form.Control type="date" placeholder="dd/mm/yyyy" className="py-2 px-3 font-sm text-secondary" />
              </Form.Group>

              <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicPeso" style={{ columnGap: 2 + 'rem' }}>
                <Form.Label className="m-0 font-sm text-secondary">Peso</Form.Label>
                <Form.Control type="text" placeholder="kg" className="py-2 px-3 font-sm text-secondary" />
              </Form.Group>

              <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicTalla" style={{ columnGap: 2 + 'rem' }}>
                <Form.Label className="m-0 font-sm text-secondary">Talla</Form.Label>
                <Form.Control type="text" placeholder="cm" className="py-2 px-3 font-sm text-secondary" />
              </Form.Group>

              <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicContraseña" style={{ columnGap: 2 + 'rem' }}>
                <Form.Label className="m-0 font-sm text-secondary">Contraseña</Form.Label>
                <Form.Control type="password" placeholder="********" className="py-2 px-3 font-sm text-secondary" />
              </Form.Group>
              <div className="d-flex m-0 justify-content-end px-2">
                <p className="m-0 font-sm text-primary text-decoration-underline">Cambiar contraseña</p>
              </div>
              <Button variant="primary" type="submit" className="position-absolute btn-submit">
                Guardar
              </Button>
            </Form>

          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Profile