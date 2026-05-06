"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const FunfactSingle = ({ currentValue, symbol, isSup }) => {
	const [value, setValue] = useState(0);

	const [Odometer, setOdometer] = useState(null);
	// Intersection Observer
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.4, // Adjust as needed
	});
	useEffect(() => {
		import("react-odometerjs").then(mod => setOdometer(() => mod.default));
	}, []);

	// Trigger odometer when visible
	useEffect(() => {
		if (inView) {
			const timeoutId = setTimeout(() => {
				setValue(currentValue || 0);
			}, 250);
			return () => clearTimeout(timeoutId);
		}
	}, [inView, currentValue]);
	// <div className="odometer" value={value}></div>
	return (
		<div
			ref={ref}
			className="number"
			style={{ display: "inline-flex", alignItems: "baseline", flexWrap: "nowrap", whiteSpace: "nowrap", minWidth: "max-content" }}
		>
			{Odometer ? (
				<Odometer className="odometer" value={value} style={{ display: "inline-flex" }} />
			) : (
				<div className="odometer odometer-auto-theme" style={{ display: "inline-flex" }}>
					<div className="odometer-inside">
						<span className="odometer-digit">
							<span className="odometer-digit-spacer">0</span>
							<span className="odometer-digit-inner">
								<span className="odometer-ribbon">
									<span className="odometer-ribbon-inner">
										<span className="odometer-value">0</span>
									</span>
								</span>
							</span>
						</span>
					</div>
				</div>
			)}
			{isSup ? <sup style={{ fontSize: "0.5em", lineHeight: 1 }}>{isSup}</sup> : symbol ? <span style={{ fontSize: "0.6em", marginLeft: "4px", lineHeight: 1 }}>{symbol}</span> : ""}
		</div>
	);
};

export default FunfactSingle;
