import { useEffect, useState } from 'react'
import './App.css'
import Asukohad from './Asukohad'
import Detailvaade from './Detailvaade'
import LisaAsukoht from './LisaAsukoht'

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
		//lisa asukohtObj ilmaAndmed massiivi funktsiooni setIlmaAndmed abil. Kasuta parameeterfunktsiooni
		//muuda muutuja aktiivne väärtust nii et see oleks võrdne ilmaAndmete massiivi pikkusega + 1
		//muuda muutuja avatudDetail väärtust nii et ilma aktiivse ilma andmed oleksid näha
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
		<div className='container'>
			<h1>Ilmajaam</h1>
			<div className='page'>
				<Asukohad
					ilmaAndmed={ilmaAndmed}
					aktiivne={aktiivne}
					muudaAktiivset={muudaAktiivset}
					setAvatudDetail={setAvatudDetail}
				/>
				{avatudDetail === 'Detailvaade' && <Detailvaade koht={ilmaAndmed[aktiivne]} />}
				{avatudDetail === 'LisaAsukoht' && <LisaAsukoht lisaUusAsukoht={lisaUusAsukoht} />}
			</div>
		</div>
	)
}

export default App
