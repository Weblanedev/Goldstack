import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-new-white.svg';
import footerImg from '../assets/footer-img.svg';
import { Button } from './CustomButtons';

const navigation = [
	{ name: 'Home', to: '/', component: <h1>Home</h1>, current: true },
	{
		name: 'About ',
		to: '/company',
		component: <h1>About</h1>,
		current: true
	},
	{
		name: 'Contact',
		to: '/contact',
		component: <h1>Contact</h1>,
		current: true
	},
	{
		name: 'Terms of Services',
		to: '/terms-of-services',
		component: <h1>Terms of Services</h1>,
		current: true
	}

	// {
	// 	name: '',
	// 	to: '/contact',
	// 	component: <h1>Contact</h1>,
	// 	current: true
	// }
];
const navigation2 = [
	{
		name: 'Corporate Treasury',
		to: '/products/view-treasury',
		component: <h1>Treasury</h1>,
		current: true
	},
	{
		name: 'Payments',
		to: '/products/payment-links',
		component: <h1>Payments</h1>,
		current: true
	},
	{
		name: 'Foreign Exchange',
		to: '/products/foreign-exchnage',
		component: <h1>Foreign Exchange</h1>,
		current: true
	},
	{
		name: 'Remittance',
		to: '/products/remittance',
		component: <h1>Remittance</h1>,
		current: true
	}
];
const Footer = () => {
	const location = useLocation()?.pathname;
	const check = location === '/company' || location === '/contact';
	return (
		<footer className='w-full text-white relative bg-[#011b33]'>
			<div className='absolute'>
				<img src={footerImg} alt='img' className='w-screen h-50' />
			</div>
			<div className='pt-[120px] w-full flex justify-center items-center z-50'>
				<div
					// md:max-w-6xl
					className='container

				mx-auto z-50 px-7 justify-center'
				>
					<div className='flex flex-col justify-center items-center lg:w-[658px] mx-auto'>
						<h3 className='text-[20px] lg:text-[40px] text-[#F2F4F7] font-[600] lg:leading-[60px] text-center mb-[23px]'>
							{check === false
								? 'Build seamlessly, launch quickly'
								: 'Grow your business across the world with our fast,cost-effective and easy-to-use services.'}
						</h3>
						<Link to='/contact'>
						<Button btnText='Talk to us' icon={true} bgColor={false} />
						</Link>
					</div>
					<div
						className='grid md:grid-cols-2 lg:grid-cols-3 text-white
					mt-[200px]
					mb-[44px]
					'
					>
						<div className='grid grid-cols-1  h-fit'>
							<Link to='/'>
								<img
									src={logo}
									alt='Goldstack logo'
									className='w-[50px] sm:w-[75px] sm:h-[37.5px]'
								/>
							</Link>

							<p className='font-[400] text-[14px] leading-[24px]  pt-[16.82px] lg:w-[300px]'>
								GOLDSTACK TECHNOLOGIES LIMITED offers a full range of Treasury, FX, and Payments services for pan-African and international enterprises.

							</p>
							<p
								className='mt-[10px] font-[400] text-[14px] leading-[24px] lg:w-[300px]'
							>
								GOLDSTACK TECHNOLOGIES LIMITED is now listed on <strong>FINTRAC</strong>'s public <strong>MSB</strong> Registry.
							</p>
						</div>
						<div className='flex items-center lg:justify-center mt-4 lg:mt-0'>
							<div className='grid grid-cols-2 justify-center gap-8'>
								<div className='grid grid-cols-1 h-fit gap-4'>
									<h6 className='text-left text-[18px] leading-[42px] font-[500]'>
										Company
									</h6>
									<div className='grid grid-cols-1 p-0'>
										{navigation.map((navigationItem) => (
											<Link
												className='text-left text-[14px] leading-[22px] font-[400] mb-4'
												key={navigationItem.name}
												to={navigationItem.to}
												aria-current={
													navigationItem.current ? 'page' : undefined
												}
											>
												{navigationItem.name}
											</Link>
										))}
									</div>
								</div>
								<div className='grid grid-cols-1 gap-4'>
									<h6 className='text-[18px] leading-[42px] font-[500]'>
										Service
									</h6>
									<div className='grid grid-cols-1'>
										{navigation2.map((navigationItem) => (
											<Link
												className='text-left text-[14px] leading-[22px] font-[400] mb-4'
												key={navigationItem.name}
												to={navigationItem.to}
												aria-current={
													navigationItem.current ? 'page' : undefined
												}
											>
												{navigationItem.name}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className='grid grid-cols-1 gap-4  h-fit lg:ml-auto'>
							<h6
								className='text-[18px] leading-[42px] font-[500]
									'
							// mb-[6px]
							>
								Get in Touch
							</h6>
							<div className='grid grid-cols-1 gap-4'>
								<Link
									className='text-left text-[14px] leading-[22px] font-[400]
									'
									// mb-4
									to='mailto:info@goldstack.co'
								// aria-current={
								// 	navigationItem.current ? 'page' : undefined
								// }
								>
									info@goldstack.co
								</Link>

							</div>
							<div className='ml-auto'></div>
						</div>
					</div>

					<div className='flex flex-col sm:flex-row justify-center py-[24px]  text-white text-[14px] leading-[22px] font-[400] border-t-[1px] border-t-white'>
						<div>
							<p>
								© {new Date().getFullYear()} Goldstack Inc. All rights
								reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
