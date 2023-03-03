import { eventWrapper } from '@testing-library/user-event/dist/utils'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function LisaAsukoht({ lisaUusAsukoht }) {
	// Loo kolm sisestusvälja (nimi, latitude, longitude)
	// Loo kolm reacti muutujat sisestusväljade väärtuste hoidmiseks
	// Seo reacti muutujad sisestusväljadega
	// Kui vajutatakse nupule Lisa käivitatakse funktsioon mis teeb järgmist:
	// - loob uue objekti, millel on sarnased võtmed ülejäänud asukohtadega
	// - kutsu välja funktsioon lisaUusAsukoht andes sellele  parameetrina uus loodud objekt
	const [newLocation, setNewLocation] = useState({
		lat: 0,
		long: 0,
		nimi: '',
		andmed: null,
	})

	const handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value

		setNewLocation((prevState) => {
			return { ...newLocation, [name]: value }
		})
	}

	const handleSubmit = () => {}

	return (
		<div>
			<h3>Lisa asukoht</h3>
			<Form>
				<Form.Group as={Row} controlId='nimi' className='mb-3'>
					<Form.Label column sm={3}>
						Nimi
					</Form.Label>
					<Col sm={9}>
						<Form.Control
							name='nimi'
							placeholder='Nimi'
							required
							type='text'
							value={newLocation.nimi}
							onChange={handleChange}
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId='lat' className='mb-3'>
					<Form.Label column sm={3}>
						Latituut
					</Form.Label>
					<Col sm={9}>
						<Form.Control
							name='lat'
							placeholder='Latituut'
							required
							type='number'
							value={newLocation.lat}
							onChange={handleChange}
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId='long' className='mb-3'>
					<Form.Label column sm={3}>
						Longituut
					</Form.Label>
					<Col sm={9}>
						<Form.Control
							name='long'
							placeholder='Longituut'
							required
							type='number'
							value={newLocation.long}
							onChange={handleChange}
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row}>
					<Col sm={{ span: 9, offset: 3 }}>
						<Button variant='outline-primary' className='mr-2' onClick={handleSubmit}>
							Lisa
						</Button>
						<Button variant='outline-secondary'>Katkesta</Button>
					</Col>
				</Form.Group>
			</Form>
		</div>
	)
}
export default LisaAsukoht
