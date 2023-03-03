function Detailvaade({ koht }) {
	if (!koht.andmed) {
		return <div>Loading...</div>
	}
	return (
		<div className='detailvaade'>
			<h2 className='detailvaade-pealkiri'>{koht.nimi}</h2>
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
