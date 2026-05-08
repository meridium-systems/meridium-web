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
	title: "Product | MERIDEUM ERP",
	description:
		"Product overview of MERIDEUM ERP — stock items, creditors, debtors, and GL accounts built for connected, cloud-first operations.",
};

const capabilities = [
	{
		icon: "tji-square-cube",
		title: "Stock Items",
		summary: "Item codes, UOM flexibility, bin locations, and serial/batch controls.",
	},
	{
		icon: "tji-business",
		title: "Creditors",
		summary: "Supplier master with payment terms, currency, and AP integration readiness.",
	},
	{
		icon: "tji-leadership",
		title: "Debtors",
		summary: "Customer master with credit limits, delivery addresses, and AR integration readiness.",
	},
	{
		icon: "tji-strategic",
		title: "GL Accounts",
		summary: "Chart of accounts with four-level classification for financial reporting.",
	},
];

const glStructure = [
	{ label: "Account Group", value: "Assets · Liabilities · Income · Expense" },
	{ label: "Account Subgroup", value: "Current · Non-current · Operational" },
	{ label: "Account Type", value: "Cash · Banks · Asset cost · Reporting buckets" },
	{ label: "Account Subtype", value: "Detailed account segmentation" },
];

const CustomFieldsNote = () => (
	<div
		style={{
			marginTop: "20px",
			padding: "14px 18px",
			borderRadius: "10px",
			background: "var(--tj-color-common-bg-2, #f5f5f5)",
			border: "1px solid var(--tj-color-border-2, #eaeaea)",
		}}
	>
		<strong
			style={{
				fontSize: "12px",
				letterSpacing: "0.08em",
				textTransform: "uppercase",
				opacity: 0.55,
			}}
		>
			Common Feature
		</strong>
		<p style={{ marginTop: "6px", fontSize: "14px", lineHeight: "1.6" }}>
			Custom fields can be created to capture organization-specific information
			not covered by standard fields, providing flexibility across all master
			records.
		</p>
	</div>
);

