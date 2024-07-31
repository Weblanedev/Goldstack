// import heroImg from '../assets/images/Hero-image.png';
// import scrollImg from '../assets/images/srcoll.svg';
import Hero from '../components/Hero';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import { useEffect, useState } from 'react';
import auImg from '../assets/australia.svg';
import treasury from '../assets/Treasury.svg';
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
const ViewTreasury = () => {
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
				minTitle='Robust Treasury Management Solutions'
				title='Optimize Your Financial Strategy'
				subTitle='Take control of your finances with our advanced treasury management services. From liquidity management to risk mitigation, our solutions are designed to optimize your financial strategy, ensuring your business remains agile and resilient in a dynamic market.'
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
							Our innovative technology enables seamless and secure
							transactions, providing individuals and businesses with a reliable
							way to buy and sell cryptocurrencies
						</p>
					</div>
				</div>
				<Tools
					toolsData={[
						{
							icon: liquidity,
							title: 'Enhanced Cash Flow Management',
							subTitle: 'Efficiently monitor and manage your cash flows, ensuring your business always has the liquidity needed to meet its obligations.'
						},
						{
							icon: custody,
							title: 'Cost Efficiency',
							subTitle:
								'Reduce operational costs through streamlined processes and automation, enhancing the overall efficiency of your financial operations'
						},
						{
							icon: transaction,
							title: 'Improved Regulatory Compliance',
							subTitle:
								'Stay compliant with ever-changing financial regulations and standards, minimizing the risk of legal issues and penalties.'
						},
						{
							icon: reporting,
							title: 'Streamlined Operations',
							subTitle:
								'Automate routine treasury tasks, such as reconciliation and payments, freeing up time for your team to focus on strategic initiatives.'
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
			<section
				className='
				py-[72px]
			lg:px-[61px]
			bg-black
			'
			>
				<div
					className='container
				mx-auto px-7'
				>
					<div
						className='grid lg:grid-cols-2 gap-[25px] lg:gap-[50px]
						items-center
						'
					>
						<div className='text-white lg:w-[510px] pt-[20px]'>
							<h2 className='font-[500] text-[36px] leading-[40px]'>
								Get Started
							</h2>
							<p className='pt-[14px] pb-[24px] font-[400] text-[18px] leading-[30px] text-[#F6F7F8] lg:w-[508px]'>
							Goldstack empowers companies from 115+ countries to accelerate their operations in frontier markets through better foreign exchange, 
							treasury services, payments, and last-mile settlement.
							</p>
							<p className='pb-[16px] font-[400] text-[16px] leading-[30px] text-[#F6F7F8]'>
								With our services you can;
							</p>
							<div className='px-7 pb-[24px]'>
								<ul className='list-disc'>
									<li className='font-[400] text-[16px] leading-[30px] '>
										Make payins and payouts
									</li>
									<li className='font-[400] text-[16px] leading-[30px] py-[16px]'>
										Create and manage wallets and virtual accounts
									</li>
									<li className='font-[400] text-[16px] leading-[30px]'>
										Access multi-currency accounts
									</li>
									<li className='font-[400] text-[16px] leading-[30px] py-[16px]'>
										Manage payments across all supported accounts
									</li>
								</ul>
							</div>
							<a
								to='#'
								// pb-[71px]
								className='
								 flex items-center text-[#84ADFF] text-[18px] gap-4 leading-[35px] underline font-[500]'
							>
								Explore
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M8 0L6.585 1.415L12.17 7H0V9H12.17L6.585 14.585L8 16L16 8L8 0Z'
										fill='#84ADFF'
									/>
								</svg>
							</a>
						</div>
						<div className='h-fit'>
							<img src={treasury} alt='build Goldstack' className='h-full' />
						</div>
					</div>
				</div>
			</section>
			<BusinessNeeds />
		</>
	);
};

export default ViewTreasury;
