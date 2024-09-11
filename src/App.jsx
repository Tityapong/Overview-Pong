import { BrowserRouter } from "react-router-dom";

import {
	About,
	BallCanvas,
	ComputersCanvas,
	Contact,
	EarthCanvas,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	StarsCanvas,
	Tech,
	Works,
} from "./components";

function App() {
	return (
		<BrowserRouter>
			<div className="relative z-o bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>

				<div className="relative z-0">
					<About

					/>
					<StarsCanvas />
				</div>
				<Experience />
				
				<div className="relative z-0">
				<Tech />
					<StarsCanvas />
				</div>
				<Works />
				{/* <Feedbacks /> */}
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
