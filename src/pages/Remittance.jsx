// import heroImg from '../assets/images/Hero-image.png';
// import scrollImg from '../assets/images/srcoll.svg';
import Hero from '../components/Hero';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import { useEffect, useState } from 'react';
import busdImg from '../assets/BUSD.svg';
import usdcImg from '../assets/USDC.svg';
import usdtImg from '../assets/USDT.svg';
import ghcImg from '../assets/ghana.svg';
import c2f from '../assets/icons/c2f.svg';
import treasury from '../assets/Treasury.svg';
import liquidity from '../assets/icons/liquidity.svg';
import reporting from '../assets/icons/reporting.svg';
import transaction from '../assets/icons/transaction.svg';
import kesImg from '../assets/kenya.svg';
import heroImg from '../assets/liquidity.svg';
import ngnImg from '../assets/nigeria.svg';
import Article from '../components/AContent';
import BusinessNeeds from '../components/BusinessNeeds';
import TableofContent from '../components/TOC';
import Tools from '../components/Tools';

const Remittance = () => {
	const [sidebarTop, setSidebarTop] = useState(undefined);

	useEffect(() => {
		const chatEl = document.querySelector('.sidebar')?.getBoundingClientRect();
		setSidebarTop(chatEl?.top);
	}, []);

	useEffect(() => {
		if (!sidebarTop) return;
		window.addEventListener('scroll', isSticky);
		return () => {
			window.removeEventListener('scroll', isSticky);
		};
	}, [sidebarTop]);

	const isSticky = () => {
		const chatEl = document.querySelector('.sidebar');
		const scrollTop = window.scrollY;
		if (scrollTop >= sidebarTop - 10) {
			chatEl.classList.add('is-sticky');
		} else {
			chatEl.classList.remove('is-sticky');
		}

		if (scrollTop >= 1900) {
			chatEl.classList.remove('is-sticky');
		}
	};
	return (
		<>
			<Hero
				minTitle='Fast and Reliable Remittance Services'
				title='Send Money Anywhere, Anytime'
				subTitle='Stay connected with loved ones and business partners across the globe. Our remittance services guarantee quick, reliable, and secure money transfers, so you can send funds effortlessly, knowing they will arrive safely and on time.'
				buttonTxt='Learn More'
				heroImg={treasury}
			/>
			<section
				className='
				py-[71px]
			lg:px-[61px]
			'
				// bg-[#F9FAFB]
			>
				<div
					className='container mx-auto
			px-7 pb-[28px] lg:pb-[48px]
			'
				>
					<div className='lg:w-[665px]'>
						<h2 className='font-[600] text-[30px] lg:text-[40px] lg:leading-[50px]'>
							Benefits
						</h2>

						<p className='font-[400px] text-[20px] text-[#101828] leading-[36px] py-[16px] pb-[24px]'>
                        Send money internationally with confidence. Our service offers fast transfers, competitive rates, and low fees, all supported by robust security and real-time tracking. Enjoy the convenience of 24/7 access and multiple payment options to connect with loved ones and business partners worldwide.
						</p>
					</div>
				</div>
				<Tools
					toolsData={[
						{
							icon: liquidity,
							title: 'Reliability',
							subTitle:
								'Dependable services ensure your money transfers are secure and reach the intended recipient without issues.'
						},
						{
							icon: transaction,
							title: 'Fast transactions',
							subTitle:
								'Intelligently routed transactions to ensure increased speed and deliverability.'
						},
						{
							icon: c2f,
							title: 'Convenient Access',
							subTitle:
								'Utilize multiple channels for remittance, including online platforms, mobile apps, and physical locations, providing flexibility and convenience.'
						},
						{
							icon: reporting,
							title: 'User-Friendly Platforms',
							subTitle:
								'Easy-to-use interfaces simplify the remittance process, making it accessible even for those with minimal technical knowledge.'
						}
					]}
				/>
			</section>

			<BusinessNeeds />
		</>
	);
};

export default Remittance;
