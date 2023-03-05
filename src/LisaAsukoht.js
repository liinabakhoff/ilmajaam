import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// Küsimus: Kas alamkomponendid peaksid olema dumb komponendid - sh LisaAsukoht?
// Kas state peaks olema App.js-is?

function LisaAsukoht({ lisaUusAsukoht, setAvatudDetail }) {
	const [newLocation, setNewLocation] = useState({
		nimi: '',
		lat: '',
		long: '',
		andmed: null,
	})

	const handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value

		setNewLocation((prevState) => {
			return { ...newLocation, [name]: value }
		})
	}

	const handleSubmit = () => {
		lisaUusAsukoht(newLocation)
		resetNewLocation()
	}

	const resetNewLocation = () => {
		setNewLocation((prevState) => {
			return { ...prevState, nimi: '', lat: '', long: '' }
		})
	}

	const handleCancel = () => {
		resetNewLocation()
		setAvatudDetail('Detailvaade')
	}

	return (
		<div className='lisa-asukoht-vaade p-4'>
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
						<Button variant='outline-secondary' onClick={handleCancel}>
							Katkesta
						</Button>
					</Col>
				</Form.Group>
			</Form>
		</div>
	)
}
export default LisaAsukoht
