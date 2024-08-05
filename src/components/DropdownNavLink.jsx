import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlinePayments } from "react-icons/md"
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiTrade } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri"
import { FaArrowRight } from "react-icons/fa";

const DropdownNavLink = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='relative inline-block text-center'>
			<NavLink
				// type='button'
				// inline-flex
				className='hidden sm:block justify-center w-full
					menu-hover

					'
				// text-sm text-gray-700 hover:bg-gray-50
				// px-4 py-2
				// onClick={() => setIsOpen(!isOpen)}
				onMouseOver={() => setIsOpen(true)}
			// onMouseLeave={() => setIsOpen(false)}
			>
				Products
			</NavLink>

			{isOpen && (
				<div
					className='absolute z-50 mt-6
					rounded-md shadow-lg
					p-3
					bg-white
					w-fit
					text-left
					-translate-x-[400px]'
					// px-[20px]
					// bg-red-600
					onMouseLeave={() => setIsOpen(false)}
				>
					<div className='flex gap-[30px]'>
						<div
							className='py-1 w-[175px]'
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='options-menu'
						>
							<p
								// to='products/all-apis'
								className='flex gap-[12px] items-center px-4 py-2 font-bold text-sm text-gray-700 hover:scale-[1.05]'
								role='menuitem'
							// onClick={() => setIsOpen(false)}
							>
								<MdOutlinePayments size={20} /> Payment
							</p>
							<p className='px-4 text-gray-400 text-xs'>
								Choose the best solution for your business.
								Accept payments online and scale your business.</p>
							<NavLink
								to='products/payment-links'
								className='flex gap-[4px] items-center px-4 pt-4 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								Payment Links <FaArrowRight />
							</NavLink>
							{/* <NavLink
								to='products/checkouts'
								className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								Checkouts <FaArrowRight />
							</NavLink> */}
							{/* <NavLink
								to='products/payouts'
								className='block px-4 pt-2 text-sm text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								Payouts
							</NavLink> */}
						</div>
						<div
							className='py-1 w-[175px]'
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='options-menu'
						>
							<p
								className='flex gap-[12px] font-bold items-center px-4 py-2 text-sm text-gray-700 hover:scale-[1.05]'
								role='menuitem'
							// onClick={() => setIsOpen(false)}
							>
								<FaMoneyBillTrendUp size={18} />Treasury
							</p>
							<p className='px-4 text-gray-400 text-xs'>
								Optimize your cash flow management with our comprehensive treasury solutions.
							</p>
							<NavLink
								to='products/view-treasury'
								className='flex gap-[4px] items-center px-4 pt-4 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								View Treasury <FaArrowRight />
							</NavLink>
							{/* <NavLink
								to='products/settlements'
								className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								Settlements <FaArrowRight />
							</NavLink> */}
							{/* <NavLink
								to='products/payouts'
								className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								Payouts <FaArrowRight />
							</NavLink> */}

						</div>
						<div
							className='py-1 w-[175px]'
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='options-menu'
						>
							<p
								// to='products/all-apis'
								className='font-bold flex gap-[16px] items-center px-4 py-2 text-sm text-gray-700 hover:scale-[1.05]'
								role='menuitem'
							// onClick={() => setIsOpen(false)}
							>
								<GiTrade size={20} /> FX
							</p>
							<p className='px-4 text-gray-400 text-xs'>
								Convert currencies seamlessly and quicker. Get the best rates for your transactions.</p>
							{/* <NavLink
								to='products/buy-crypto'
								className='flex gap-[4px] items-center px-4 pt-4 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								Buy Crypto <FaArrowRight />
							</NavLink> */}
							<NavLink
								to='products/foreign-exchnage'
								className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								Get Started <FaArrowRight />
							</NavLink>
							{/* <NavLink
								to='products/payouts'
								className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								Payouts <FaArrowRight />
							</NavLink> */}

						</div>
						<div
							className='py-1 w-[175px]'
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='options-menu'
						>
							<p
								// to='products/all-apis'
								className='flex font-bold gap-[16px] items-center px-4 py-2 text-sm text-gray-700 hover:scale-[1.05]'
								role='menuitem'
							// onClick={() => setIsOpen(false)}
							>
								<RiSecurePaymentLine size={20} /> Remittance
							</p>
							<p className='px-4 text-gray-400 text-xs'>
								Quick and safe remittance services. Send funds worldwide effortlessly.</p>
							<NavLink
								to='products/remittance'
								className='flex gap-[4px] items-center px-4 pt-4 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								View Remittance <FaArrowRight />
							</NavLink>
							{/* <NavLink
								to='products/settlements'
								className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								Settlements <FaArrowRight />
							</NavLink> */}
							{/* <NavLink
								to='products/payouts'
								className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								Payouts <FaArrowRight />
							</NavLink> */}

						</div>
					</div>
				</div>
			)}
		</div>
	);
};
const DropdownNavLinkMobile = ({ close }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='relative inline-block text-left'>
			<NavLink
				// type='button'
				// inline-flex
				// rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm text-gray-700 hover:bg-gray-50
				className='block sm:hidden justify-center w-full
					'
				onClick={() => setIsOpen(!isOpen)}
			>
				Products
			</NavLink>
			{isOpen && (
				<div
					className='absolute left-[50%] -translate-x-[50%] z-50 mt-6
								rounded-md shadow-lg
								p-3
								bg-white
								w-[360px]
								text-left'
					// px-[20px]
					// bg-red-600
					onMouseLeave={() => setIsOpen(false)}
				>
					<div className='grid grid-cols-2 gap-[30px]'>
						<div
							className='py-1 w-[175px]'
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='options-menu'
						>
							<p
								// to='products/all-apis'
								className='flex gap-[12px] items-center px-4 py-2 font-bold text-sm text-gray-700 hover:scale-[1.05]'
								role='menuitem'
							// onClick={() => setIsOpen(false)}
							>
								<MdOutlinePayments size={20} /> Payment
							</p>
							<p className='px-4 text-gray-400 text-xs'>
								Choose the best solution for your business.
								Accept payments online and scale your business.</p>
							<NavLink
								to='products/payment-links'
								className='flex gap-[4px] items-center px-4 pt-4 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								Payment Links <FaArrowRight />
							</NavLink>
							{/* <NavLink
											to='products/checkouts'
											className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
											role='menuitem'
											onClick={() => setIsOpen(false)}
										>
											Checkouts <FaArrowRight />
										</NavLink> */}
							{/* <NavLink
											to='products/payouts'
											className='block px-4 pt-2 text-sm text-gray-700 hover:scale-[1.05]'
											role='menuitem'
											onClick={() => setIsOpen(false)}
										>
											Payouts
										</NavLink> */}
						</div>
						<div
							className='py-1 w-[175px]'
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='options-menu'
						>
							<p
								className='flex gap-[12px] font-bold items-center px-4 py-2 text-sm text-gray-700 hover:scale-[1.05]'
								role='menuitem'
							// onClick={() => setIsOpen(false)}
							>
								<FaMoneyBillTrendUp size={18} />Treasury
							</p>
							<p className='px-4 text-gray-400 text-xs'>
								Optimize your cash flow management with our comprehensive treasury solutions.
							</p>
							<NavLink
								to='products/view-treasury'
								className='flex gap-[4px] items-center px-4 pt-4 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								View Treasury <FaArrowRight />
							</NavLink>
							{/* <NavLink
											to='products/settlements'
											className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
											role='menuitem'
											onClick={() => setIsOpen(false)}
										>
											Settlements <FaArrowRight />
										</NavLink> */}
							{/* <NavLink
											to='products/payouts'
											className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
											role='menuitem'
											onClick={() => setIsOpen(false)}
										>
											Payouts <FaArrowRight />
										</NavLink> */}

						</div>
						<div
							className='py-1 w-[175px]'
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='options-menu'
						>
							<p
								// to='products/all-apis'
								className='font-bold flex gap-[16px] items-center px-4 py-2 text-sm text-gray-700 hover:scale-[1.05]'
								role='menuitem'
							// onClick={() => setIsOpen(false)}
							>
								<GiTrade size={20} /> FX
							</p>
							<p className='px-4 text-gray-400 text-xs'>
								Convert currencies seamlessly and quicker. Get the best rates for your transactions.</p>
							{/* <NavLink
											to='products/remittance'
											className='flex gap-[4px] items-center px-4 pt-4 text-xs text-gray-700 hover:scale-[1.05]'
											role='menuitem'
											onClick={() => setIsOpen(false)}
										>
											Buy Crypto <FaArrowRight />
										</NavLink> */}
							<NavLink
								to='products/foreign-exchnage'
								className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								Get Started <FaArrowRight />
							</NavLink>
							{/* <NavLink
											to='products/payouts'
											className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
											role='menuitem'
											onClick={() => setIsOpen(false)}
										>
											Payouts <FaArrowRight />
										</NavLink> */}

						</div>
						<div
							className='py-1 w-[175px]'
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='options-menu'
						>
							<p
								// to='products/all-apis'
								className='flex font-bold gap-[16px] items-center px-4 py-2 text-sm text-gray-700 hover:scale-[1.05]'
								role='menuitem'
							// onClick={() => setIsOpen(false)}
							>
								<RiSecurePaymentLine size={20} /> Remittance
							</p>
							<p className='px-4 text-gray-400 text-xs'>
								Quick and safe remittance services. Send funds worldwide effortlessly.</p>
							<NavLink
								to='products/remittance'
								className='flex gap-[4px] items-center px-4 pt-4 text-xs text-gray-700 hover:scale-[1.05]'
								role='menuitem'
								onClick={() => setIsOpen(false)}
							>
								View Remittance <FaArrowRight />
							</NavLink>
							{/* <NavLink
											to='products/settlements'
											className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
											role='menuitem'
											onClick={() => setIsOpen(false)}
										>
											Settlements <FaArrowRight />
										</NavLink> */}
							{/* <NavLink
											to='products/payouts'
											className='flex gap-[4px] items-center px-4 pt-2 text-xs text-gray-700 hover:scale-[1.05]'
											role='menuitem'
											onClick={() => setIsOpen(false)}
										>
											Payouts <FaArrowRight />
										</NavLink> */}

						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export { DropdownNavLink, DropdownNavLinkMobile };
