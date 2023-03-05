import LisaAsukoht from './LisaAsukoht'

function Asukohad({ ilmaAndmed, aktiivne, muudaAktiivset, avatudDetail, setAvatudDetail }) {
	const klikkReal = (index) => {
		muudaAktiivset(index)
	}

	return (
		<div className='asukoht'>
			<div className='asukoht-navigatsioon'>
				{ilmaAndmed.map((asukoht, index) => {
					let navItem = 'nav-item'
					if ((index === aktiivne) & (avatudDetail != 'LisaAsukoht')) {
						navItem += ' active'
					}
					return (
						<div key={index} className={navItem} onClick={() => klikkReal(index)}>
							<span>{asukoht.nimi}</span>
						</div>
					)
				})}
			</div>
			<div
				className={avatudDetail === 'LisaAsukoht' ? 'lisa-asukoht active' : 'lisa-asukoht'}
				onClick={() => {
					setAvatudDetail('LisaAsukoht')
				}}
			>
				<span>Lisa asukoht</span>
			</div>
		</div>
	)
}
export default Asukohad
