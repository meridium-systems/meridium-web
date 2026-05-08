import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureMarquee from "@/components/shared/marquee/FeatureMarquee";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Image from "next/image";

export const metadata = {
	title: "Modules | MERIDEUM ERP",
	description:
		"Core MERIDEUM ERP modules and process flows — purchasing, inventory, sales, accounts payable, accounts receivable and general ledger.",
};

const modules = [
	{
		icon: "tji-business",
		title: "Purchasing",
		desc: "Create supplier-driven procurement flows from purchase order through GRN, invoice and payment.",
	},
	{
		icon: "tji-strategic",
		title: "Inventory",
		desc: "Track stock setup, warehouse handling, bin locations, stock valuation and stock take processes.",
	},
	{
		icon: "tji-leadership",
		title: "Sales",
		desc: "Maintain customers, issue quotations, create sales orders, invoice and manage customer receipts.",
	},
	{
		icon: "tji-process",
		title: "Accounts Payable",
		desc: "Support supplier balances, invoice verification, foreign currency handling and payment processing.",
	},
	{
		icon: "tji-results",
		title: "Accounts Receivable",
		desc: "Manage customer balances, billing, collections and receivables visibility.",
	},
	{
		icon: "tji-square-cube",
		title: "General Ledger",
		desc: "Maintain the chart of accounts and support financial analysis with integrated transaction flow.",
	},
];

const moduleFeatures = [
	{
		eyebrow: "[ SOURCE TO PAY ]",
		title: "Vendor Management",
		icon: "tji-business",
		img: "/img-new/vendor-management.png",
		alt: "Vendor management and purchasing workflow",
		points: [
			"Purchase Order process with approval levels",
			"Goods receipt option against purchase orders",
			"Landed cost calculation options for accurate stock valuation",
			"Vendor invoice entry with 3-way matching facility",
			"Vendor payment processing including electronic supplier correspondence and reporting",
		],
	},
	{
		eyebrow: "[ INVENTORY MANAGEMENT ]",
		title: "Inventory Management",
		icon: "tji-square-cube",
		img: "/img-new/inventory-management.png",
		alt: "Inventory management and stock control",
		points: [
			"Maintain stock items with images, units, and minimum & maximum quantity levels",
			"Supports both inventory and non-inventory transactions",
			"Periodic stock take option for physical count reconciliation",
			"Stock adjustment and transfer options across locations",
			"Serial-number control, barcode scanning, and expiry tracking",
			"Inventory stored across unlimited warehouse locations",
			"Transactions automatically post to the relevant GL accounts",
		],
	},
	{
		eyebrow: "[ ORDER TO CASH ]",
		title: "Customer Management",
		icon: "tji-leadership",
		img: "/img-new/customer-management .png",
		alt: "Customer management and sales workflow",
		points: [
			"Maintain customers with credit limits and multiple delivery addresses",
			"Generate and manage quotations through the sales pipeline",
			"Create sales orders and send them electronically to customers",
			"Supply goods and generate customer invoices with built-in credit checks",
			"Send invoices electronically and manage customer receipts",
		],
	},
	{
		eyebrow: "[ FINANCIAL MANAGEMENT ]",
		title: "Financial Management",
		icon: "tji-strategic",
		img: "/img-new/financial-management.png",
		alt: "Financial management and general ledger",
		points: [
			"Collects and reconciles financial data to produce P&L statements and balance sheets",
			"Drill-down traceability from source transactions through to the GL",
			"Automates invoice processing, reduces AP/AR errors, and monitors branch profitability",
			"Account and GL batch inquiries with flexible reporting options",
		],
	},
];

const flows = [
	{ title: "Purchase Order", img: "/img-new/purchase-order.jpg" },
	{ title: "GRN Process", img: "/img-new/GRN Process.jpg" },
	{ title: "GRN Costing", img: "/img-new/GRN Costing.jpg" },
	{
		title: "Supplier Invoice / 3-Way Match",
		img: "/img-new/Supplier Invoice.jpg",
	},
	{ title: "Supplier Payment", img: "/img-new/vendor-payments.png" },
	{ title: "Sales Order Process", img: "/img-new/sales-order-process.jpg" },
	{ title: "Sales Invoice Process", img: "/img-new/sales-invoice-process.jpg" },
	{ title: "Customer Payment Entry", img: "/images/service/construction.jpg" },
	{ title: "Stock Take", img: "/img-new/stock-take.jpg" },
];

