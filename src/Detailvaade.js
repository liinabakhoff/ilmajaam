import Spinner from 'react-bootstrap/Spinner'

function Detailvaade({ koht }) {
	if (!koht.andmed) {
		return (
			<Spinner animation='border' role='status' variant='secondary'>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		)
	}
	return (
		<div className='detailvaade p-4'>
			<h2 className='detailvaade-pealkiri'>{koht.nimi}</h2>
			<small>
				<i>
					Lat: {koht.andmed.latitude} Long: {koht.andmed.longitude}
				</i>
			</small>
			<div>
				<div>Aeg: {koht.andmed.current_weather.time}</div>
				<div>Tuule kiirus: {koht.andmed.current_weather.windspeed}</div>
				<div>Ilm: {koht.andmed.current_weather.weathercode}</div>
				<div>Temperatuur: {koht.andmed.current_weather.temperature}</div>
			</div>
		</div>
	)
}
export default Detailvaade
