import React, { useState } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import ppPlaceholderBig from '../assets/img/pp-placeholder-big.svg'
import atrasIcon from '../assets/img/atras-icon.svg'
const Profile = () => {
  const [control, setControl] = useState(true);

  const handleControl = () => {
    setControl(!control);
  }
  const handleBack = () => {
    setControl(!control);
  }
  return (
    <>
      {!control ?
        <div className='ms-8 mt-3 d-flex align-items-center float-start' style={{ cursor: 'pointer', columnGap: 12 + 'px' }} onClick={handleBack} >
          <Image src={atrasIcon} />
          <p className="m-0 text-primary font-sm">Atrás</p>
        </div>
        :
        <></>
      }
      <Container className="g-0 vw-75 vh-100 d-flex flex-column pt-md-7 pt-xxl-13 align-items-center overflow-auto">
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
            <Col className="profile-col p-3 position-relative" style={control ? { width: 399 + 'px', minHeight: 474 + 'px' } : { width: 399 + 'px', minHeight: 520 + 'px' }}>
              <Form>
                <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicNombre" style={control ? { columnGap: 2 + 'rem' } : { columnGap: 1.2 + 'rem' }}>
                  <Form.Label className="m-0 font-sm text-secondary">Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su nombre" className="py-2 px-3 font-sm text-secondary" />
                  {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicApellido" style={control ? { columnGap: 2 + 'rem' } : { columnGap: 1.2 + 'rem' }}>
                  <Form.Label className="m-0 font-sm text-secondary">Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su apellido" className="py-2 px-3 font-sm text-secondary" />
                </Form.Group>

                <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicEmail" style={control ? { columnGap: 2 + 'rem' } : { columnGap: 1.2 + 'rem' }}>
                  <Form.Label className="m-0 font-sm text-secondary">Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="rufian.contreri@company.com" className="py-2 px-3 font-sm text-secondary" />
                </Form.Group>

                <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicEmpresa" style={control ? { columnGap: 2 + 'rem' } : { columnGap: 1.2 + 'rem' }}>
                  <Form.Label className="m-0 font-sm text-secondary">Organización</Form.Label>
                  <Form.Control type="text" placeholder="My Company" className="py-2 px-3 font-sm text-secondary" />
                </Form.Group>

                <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicNacimiento" style={control ? { columnGap: 2 + 'rem' } : { columnGap: 1.2 + 'rem' }}>
                  <Form.Label className="m-0 font-sm text-secondary">Fecha de nacimiento</Form.Label>
                  <Form.Control type="date" placeholder="dd/mm/yyyy" className="py-2 px-3 font-sm text-secondary" />
                </Form.Group>

                <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicPeso" style={control ? { columnGap: 2 + 'rem' } : { columnGap: 1.2 + 'rem' }}>
                  <Form.Label className="m-0 font-sm text-secondary">Peso</Form.Label>
                  <Form.Control type="text" placeholder="kg" className="py-2 px-3 font-sm text-secondary" />
                </Form.Group>

                <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicTalla" style={control ? { columnGap: 2 + 'rem' } : { columnGap: 1.2 + 'rem' }}>
                  <Form.Label className="m-0 font-sm text-secondary">Talla</Form.Label>
                  <Form.Control type="text" placeholder="cm" className="py-2 px-3 font-sm text-secondary" />
                </Form.Group>
                {control ?
                  <>
                    <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicContraseña" style={control ? { columnGap: 2 + 'rem' } : { columnGap: 1.2 + 'rem' }}>
                      <Form.Label className="m-0 font-sm text-secondary">Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="********" className="py-2 px-3 font-sm text-secondary" />
                    </Form.Group>
                    <div className="d-flex m-0 justify-content-end px-2">
                      <p className="m-0 font-sm text-primary text-decoration-underline" onClick={handleControl} style={{ cursor: 'pointer' }}>Cambiar contraseña</p>
                    </div>
                  </>
                  :
                  <>
                    <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicContraseñaActual" style={control ? { columnGap: 2 + 'rem' } : { columnGap: 1.2 + 'rem' }}>
                      <Form.Label className="m-0 font-sm text-secondary">Contraseña actual</Form.Label>
                      <Form.Control type="password" placeholder="********" className="py-2 px-3 font-sm text-secondary" />
                    </Form.Group>
                    <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicContraseñaNueva" style={control ? { columnGap: 2 + 'rem' } : { columnGap: 1.2 + 'rem' }}>
                      <Form.Label className="m-0 font-sm text-secondary">Nueva contraseña</Form.Label>
                      <Form.Control type="password" placeholder="********" className="py-2 px-3 font-sm text-secondary" />
                    </Form.Group>
                    <Form.Group className="mb-1 d-flex align-items-center" controlId="formBasicContraseñaNuevaRep" style={control ? { columnGap: 2 + 'rem' } : { columnGap: 1.2 + 'rem' }}>
                      <Form.Label className="m-0 font-sm text-secondary">Repetir nueva contraseña</Form.Label>
                      <Form.Control type="password" placeholder="********" className="py-2 px-3 font-sm text-secondary" />
                    </Form.Group>
                  </>
                }
                <Button variant="primary" type="submit" className="position-absolute btn-submit" style={control ? { bottom: 17 + 'px' } : { bottom: 10 + 'px' }}>
                  Guardar
                </Button>
              </Form>

            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Profile