export default function Modules() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"Modules"} text={"Modules"} breadcrums={[]} />

				{/* Intro / Module stack */}
				<section style={{ paddingTop: "40px", paddingBottom: "0" }}>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12">
								<div
									className="sec-heading style-2 text-center"
									style={{
										maxWidth: "1100px",
										marginInlineStart: "auto",
										marginInlineEnd: "auto",
									}}
								>
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										[ MODULE STACK ]
									</span>
									<h2 className="sec-title text-anim">
										End-to-end business coverage
									</h2>
									<p
										className="wow fadeInUp"
										data-wow-delay="0.3s"
										style={{ marginTop: "20px" }}
									>
										Each module contributes to a shared operational
										model, improving process continuity from purchasing
										to stock, invoicing and finance.
									</p>
								</div>
							</div>
						</div>

						{/* Module cards */}
						<div className="row rg-30" style={{ marginTop: "40px" }}>
							{modules.map((mod, idx) => (
								<div className="col-xl-4 col-md-6" key={idx}>
									<div
										className="feature-item h10-feature-item wow fadeInUpBig"
										data-wow-delay={`0.${3 + (idx % 6)}s`}
										style={{ height: "100%" }}
									>
										<div className="feature-icon">
											<i
												className={mod.icon}
												style={{ fontSize: "44px" }}
											></i>
										</div>
										<div className="feature-content">
											<h5 className="title">{mod.title}</h5>
											<div className="desc">
												<p>{mod.desc}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Marquee for rhythm */}
				<div style={{ marginTop: "40px" }}>
					<FeatureMarquee />
				</div>

				{/* Module feature detail blocks — alternating */}
				<section className="section-space pb-0">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12">
								<div
									className="sec-heading style-2 text-center"
									style={{
										maxWidth: "1100px",
										marginInlineStart: "auto",
										marginInlineEnd: "auto",
									}}
								>
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										[ MAIN MODULES & FEATURES ]
									</span>
									<h2 className="sec-title text-anim">
										What each module delivers
									</h2>
									<p
										className="wow fadeInUp"
										data-wow-delay="0.3s"
										style={{ marginTop: "20px" }}
									>
										Detailed capabilities across the four core process
										areas — from vendor and inventory management through
										to customer operations and financial control.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{moduleFeatures.map((mod, idx) => {
					const imageRight = idx % 2 === 0;
					return (
						<section
							key={mod.title}
							className="h10-about-section section-space pt-0"
							style={{ paddingTop: "60px" }}
						>
							<div className="container">
								<div className="row align-items-xxl-center">
									<div
										className={`col-lg-6 ${
											imageRight ? "order-lg-1 order-2" : "order-lg-2 order-2"
										}`}
									>
										<div className="h10-about-content-wrap">
											<div className="sec-heading style-2">
												<span
													className="sub-title wow fadeInUp"
													data-wow-delay="0.2s"
													style={{ color: "var(--tj-color-common-heading)" }}
												>
													{mod.eyebrow}
												</span>
												<h2 className="sec-title text-anim" style={{ color: "var(--tj-color-theme-primary)" }}>
													{mod.title}
												</h2>
											</div>
											<div
												className="check-list-one wow fadeInUp"
												data-wow-delay="0.3s"
											>
												<ul>
													{mod.points.map((point, pidx) => (
														<li key={pidx}>
															<i className="tji-check"></i>
															<span>{point}</span>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
									<div
										className={`col-lg-6 ${
											imageRight ? "order-lg-2 order-1" : "order-lg-1 order-1"
										}`}
									>
										<div
											className="overview-img wow fadeInUp"
											data-wow-delay="0.3s"
											style={{ position: "relative", paddingTop: "10px" }}
										>
											<span
												className="feature-icon"
												style={{
													position: "absolute",
													top: "-22px",
													insetInlineStart: "-22px",
													width: "64px",
													height: "64px",
													display: "inline-flex",
													alignItems: "center",
													justifyContent: "center",
													borderRadius: "16px",
													background: "var(--tj-color-theme-primary)",
													color: "var(--tj-color-common-white)",
													boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
													zIndex: 2,
												}}
												aria-hidden="true"
											>
												<i
													className={mod.icon}
													style={{ fontSize: "28px" }}
												></i>
											</span>
											<Image
												src={mod.img}
												alt={mod.alt}
												width={720}
												height={520}
												style={{
													borderRadius: "18px",
													width: "100%",
													height: "auto",
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						</section>
					);
				})}

				{/* Example workflows */}
				<section className="section-space">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12">
								<div
									className="sec-heading style-2 text-center"
									style={{
										maxWidth: "1100px",
										marginInlineStart: "auto",
										marginInlineEnd: "auto",
									}}
								>
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										[ EXAMPLE WORKFLOWS ]
									</span>
									<h2 className="sec-title text-anim">
										Flow diagrams from the product reference set
									</h2>
									<p
										className="wow fadeInUp"
										data-wow-delay="0.3s"
										style={{ marginTop: "20px" }}
									>
										These visuals help communicate how MERIDEUM ERP
										supports process handoffs across departments and
										transactions.
									</p>
								</div>
							</div>
						</div>

						<div className="row rg-30" style={{ marginTop: "40px" }}>
							{flows.map((flow, idx) => (
								<div className="col-lg-4 col-md-6" key={idx}>
									<figure
										className="wow fadeInUp"
										data-wow-delay={`0.${2 + (idx % 6)}s`}
										style={{
											margin: 0,
											background: "var(--tj-color-common-white)",
											borderRadius: "18px",
											overflow: "hidden",
											boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
											border: "1px solid var(--tj-color-border-2, #eaeaea)",
											height: "100%",
											display: "flex",
											flexDirection: "column",
										}}
									>
										<div
											style={{
												position: "relative",
												width: "100%",
												aspectRatio: "16 / 10",
												overflow: "hidden",
												background: "#f5f5f5",
											}}
										>
											<Image
												src={flow.img}
												alt={`${flow.title} flow`}
												fill
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
												style={{ objectFit: "contain" }}
											/>
										</div>
										<figcaption
											style={{
												padding: "18px 22px",
												fontFamily: "var(--tj-ff-heading)",
												fontSize: "18px",
												letterSpacing: "-0.025em",
												textAlign: "center",
											}}
										>
											{flow.title}
										</figcaption>
									</figure>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Presentation angle CTA strip */}
				<section className="section-space pt-0">
					<div className="container">
						<div
							className="wow fadeInUp"
							data-wow-delay="0.2s"
							style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "30px",
								alignItems: "center",
								justifyContent: "space-between",
								padding: "40px",
								borderRadius: "20px",
								background:
									"linear-gradient(135deg, var(--tj-color-theme-primary) 0%, rgba(0,0,0,0.85) 100%)",
								color: "var(--tj-color-common-white)",
							}}
						>
							<div style={{ flex: "1 1 520px" }}>
								<span
									className="sub-title"
									style={{ color: "rgba(255,255,255,0.8)" }}
								>
									[ PRESENTATION ANGLE ]
								</span>
								<h3
									className="sec-title text-anim"
									style={{
										color: "var(--tj-color-common-white)",
										marginTop: "10px",
									}}
								>
									A stronger sales narrative for demos and proposals
								</h3>
								<p
									style={{
										marginTop: "12px",
										color: "rgba(255,255,255,0.85)",
									}}
								>
									This page can be expanded with industry-specific use
									cases, client logos, testimonials, pricing tiers and a
									live contact form.
								</p>
							</div>
							<div className="btn-area">
								<ButtonPrimary
									text={"Request a Demo"}
									url={"/contact"}
									className="white-btn"
								/>
							</div>
						</div>
					</div>
				</section>

				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
