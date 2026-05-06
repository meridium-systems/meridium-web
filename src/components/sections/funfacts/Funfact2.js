import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Funfact2 = () => {
	return (
		<section className="h10-counter-section">
			<div className="counter-wrapper">
				<div className="counter-item style-2">
					<div className="bottom-line d-md-none"></div>
					<div className="counter-item-inner">
						<FunfactSingle currentValue={6} isSup={"+"} />
						<span className="sub-title">Core business modules</span>
					</div>
				</div>
				<div className="counter-item style-2">
					<div className="bottom-line d-md-none"></div>
					<div className="counter-item-inner">
						<FunfactSingle currentValue={100} symbol={"%"} />
						<span className="sub-title">Cloud-based access</span>
					</div>
				</div>
				<div className="counter-item style-2">
					<div className="bottom-line d-md-none"></div>
					<div className="counter-item-inner">
						<FunfactSingle currentValue={9} isSup={""} />
						<span className="sub-title">Workflow process flows</span>
					</div>
				</div>
				<div className="counter-item style-2">
					<div className="bottom-line d-md-none"></div>
					<div className="counter-item-inner">
						<FunfactSingle currentValue={360} symbol={"°"} />
						<span className="sub-title">Operational visibility</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Funfact2;