export default function Product() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner
					title={"Product"}
					text={"Product"}
					breadcrums={[]}
				/>

				{/* Intro */}
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
										[ ONE CONNECTED PLATFORM ]
									</span>
									<h2 className="sec-title text-anim">
										Fully integrated cloud-based ERP system
									</h2>
									<p
										className="wow fadeInUp"
										data-wow-delay="0.3s"
										style={{ marginTop: "20px" }}
									>
										MERIDEUM ERP is a cloud-based enterprise solution designed to streamline operations, enhance productivity, and centralize data management. Accessible securely from anywhere in the world, it integrates all key business functions into one unified platform.
									</p>
									<p
										className="wow fadeInUp"
										data-wow-delay="0.4s"
										style={{ marginTop: "14px" }}
									>
										The system includes fully integrated modules covering Inventory Management, Purchasing, Sales, Accounts Payable (AP), Accounts Receivable (AR), and General Ledger (Finance), each equipped with powerful reporting, inquiry, and dashboard features to support data-driven decision-making. Advanced data security controls ensure that users can access only the information relevant to their roles, maintaining confidentiality and compliance.
									</p>
								</div>
							</div>
						</div>

						{/* At-a-glance cards */}
						<div className="row rg-30" style={{ marginTop: "40px" }}>
							{capabilities.map((cap, idx) => (
								<div className="col-xl-3 col-md-6" key={idx}>
									<div
										className="feature-item h10-feature-item wow fadeInUpBig"
										data-wow-delay={`0.${3 + idx}s`}
										style={{ height: "100%" }}
									>
										<div className="feature-icon">
											<i
												className={cap.icon}
												style={{ fontSize: "44px" }}
											></i>
										</div>
										<div className="feature-content">
											<h5 className="title">{cap.title}</h5>
											<div className="desc">
												<p>{cap.summary}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Marquee */}
				<div style={{ marginTop: "40px" }}>
					<FeatureMarquee />
				</div>

				{/* ── Block 1: Real-time Dashboards ── */}
				<section className="h10-about-section section-space">
					<div className="container">
						<div className="row align-items-xxl-center">
							<div className="col-lg-6 order-lg-2 order-2">
								<div className="h10-about-content-wrap">
									<div className="sec-heading style-2">
										<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
											[ LIVE INSIGHTS ]
										</span>
										<h2 className="sec-title text-anim">Real-time Dashboards</h2>
									</div>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										Meridium ERP provides powerful real-time dashboards that give decision-makers an instant view of business performance across all modules. From stock valuation and category breakdowns to creditor aging, purchase order counts, and supplier payment summaries — everything is visible at a glance without needing to run manual reports.
									</p>
									<div className="check-list-one wow fadeInUp" data-wow-delay="0.4s">
										<ul>
											<li>
												<i className="tji-check"></i>
												<span>Live stock value with major category breakdown and donut chart visualisation</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Creditor aging analysis across 0–30, 31–60, 61–90, and 90+ day periods</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>KPI tiles for PO count, supplier payments, and sales order count</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>12-month purchase order trend chart for forecasting and planning</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Creditor balance and overdue summaries with per-supplier drill-down</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Role-based dashboard access — each user sees only what is relevant to their role</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-6 order-lg-1 order-1">
								<div
									className="overview-img wow fadeInUp"
									data-wow-delay="0.3s"
									style={{ position: "relative" }}
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
										<i className="tji-performance" style={{ fontSize: "28px" }}></i>
									</span>
									<Image
										src="/img-new/dashboard-diagrams .png"
										alt="Meridium ERP real-time dashboard with stock, creditor and purchasing metrics"
										width={720}
										height={520}
										style={{ borderRadius: "18px", width: "100%", height: "auto" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ── Block 2: Stock Items ── */}
				<section className="h10-about-section section-space pt-0">
					<div className="container">
						<div className="row align-items-xxl-center">
							<div className="col-lg-6 order-lg-2 order-2">
								<div className="h10-about-content-wrap">
									<div className="sec-heading style-2">
										<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
											[ INVENTORY MASTER ]
										</span>
										<h2 className="sec-title text-anim">Stock Items</h2>
									</div>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										Create and maintain stock items within the ERP system. Each item must have a unique item code and a descriptive name and can be categorized under various stock categories and classifications for better organization and reporting. The system supports both single and multiple units of measure (UOM) with configurable decimal precision for quantities.
									</p>
									<div className="check-list-one wow fadeInUp" data-wow-delay="0.4s">
										<ul>
											<li>
												<i className="tji-check"></i>
												<span>Unique item codes with categories and classifications for reporting</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Single and multiple units of measure (UOM) with configurable decimal precision</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Serial number, batch number, expiry date, and barcode support per item</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Supplier price details maintained against each stock item</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Bin locations to identify where each item is stored in the warehouse</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Minimum and maximum quantity levels per location for effective inventory control</span>
											</li>
										</ul>
									</div>
									<CustomFieldsNote />
								</div>
							</div>
							<div className="col-lg-6 order-lg-1 order-1">
								<div
									className="overview-img wow fadeInUp"
									data-wow-delay="0.3s"
									style={{ position: "relative" }}
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
										<i className="tji-square-cube" style={{ fontSize: "28px" }}></i>
									</span>
									<Image
										src="/img-new/inventory-management.jpg"
										alt="Stock items master data screen"
										width={720}
										height={520}
										style={{ borderRadius: "18px", width: "100%", height: "auto" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ── Block 2: Creditors ── */}
				<section className="h10-about-section section-space pt-0">
					<div className="container">
						<div className="row align-items-xxl-center">
							<div className="col-lg-6 order-lg-1 order-2">
								<div className="h10-about-content-wrap">
									<div className="sec-heading style-2">
										<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
											[ SUPPLIER MASTER ]
										</span>
										<h2 className="sec-title text-anim">Creditors (Suppliers)</h2>
									</div>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										Creditors, also referred to as Suppliers, must be defined in the Creditor Master before creating a Purchase Order or recording any supplier-related transactions. The system supports foreign currency suppliers, enabling efficient management of cross-border transactions. Properly defined supplier records ensure accurate transaction processing and smooth integration with Accounts Payable and General Ledger.
									</p>
									<div className="check-list-one wow fadeInUp" data-wow-delay="0.4s">
										<ul>
											<li>
												<i className="tji-check"></i>
												<span>Supplier name, contact details, and contact person information</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Supplier category and subcategory classification</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Payment methods and credit period configuration</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Transaction currency with foreign currency supplier support</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Postal address (mandatory) for accurate transaction correspondence</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Integrates directly with Accounts Payable and General Ledger modules</span>
											</li>
										</ul>
									</div>
									<CustomFieldsNote />
									<div className="btn-area wow fadeInUp" data-wow-delay="0.6s" style={{ marginTop: "30px" }}>
										<ButtonPrimary text={"Explore the modules"} url={"/modules"} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 order-lg-2 order-1">
								<div
									className="overview-img wow fadeInUp"
									data-wow-delay="0.3s"
									style={{ position: "relative" }}
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
										<i className="tji-business" style={{ fontSize: "28px" }}></i>
									</span>
									<Image
										src="/img-new/purchasing-delivery.png"
										alt="Creditor supplier master record"
										width={720}
										height={520}
										style={{ borderRadius: "18px", width: "100%", height: "auto" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ── Block 3: Debtors ── */}
				<section className="h10-about-section section-space pt-0">
					<div className="container">
						<div className="row align-items-xxl-center">
							<div className="col-lg-6 order-lg-2 order-2">
								<div className="h10-about-content-wrap">
									<div className="sec-heading style-2">
										<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
											[ CUSTOMER MASTER ]
										</span>
										<h2 className="sec-title text-anim">Debtors (Customers)</h2>
									</div>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										Debtors, also referred to as Customers, must be defined in the Debtor Master before creating a Sales Order or recording any customer-related transactions. The system supports foreign currency customers and parent-child customer linking for group account management. Properly defined customer records ensure accurate transaction processing and smooth integration with Accounts Receivable and General Ledger.
									</p>
									<div className="check-list-one wow fadeInUp" data-wow-delay="0.4s">
										<ul>
											<li>
												<i className="tji-check"></i>
												<span>Customer code, name, contact details, and contact person information</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Customer category and subcategory classification</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Payment methods, credit periods, and credit limits</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Transaction currency with foreign currency customer support</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Postal address and multiple delivery addresses per customer</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Parent-child customer linking for group account management</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>Integrates directly with Accounts Receivable and General Ledger modules</span>
											</li>
										</ul>
									</div>
									<CustomFieldsNote />
								</div>
							</div>
							<div className="col-lg-6 order-lg-1 order-1">
								<div
									className="overview-img wow fadeInUp"
									data-wow-delay="0.3s"
									style={{ position: "relative" }}
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
										<i className="tji-leadership" style={{ fontSize: "28px" }}></i>
									</span>
									<Image
										src="/img-new/sales-pos.jpg"
										alt="Debtor customer master record"
										width={720}
										height={520}
										style={{ borderRadius: "18px", width: "100%", height: "auto" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ── Block 4: GL Accounts ── */}
				<section className="h10-about-section section-space pt-0">
					<div className="container">
						<div className="row align-items-xxl-center">
							<div className="col-lg-6 order-lg-1 order-2">
								<div className="h10-about-content-wrap">
									<div className="sec-heading style-2">
										<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
											[ FINANCE STRUCTURE ]
										</span>
										<h2 className="sec-title text-anim">GL Accounts</h2>
									</div>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										This function allows authorized users to create and maintain the Chart of Accounts (COA) used throughout the ERP system. Access is typically restricted to users with accounting or financial management authority, as it directly impacts the company's financial structure and reporting. The system supports both main accounts and sub-accounts, and each account is classified as either a Balance Sheet (BS) or Profit & Loss (P&L) account.
									</p>
									<div className="wow fadeInUp" data-wow-delay="0.4s" style={{ marginTop: "10px" }}>
										{glStructure.map((row, ridx) => (
											<div
												key={ridx}
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "flex-start",
													gap: "16px",
													padding: "14px 0",
													borderBottom: "1px solid var(--tj-color-border-2, #eaeaea)",
												}}
											>
												<strong
													style={{
														fontFamily: "var(--tj-ff-heading)",
														fontSize: "16px",
														letterSpacing: "-0.025em",
														minWidth: "160px",
													}}
												>
													{row.label}
												</strong>
												<span style={{ textAlign: "right", fontSize: "15px", opacity: 0.85 }}>
													{row.value}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="col-lg-6 order-lg-2 order-1">
								<div
									className="overview-img wow fadeInUp"
									data-wow-delay="0.3s"
									style={{ position: "relative" }}
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
										<i className="tji-strategic" style={{ fontSize: "28px" }}></i>
									</span>
									<Image
										src="/img-new/finance-accounting.png"
										alt="General ledger chart of accounts structure"
										width={720}
										height={520}
										style={{ borderRadius: "18px", width: "100%", height: "auto" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Why MERIDEUM ERP — feature row */}
				<section className="section-space pt-0">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12">
								<div
									className="sec-heading style-2 text-center"
									style={{
										maxWidth: "1300px",
										marginInlineStart: "auto",
										marginInlineEnd: "auto",
									}}
								>
									<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
										[ WHY MERIDEUM ERP ]
									</span>
									<h2 className="sec-title text-anim">
										Built to simplify daily operations and improve control
									</h2>
								</div>
							</div>
						</div>
						<div className="row rg-30" style={{ marginTop: "40px" }}>
							{[
								{
									icon: "tji-globe",
									title: "Cloud access",
									desc: "Securely access the platform from anywhere with one shared source of truth across your teams.",
								},
								{
									icon: "tji-results",
									title: "Operational visibility",
									desc: "Real-time inquiries across stock, sales, purchasing and finance for faster decisions.",
								},
								{
									icon: "tji-performance",
									title: "Real-time dashboards",
									desc: "Monitor transactions, balances and stock movement with live dashboards and KPIs.",
								},
								{
									icon: "tji-double-check",
									title: "Role-based security",
									desc: "Granular permissions keep sensitive information visible only to the right people.",
								},
							].map((f, i) => (
								<div className="col-xl-3 col-md-6" key={i}>
									<div
										className="feature-item h10-feature-item wow fadeInUpBig"
										data-wow-delay={`0.${3 + i}s`}
										style={{ height: "100%" }}
									>
										<div className="feature-icon">
											<i className={f.icon} style={{ fontSize: "40px" }}></i>
										</div>
										<div className="feature-content">
											<h5 className="title">{f.title}</h5>
											<div className="desc">
												<p>{f.desc}</p>
											</div>
										</div>
									</div>
								</div>
							))}
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
