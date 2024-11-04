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
const FX = () => {
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
            <div className="py-[14px] sm:py-[50px] lg:py-[100px] text-center text-white	bg-[#011b33]">
                <h1 className="text-[32px] lg:text-[64px] font-[700] lg:leading-[70px] w-[90%] mx-auto">
                    Seamless Foreign Exchange for Global Transactions
                </h1>
                <p className="pt-[16px] font-[400] pb-[25px] text-[18px] lg:text-[20px] leading-[35px] w-[80%] mx-auto">
                    Navigate the complexities of global finance with ease. Our FX services offer competitive exchange rates, quick transfers,
                    and extensive global reach, ensuring your international transactions are smooth and cost-effective.
                    Empower your business with reliable and efficient currency exchange solutions.
                </p>
            </div>
            {/* <Hero
                minTitle='Robust Treasury Management Solutions'
                title='Optimize Your Financial Strategy'
                subTitle='Take control of your finances with our advanced treasury management services. From liquidity management to risk mitigation, our solutions are designed to optimize your financial strategy, ensuring your business remains agile and resilient in a dynamic market.'
                buttonTxt='Learn More'
                heroImg={heroImg}
            /> */}

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
                                // { name: 'Third Party', img: third }
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
            {/* <BusinessNeeds /> */}
        </>
    );
};

export default FX;
