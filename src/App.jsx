import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import Company from './pages/Company';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';

import AllAPIs from './pages/AllAPIs';
import BuyCrypto from './pages/BuyCrypto';
import CryptoSwaps from './pages/CryptoSwaps';
import Liquidity from './pages/Liquidity';
import Payouts from './pages/Payouts';
import Settlements from './pages/Settlements';
import ScrollToTop from './utils/ScrollToTop';
import PaymentLinks from './pages/PaymentLinks';
import ViewTreasury from './pages/ViewTreasury';
import TerrmsandServices from './pages/TerrmsandServices';
import FX from './pages/FX';
import Remittance from './pages/Remittance';

function App() {
	return (
		<Router>
			<>
				<Layout>
					<ScrollToTop>
						<Routes path='/'>
							<Route index element={<Home />} />
							<Route path='company' element={<Company />} />
							<Route path='products'>
								{/* <Route path='all-apis' element={<AllAPIs />} /> */}
								{/* <Route path='buy-crypto' element={<BuyCrypto />} /> */}
								<Route path='foreign-exchnage' element={<FX />} />
								{/* <Route path='payouts' element={<Payouts />} /> */}
								{/* <Route path='crypto-swaps' element={<CryptoSwaps />} /> */}
								<Route path='remittance' element={<Remittance />} />
								<Route path='payment-links' element={<PaymentLinks />} />
								<Route path='view-treasury' element={<ViewTreasury />} />
							</Route>

							<Route path='contact' element={<ContactUs />} />
							<Route path='terms-of-services' element={<TerrmsandServices />} />

							<Route path='*' element={<Home />} />
						</Routes>
					</ScrollToTop>
				</Layout>
			</>
			{/* </NavbarProvider> */}
		</Router>
	);
}

export default App;
