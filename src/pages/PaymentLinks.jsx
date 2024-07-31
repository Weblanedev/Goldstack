// import heroImg from '../assets/images/Hero-image.png';
// import scrollImg from '../assets/images/srcoll.svg';
import Hero from '../components/Hero';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import { useEffect, useState } from 'react';
import auImg from '../assets/australia.svg';
import bank from '../assets/bankImg.svg';
import heroImg from '../assets/payment.svg';
import canImg from '../assets/canada.svg';
import cnyImg from '../assets/china.svg';
import crypto from '../assets/crypto.svg';
import eurImg from '../assets/euro.svg';
import custody from '../assets/icons/custody.svg';
import liquidity from '../assets/icons/liquidity.svg';
import reporting from '../assets/icons/reporting.svg';
import transaction from '../assets/icons/transaction.svg';
import mobile from '../assets/mobile-money.svg';
import third from '../assets/thirdparty.svg';
import ukImg from '../assets/united-kingdom.svg';
import usImg from '../assets/united-state.svg';
import Article from '../components/AContent';
import BusinessNeeds from '../components/BusinessNeeds';
import TableofContent from '../components/TOC';
import Tools from '../components/Tools';
const PaymentLinks = () => {
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

		if (scrollTop >= 2284) {
			chatEl.classList.remove('is-sticky');
		}
	};
	return (
		<>
			<Hero
				minTitle='Payment Link'
				title='Secure and Efficient Payment Solutions'
				subTitle='Ensure your business operates smoothly with our secure payment gateways. From online purchases to vendor payments, our solutions provide fast, reliable, and secure transactions, giving you the confidence to focus on what matters most—growing your business.'
				buttonTxt='Learn More'
				heroImg={heroImg}
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
						Our cutting-edge technology facilitates smooth and secure transactions, 
						offering individuals and businesses a dependable solution for buying and selling assets.
						</p>
					</div>
				</div>
				<Tools
					toolsData={[
						{
							icon: liquidity,
							title: 'Security',
							subTitle: 'Payment links are usually hosted by secure payment processors, reducing the risk of fraud and ensuring that customer payment information is handled safely.'
						},
						{
							icon: custody,
							title: 'Convenience',
							subTitle:
								'Payment links allow customers to make payments quickly and easily from any device, without needing to enter credit card information repeatedly.'
						},
						{
							icon: transaction,
							title: 'Reduced Errors',
							subTitle:
								'Since payment links are pre-filled with payment details, customers are less likely to make errors during the payment process.'
						},
						{
							icon: reporting,
							title: 'Ease of Use',
							subTitle:
								'Customers can pay with a single click or tap, making the payment process smooth and hassle-free.'
						}
					]}
				/>
				<div
					className='container mx-auto
					px-7
					'
				>
					<div
						className='flex flex-col lg:flex-row lg:grid-cols-2
						items-start pt-[112px]'
					>
						<div
							className={`hidden lg:block lg:grid-cols-1

							 lg:w-[338px]
							 `}
							//  ${ref?.current?.offsetTop > window?.scrollY && 'fixed'}
							//  sticky
						>
							<TableofContent
								headings={[
									{
										level: 1,
										text: 'Payout Types',
										id: 'payout'
									},
									{
										level: 2,
										text: 'Supported currencies',
										id: 'currency'
									}
								]}
							/>
						</div>
						<Article
							payoutText='We offer a range of payout types to suit your preferences'
							payoutData={[
								{ name: 'Banks', img: bank },
								{ name: 'Mobile Money', img: mobile },
								{ name: 'Crypto', img: crypto },
								{ name: 'Third Party', img: third }
							]}
							currency='Our platform supports a wide range of  currencies to enable you stay ahead of the curve'
							currencyData={[
								{ name: 'US Dollar (USD)', img: usImg },
								{ name: 'Euro (EUR)', img: eurImg },
								{ name: 'Pound sterling (GBP)', img: ukImg },
								{ name: 'Canadian dollar (CAD)', img: canImg },
								{ name: 'Australian dollar (AUD)', img: auImg },
								{ name: 'Chinese yen (CNY)', img: cnyImg }
							]}
						/>
					</div>
				</div>
			</section>

			<BusinessNeeds />
		</>
	);
};

export default PaymentLinks;
