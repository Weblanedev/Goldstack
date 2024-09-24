// import heroImg from '../assets/images/Hero-image.png';
// import scrollImg from '../assets/images/srcoll.svg';
import DescriptionComp from '../components/DescriptionComp';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import { Link } from 'react-router-dom';
import corporateImg from '../assets/multipayment.svg';
import heroImg from '../assets/hero-img.svg';
import layersImg from '../assets/layers.svg';
import cash from '../assets/icons/cash.svg';
import liquidity from '../assets/icons/liquidity.svg';
import OffRamp from '../assets/icons/off-ramp.svg';
import payout from '../assets/icons/payout.svg';
import settlement from '../assets/icons/settlements.svg';
import swaps from '../assets/icons/swaps.svg';
import treasury from '../assets/icons/treasury.svg';
import wallets from '../assets/icons/wallet.svg';

import currencyImg from '../assets/currencyImg.svg';
import psImg from '../assets/remittance.svg';
import rateImg from '../assets/rate.svg';
import settlementImg from '../assets/settlement.svg';
import vipImg from '../assets/vip.svg';
import worldImg from '../assets/world.svg';
import { Button } from '../components/CustomButtons';
import Tools from '../components/Tools';

export default function Home() {
	return (
    <>
      <section
        // ${subTitle2 ? 'lg:pt-[120px]' : 'lg:pt-[150px]'}
        // ${logo ? 'lg:pb-[68px]' : 'lg:pb-[150px]'}
        className={`
			bg-black
			text-white
-translate-y-[100px]
	`}
      >
        <div className="relative text-white">
          <video
            autoPlay
            muted
            playsInline
            loop
            id="myVideo"
            className="absolute top-0 left-0 w-full h-[100vh] object-cover z-0"
          >
            <source
              src="https://res.cloudinary.com/dqew5naa7/video/upload/v1722429636/4687197-uhd_3840_2160_24fps_ohq6sg.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-1 h-[100vh]"></div>

          <div className="relative z-10 flex flex-col justify-center items-center gap-10 pt-[100px] lg:pt-[200px]">
            {/* <h1 className="text-[28px] leading-[36px] text-center lg:text-[48px] lg:leading-[48px] font-normal">Stowcash</h1> */}
          </div>

          <div className="relative z-[3] container mx-auto lg:items-center px-7 lg:ps-7">
            <div className="flex flex-col justify-between gap-12 lg:gap-16 items-center">
              <div className="py-[14px] md:pb-[27px] md:pt-[0px] text-center">
                <h1 className="text-[32px] lg:text-[64px] font-[700] lg:leading-[70px] w-[90%] mx-auto">
                  Manage all your payments, FX, and treasury needs seamlessly.
                </h1>
                <p className="pt-[16px] font-[400] pb-[25px] text-[18px] lg:text-[20px] leading-[35px] w-[80%] mx-auto">
                  Goldstack is a single platform for all your payments, FX and
                  treasury. We power FX and treasury services for Global
                  Business.
                </p>

                <div className="flex justify-center space-y-2 lg:space-y-0 lg:space-x-2">
                  <Link to="/products/payment-links">
                    <Button type="primary" btnText="Get Started" icon={true} />
                  </Link>
                </div>
              </div>
              <div className={`order-first lg:order-last`}>
                {/* <img 
        src={"https://cdn.prod.website-files.com/62dc80e748e94840febe84c5/639b1e29634eb2c32d000316_dashboard-img.svg"}
        alt='hero-img'
        className='w-full'
        /> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className='border-2 rounded-3xl border-[#f2761b] left-[-50px] w-[100px] h-[100px] absolute'>

				</div>
				<div className='border-2 rounded-3xl border-[#f2761b] right-[10px] -bottom-[100px] w-[200px] h-[200px] absolute'></div>
				<div className='border-2 rounded-3xl border-[#f2761b] left-[300px] -bottom-[150px] w-[200px] h-[200px] absolute'></div> */}
      </section>

      <section
        className="
				pt-[100px]
				lg:px-[49px]
				"
      >
        <div
          // md:max-w-6xl
          className="container

					mx-auto
    px-7
    "
        >
          <div
            // grid-cols-1 lg:grid-cols-3
            // grid
            // grid-flow-row-dense
            // grid-cols-1 lg:grid-cols-3
            // grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3
            className="
						flex flex-col lg:flex-row
						justify-between
						items-center
						gap-12
						"
            // 						items-center
          >
            <div
              // pr-[130px]
              className="
						 flex
							flex-col
							lg:w-[710px]
							"
              // flex-wrap
              //  lg:w-[770px]
              // lg:mr-[80px]
              // lg:mr-[130px]
              //  py-[78px]
            >
              <h4 className="font-[400] leading-[32px] text-[14px] uppercase text-[#155EEF]">
                Corporate Treasury
              </h4>
              <h2 className="mt-[8px] mb-[24px] font-[600] text-[24px] leading-[36px] text-[#101828]">
                Seamlessly manage your enterprise’s cross-border cash flows,
                transfers, and liquidity needs with our advanced feature.
                {/* Effortlessly handle international transactions, optimize cash flow, and ensure liquidity and float management with precision.  */}
                {/* Our solution offers real-time insights, robust security, and streamlined processes to keep your financial operations efficient and secure across borders. */}
              </h2>

              <div>
                {list.map((item, index) => (
                  <div
                    className="flex gap-[9px] items-start pb-[19px]"
                    key={index}
                  >
                    <div>
                      <svg
                        width="20"
                        height="32"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 0C6.49237 0 0 6.49237 0 14.5C0 22.5076 6.49237 29 14.5 29C22.5076 29 29 22.5076 29 14.5C29 6.49237 22.5076 0 14.5 0ZM21.2171 10.4889L14.2716 21.1047C14.2698 21.1066 14.2662 21.1084 14.2662 21.1102C14.2299 21.1646 14.21 21.2262 14.1647 21.2769C14.1012 21.3458 14.0197 21.3821 13.9472 21.4346C13.9291 21.4473 13.9109 21.4618 13.891 21.4745C13.7786 21.5452 13.6626 21.5923 13.5358 21.6231C13.4941 21.634 13.456 21.6449 13.4125 21.6521C13.3115 21.666 13.2093 21.6672 13.108 21.6558C13.0365 21.6512 12.9655 21.6403 12.8959 21.6231C12.8242 21.6015 12.7544 21.5736 12.6875 21.5397C12.6295 21.5126 12.5679 21.5053 12.5135 21.4709C12.4736 21.4455 12.4519 21.4056 12.4174 21.3748C12.4029 21.3621 12.3848 21.3585 12.3703 21.3458L8.32663 17.6066C8.08694 17.3765 7.94711 17.0615 7.93719 16.7293C7.92727 16.3972 8.04805 16.0744 8.27358 15.8304C8.4991 15.5863 8.81137 15.4405 9.14327 15.4242C9.47516 15.408 9.80019 15.5226 10.0485 15.7434L12.9757 18.4513L19.0929 9.10056C19.277 8.81887 19.5655 8.62185 19.8948 8.55285C20.2242 8.48385 20.5675 8.54851 20.8492 8.73263C21.1309 8.91673 21.3279 9.20521 21.3969 9.53458C21.4659 9.86395 21.4012 10.2072 21.2171 10.4889Z"
                          fill="#2579FA"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-[500] text-[18px] leading-[32px] text-[#101828]">
                        {item?.title}
                      </h5>

                      <p className="font-[400] text-[16px] leading-[32px] text-[#344054]">
                        {item.subTitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="
							flex
							order-last
							lg:py-5
							w-full h-full
							"
              // bg-red-900
              // justify-end
              // lg:col-start-4
              // xl:col-start-4
              // lg:col-end-4
              // xl:col-end-4
              // ml-[130px]
              // ml-auto
            >
              <img
                src={
                  "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                className="
								w-full
								h-full
								rounded-md
								"
              />
              {/* lg:w-full
								lg:h-full */}
            </div>
          </div>
        </div>
      </section>
      <DescriptionComp
        title="Global access to local markets for international enterprises"
        subTitle="Our payment feature ensures a seamless and secure transaction process. With just a few clicks, you can easily complete your purchase or service payment. The system supports multiple payment methods, including credit/debit cards and digital wallets, to provide flexibility and convenience."
        link={true}
        linkText="Learn more about us"
      />
      <section
        // md:max-w-6xl
        className="container

			mx-auto px-7 pt-[32px] pb-[59px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-2">
          <div className="grid grid-cols-1 gap-[8.97px]">
            <div className="h-[118px]">
              <img
                src={settlementImg}
                alt="Settlement"
                className="w-full h-full"
                // h-[186px]
              />
            </div>
            <div className="text-center ">
              <h3 className="font-[500] text-[18px] leading-[35px] text-[#101828] pb-[3px]">
                Fast settlement time
              </h3>

              <p className="font-[400] leading-[24px] text-[#475467]">
                Rapid settlement within 48 hours
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-[8.97px] lg:h-[233px]">
            <div className="h-[118px]">
              <img
                src={rateImg}
                alt="Rates"
                className="w-full
							h-full

							"
                // h-[186px]
              />
            </div>
            <div className="text-center ">
              <h3 className="font-[500] text-[18px] leading-[35px] text-[#101828] pb-[3px]">
                Competitive Rates
              </h3>

              <p className="font-[400] leading-[24px] text-[#475467]">
                Transparent and volume-based pricing
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1  gap-[8.97px] lg:h-[233px]">
            <div className="h-[118px]">
              <img
                src={currencyImg}
                alt="Multi-currency support"
                className="w-full h-full"
                // h-[208px]
              />
            </div>
            <div className="text-center mt-[22px]">
              <h3 className="font-[500] text-[18px] leading-[35px] text-[#101828] pb-[3px]">
                Multi-currency support
              </h3>

              <p className="font-[400] leading-[24px] text-[#475467]">
                50+ currency pairs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-[8.97px] lg:h-[233px]">
            <div className="h-[118px]">
              <img
                src={layersImg}
                alt="support"
                className="w-full
							h-full
							"
              />
            </div>
            <div className="text-center">
              <h3
                className="font-[500] text-[18px] leading-[35px] text-[#101828]
							pb-[3px]
							"
              >
                VIP customer support
              </h3>

              <p className="font-[400] leading-[24px] text-[#475467]">
                Rapid settlement within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          // md:max-w-6xl
          className="container

					mx-auto
    px-7
    "
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2
					items-center
                    "
          >
            <div className="w-full">
              <img src={worldImg} />
            </div>
            <div className="xl:ml-[130px] lg:w-[442px] py-[78px]">
              <h4 className="font-[400] leading-[32px] text-[14px] uppercase text-[#00611B]">
                Foreign EXCHANGE
              </h4>
              <h2 className="mt-[8px] mb-[24px] font-[600] text-[24px] leading-[36px] text-[#101828]">
                Facilitate FX transactions across 300+ currency pairs for your
                businesses
              </h2>

              <div>
                {list2.map((item, index) => (
                  <div
                    className="flex gap-[9px] items-start pb-[19px]"
                    key={index}
                  >
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 0C6.49237 0 0 6.49237 0 14.5C0 22.5076 6.49237 29 14.5 29C22.5076 29 29 22.5076 29 14.5C29 6.49237 22.5076 0 14.5 0ZM21.2171 10.4889L14.2716 21.1047C14.2698 21.1066 14.2662 21.1084 14.2662 21.1102C14.2299 21.1646 14.21 21.2262 14.1647 21.2769C14.1012 21.3458 14.0197 21.3821 13.9472 21.4346C13.9291 21.4473 13.9109 21.4618 13.891 21.4745C13.7786 21.5452 13.6626 21.5923 13.5358 21.6231C13.4941 21.634 13.456 21.6449 13.4125 21.6521C13.3115 21.666 13.2093 21.6672 13.108 21.6558C13.0365 21.6512 12.9655 21.6403 12.8959 21.6231C12.8242 21.6015 12.7544 21.5736 12.6875 21.5397C12.6295 21.5126 12.5679 21.5053 12.5135 21.4709C12.4736 21.4455 12.4519 21.4056 12.4174 21.3748C12.4029 21.3621 12.3848 21.3585 12.3703 21.3458L8.32663 17.6066C8.08694 17.3765 7.94711 17.0615 7.93719 16.7293C7.92727 16.3972 8.04805 16.0744 8.27358 15.8304C8.4991 15.5863 8.81137 15.4405 9.14327 15.4242C9.47516 15.408 9.80019 15.5226 10.0485 15.7434L12.9757 18.4513L19.0929 9.10056C19.277 8.81887 19.5655 8.62185 19.8948 8.55285C20.2242 8.48385 20.5675 8.54851 20.8492 8.73263C21.1309 8.91673 21.3279 9.20521 21.3969 9.53458C21.4659 9.86395 21.4012 10.2072 21.2171 10.4889Z"
                        fill="#38AD3C"
                      />
                    </svg>
                    <div>
                      <h5 className="font-[500] text-[18px] leading-[32px] text-[#101828]">
                        {item?.title}
                      </h5>

                      <p className="font-[400] text-[16px] leading-[32px] text-[#344054]">
                        {item.subTitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="
				py-[60px]
				lg:px-[49px]
			"
      >
        <div
          // md:max-w-6xl
          className="container mx-auto

					px-7
    "
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2
						items-center
						"
          >
            <div
              className="
						 lg:w-[442px]
						 "
              //  lg:ps-[56px]
              //  py-[78px]
            >
              <h4 className="font-[400] leading-[32px] text-[14px] uppercase text-[#4C00EE]">
                Remittance
              </h4>
              <h2 className="mt-[8px] mb-[24px] font-[600] text-[24px] leading-[36px] text-[#101828]">
                Our remittance services guarantee quick, reliable, and secure
                money transfers, so you can send funds effortlessly.
              </h2>

              <div>
                {list3.map((item, index) => (
                  <div
                    className="flex gap-[9px] items-start pb-[19px]"
                    key={index}
                  >
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 0C6.49237 0 0 6.49237 0 14.5C0 22.5076 6.49237 29 14.5 29C22.5076 29 29 22.5076 29 14.5C29 6.49237 22.5076 0 14.5 0ZM21.2171 10.4889L14.2716 21.1047C14.2698 21.1066 14.2662 21.1084 14.2662 21.1102C14.2299 21.1646 14.21 21.2262 14.1647 21.2769C14.1012 21.3458 14.0197 21.3821 13.9472 21.4346C13.9291 21.4473 13.9109 21.4618 13.891 21.4745C13.7786 21.5452 13.6626 21.5923 13.5358 21.6231C13.4941 21.634 13.456 21.6449 13.4125 21.6521C13.3115 21.666 13.2093 21.6672 13.108 21.6558C13.0365 21.6512 12.9655 21.6403 12.8959 21.6231C12.8242 21.6015 12.7544 21.5736 12.6875 21.5397C12.6295 21.5126 12.5679 21.5053 12.5135 21.4709C12.4736 21.4455 12.4519 21.4056 12.4174 21.3748C12.4029 21.3621 12.3848 21.3585 12.3703 21.3458L8.32663 17.6066C8.08694 17.3765 7.94711 17.0615 7.93719 16.7293C7.92727 16.3972 8.04805 16.0744 8.27358 15.8304C8.4991 15.5863 8.81137 15.4405 9.14327 15.4242C9.47516 15.408 9.80019 15.5226 10.0485 15.7434L12.9757 18.4513L19.0929 9.10056C19.277 8.81887 19.5655 8.62185 19.8948 8.55285C20.2242 8.48385 20.5675 8.54851 20.8492 8.73263C21.1309 8.91673 21.3279 9.20521 21.3969 9.53458C21.4659 9.86395 21.4012 10.2072 21.2171 10.4889Z"
                        fill="#5500C5"
                      />
                    </svg>
                    <div>
                      <h5 className="font-[500] text-[18px] leading-[32px] text-[#101828]">
                        {item?.title}
                      </h5>

                      <p className="font-[400] text-[16px] leading-[32px] text-[#344054]">
                        {item.subTitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="order-first lg:order-last
						"
              // lg:py-5
            >
              <img src={psImg} />
            </div>
          </div>
        </div>
      </section>
      {/* 
			<section
				className='
				py-[60px]
			lg:px-[49px]
			'
			>
				<div
					// md:max-w-6xl
					className='container

				px-6
					mx-auto'
				>
					<div
						// flex-col
						// lg:flex-row
						// flex
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0
						'
					// justify-between items-center
					// lg:justify-end
					// gap-12px-8
					>
						<div className='grid grid-cols-1 gap-[16px] lg:pr-16 lg:border-r-[0.5px] lg:border-[#B3B3B3] '>
							<h4 className='font-[400] text-[56px] leading-[68px] text-center text-[#1D2939]'>
								200M+
							</h4>
							<p
								className='font-[500px] text-[18px] leading-[24px]
									text-center text-[#475467]
									'
							>
								Transactions processed
							</p>
						</div>
						<div className='grid grid-cols-1 gap-[16px] lg:px-16 lg:border-r-[0.5px] lg:backdrop:order-[#B3B3B3] '>
							<h4 className='font-[400] text-[56px] leading-[68px] text-center text-[#1D2939]'>
								4K+
							</h4>
							<p
								className='font-[500px] text-[18px] leading-[24px]
									text-center text-[#475467]
									'
							>
								Awesome Customers
							</p>
						</div>

						<div className='grid grid-cols-1 gap-[16px] lg:px-16 lg:border-r-[0.5px] lg:border-[#B3B3B3]  '>
							<h4 className='font-[400] text-[56px] leading-[68px] text-center text-[#1D2939]'>
								100+
							</h4>
							<p
								className='font-[500px] text-[18px] leading-[24px]
									text-center text-[#475467]
									'
							>
								Global Markets
							</p>
						</div>

						<div className='grid grid-cols-1 gap-[16px]'>
							<h4 className='font-[400] text-[56px] leading-[68px] text-center text-[#1D2939]'>
								130K
							</h4>
							<p
								className='font-[500px] text-[18px] leading-[24px]
									text-center text-[#475467]
									'
							>
								Daily API Calls
							</p>
						</div>
					</div>
				</div>
			</section> */}
      {/* <section
				className='
				py-[71px]
			lg:px-[61px]
			bg-[#F9FAFB]
			'
			>
				<div
					// md:max-w-6xl
					className='container

					mx-auto
			px-7 pb-[28px] lg:pb-[48px]
			'
				>
					<div className='lg:w-[665px]'>
						<h2 className='font-[600] text-[30px] lg:text-[40px] lg:leading-[50px]'>
							All the tools you need to build on crypto
						</h2>

						<p className='font-[400px] text-[20px] text-[#101828] leading-[36px] py-[16px] `pb-[24px]'>
							Build and launch global financial services quickly and seamlessly
							with our all in one product suite of treasury, payments, and
							last-mile settlement services
						</p>
					</div>
				</div>
				<Tools
					toolsData={[
						{
							icon: OffRamp,
							title: 'Crypto on/off ramp',
							subTitle: 'Buy and sell crypto via our dashboard or via API'
						},
						{
							icon: swaps,
							title: 'Crypto swaps',
							subTitle: 'Perform crypto-to-crypto swaps easily and on demand'
						},
						{
							icon: payout,
							title: 'Payouts',
							subTitle:
								'Make both single and bulk fiat payouts to 20+ countries easily'
						},
						{
							icon: settlement,
							title: 'Settlements',
							subTitle: 'Settle your global partners in their local currency'
						},
						{
							icon: treasury,
							title: 'Treasury',
							subTitle: 'Manage all your assets all from one place'
						},
						{
							icon: liquidity,
							title: 'Liquidity',
							subTitle: 'Perform crypto-to-crypto swaps easily and on demand'
						},
						{
							icon: wallets,
							title: 'Digital Wallets',
							subTitle:
								'Issue account numbers, track balances, and initiate and receive payments'
						},
						{
							icon: cash,
							title: 'Cash Management',
							subTitle:
								'Settle your global partners in their local currency. Manage your assets and segregate accounts across multiple bank accounts.'
						}
					]}
				/>
			</section> */}
    </>
  );
}

const list = [
	{
		title: 'Multi-Currency Support',
		subTitle: 'Effortlessly handle international transactions and optimize cash flow.'
	},
	{
		title: 'Automated Payment Processing',
		subTitle: 'Streamline international payments with automated processing to reduce manual effort.'
	},
	{
		title: 'Real-Time Transaction Monitoring',
		subTitle: 'Our solution offers real-time insights, robust security, and streamlined processes to keep your financial operations efficient.'
	}
];
const list2 = [
	{
		title: 'Fast Settlements',
		subTitle: 'We provide instant settlement in multiple currencies.'
	},
	{
		title: 'Cheap Rates',
		subTitle: 'Our transaction fees are transparent and unbeatable.'
	},
	{
		title: 'Fully compliant',
		subTitle: 'One compliance process, for multiple jurisdictions.'
	}
];
const list3 = [
	{
		title: 'One API, Global Access',
		subTitle:
			'Take advantage of our APIs to build financial services for the global market.'
	},
	{
		title: 'Collect Funds Instantly',
		subTitle: 'Collect deposits from multiple countries easily and seamlessly.'
	},
	{
		title: 'Automated Business Payouts',
		subTitle:
			'Take the stress and vulnerability of manual payouts off your business.'
	}
];
