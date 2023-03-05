import { useEffect, useState } from 'react'
import logo from './images/logo.png'
import Asukohad from './Asukohad'
import Detailvaade from './Detailvaade'
import LisaAsukoht from './LisaAsukoht'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function App() {
	const [aktiivne, setAktiivne] = useState(0)
	const [avatudDetail, setAvatudDetail] = useState('Detailvaade')
	const laeIlmaAndmed = async () => {
		const koht = ilmaAndmed[aktiivne]
		console.log('laeIlmaAndmed')
		if (koht.andmed) {
			return
		}

		const paring = `https://api.open-meteo.com/v1/forecast?latitude=${koht.lat}&longitude=${koht.long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
		const result = await fetch(paring)
		const andmed = await result.json()

		const uuedAndmed = { ...ilmaAndmed[aktiivne], andmed: andmed }
		console.log(andmed)

		setIlmaAndmed((vana) => {
			const uus = [...vana]
			uus[aktiivne] = uuedAndmed
			return uus
		})
	}

	const lisaUusAsukoht = (asukohtObj) => {
		setIlmaAndmed((vana) => {
			return [...ilmaAndmed, asukohtObj]
		})
		setAktiivne(ilmaAndmed.length)
		setAvatudDetail('Detailvaade')
	}

	const [ilmaAndmed, setIlmaAndmed] = useState([
		{
			lat: 58.378,
			long: 26.729,
			nimi: 'Tartu',
			andmed: null,
		},
		{
			lat: 59.437,
			long: 24.7536,
			nimi: 'Tallinn',
			andmed: null,
		},
		{
			lat: 59.437,
			long: 24.7536,
			nimi: 'Pärnu',
			andmed: null,
		},
	])

	const muudaAktiivset = (uusAktiivne) => {
		setAktiivne(uusAktiivne)
		setAvatudDetail('Detailvaade')
	}

	useEffect(() => {
		laeIlmaAndmed()
	}, [aktiivne])

	return (
		<Container id='page-container' className='p-0'>
			<Navbar bg='light' variant='light'>
				<Container className='p-3'>
					<Navbar.Brand href='#home'>
						<img
							alt=''
							src={logo}
							width='60'
							height='60'
							className='d-inline-block align-top'
						/>
						<span className='brand-txt ml-3'>Ilmajaam</span>
					</Navbar.Brand>
				</Container>
			</Navbar>
			<div className='page'>
				<Asukohad
					ilmaAndmed={ilmaAndmed}
					aktiivne={aktiivne}
					muudaAktiivset={muudaAktiivset}
					avatudDetail={avatudDetail}
					setAvatudDetail={setAvatudDetail}
				/>
				{avatudDetail === 'Detailvaade' && <Detailvaade koht={ilmaAndmed[aktiivne]} />}
				{avatudDetail === 'LisaAsukoht' && (
					<LisaAsukoht
						lisaUusAsukoht={lisaUusAsukoht}
						setAvatudDetail={setAvatudDetail}
					/>
				)}
			</div>
		</Container>
	)
}

export default App
