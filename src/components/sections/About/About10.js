import Accordion from "@/components/shared/accordion/Accordion";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About10 = () => {
	return (
		<section className="h10-about-section section-space">
			<div className="container">
				<div className="row align-items-xxl-center">
					<div className="col-lg-6 order-lg-1 order-2">
						<div className="overview-img wow fadeInUp" data-wow-delay="0.3s">
							<img src="/images/about/h10-about.jpeg" alt="" />
						</div>
					</div>
					<div className="col-lg-6 order-lg-2 order-1">
						<div className="h10-about-content-wrap">
							<div className="sec-heading style-2 ">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
									[ ONE CONNECTED PLATFORM ]
								</span>
								<h2 className="sec-title text-anim">
									One platform across inventory, purchasing, sales and finance
								</h2>
							</div>
							<Accordion>
								<div
									className="h6-insight_accordion h10-about-accordion wow fadeInUp"
									data-wow-delay="0.3s"
									id="about10Accordion"
								>
									<div className="accordion_item">
										<button
											className="accordion_title"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseOne"
											aria-expanded="true"
										>
											<span className="subtitle">01.</span>
											<span className="title">
												Inventory & purchasing
											</span>
										</button>
										<div
											id="collapseOne"
											className="accordion_desc collapse show"
											data-bs-parent="#about10Accordion"
										>
											<div className="accordion-body">
												Track stock setup, warehouse handling, bin locations,
												stock valuation and stock take. Drive procurement from
												purchase order through GRN, invoice and payment with
												full supplier visibility.
											</div>
										</div>
									</div>

									<div className="accordion_item">
										<button
											className="accordion_title collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseTwo"
											aria-expanded="false"
										>
											<span className="subtitle">02.</span>
											<span className="title">
												Sales & receivables
											</span>
										</button>
										<div
											id="collapseTwo"
											className="accordion_desc collapse"
											data-bs-parent="#about10Accordion"
										>
											<div className="accordion-body">
												Maintain customers, issue quotations, create sales
												orders and invoices. Manage customer balances, billing,
												collections and receivables visibility from one
												connected workflow.
											</div>
										</div>
									</div>

									<div className="accordion_item">
										<button
											className="accordion_title collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseThree"
											aria-expanded="false"
										>
											<span className="subtitle">03.</span>
											<span className="title">
												General ledger & finance
											</span>
										</button>
										<div
											id="collapseThree"
											className="accordion_desc collapse"
											data-bs-parent="#about10Accordion"
										>
											<div className="accordion-body">
												Maintain the chart of accounts with main and sub
												accounts, balance sheet and P&L treatment, and granular
												group, type and subtype structures for stronger
												financial reporting and analysis.
											</div>
										</div>
									</div>
								</div>
							</Accordion>

							<div className="btn-area wow fadeInUp" data-wow-delay="0.5s">
								<ButtonPrimary text={"Explore the product"} url={"/services"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About10;
