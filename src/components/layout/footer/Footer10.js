import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";

const Footer10 = () => {
	return (
		<footer className="tj-footer-area footer-2 style-2  h10-footer">
			<div className="footer-top-area h10-footer-top fix">
				<div className="container">
					<div className="row line rg-50">
						<div className=" col-lg-4  col-md-6">
							<div
								className="footer-widget h10-footer-widget
             footer-newsletter-form h10-footer-newsletter-form"
							>
								<div className="footer-logo">
									<Link href="/" style={{ textDecoration: "none" }}>
										<span
											style={{
												fontFamily: "var(--tj-ff-heading)",
												fontWeight: 800,
												fontSize: "1.6rem",
												letterSpacing: "0.12em",
												color: "#ffffff",
												textTransform: "uppercase",
											}}
										>
											MERIDEUM
										</span>
									</Link>
								</div>
								<p className="desc">
									Get product updates, dashboard tips and ERP release notes
									straight to your inbox.
								</p>
								<div className="newsletter-form">
									<form>
										<div className="form-input">
											<input
												type="email"
												id="email"
												name="email"
												placeholder="Enter email"
												required=""
											/>
											<button className="tj-footer-input-btn">
												<i className="fa-solid fa-paper-plane"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className=" col-lg-8 col-md-6">
							<div className="h10-footer-widget-wrapper">
								<div className="row justify-content-between rg-30">
									<div className="col-12">
										<div className="h10-footer-cta">
											<h1 className="h10-footer-cta-title text-anim">
												<Link href="/contact">Ready to see a demo?</Link>
											</h1>
											<Link
												className="icon-btn h10-footer-cta-btn wow fadeInRight"
												data-wow-delay=".7s"
												href="/contact"
											>
												<i className="fa-solid fa-arrow-right"></i>
											</Link>
										</div>
									</div>
									<div className="col-xl-3 col-lg-6">
										<div className="footer-widget footer-contact-infos">
											<div className="infos-item">
												<span>Sydney, Australia</span>
												<p>Suite 9, 40 Brookhollow Ave, Norwest NSW 2153</p>
												<Link href="tel:+61298995868">+61 2 9899 5868</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6">
										<div className="footer-widget footer-contact-infos footer-contact-infos-2">
											<div className="infos-item">
												<Link href="mailto:hello@meridiumsystems.com">
													hello@meridiumsystems.com
												</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-6">
										<div className="footer-widget ">
											<div className="footer-social">
												<div className="footer-socia-inner">
													<h5 className="title">Follow Us:</h5>
													<ul>
														<li>
															<Link href="https://www.facebook.com/">
																<i className="fa-brands fa-facebook-f"></i>
															</Link>
														</li>
														<li>
															<Link href="https://www.instagram.com/">
																<i className="fa-brands fa-instagram"></i>
															</Link>
														</li>
														<li>
															<Link href="https://x.com/">
																<i className="fa-brands fa-twitter"></i>
															</Link>
														</li>
														<li>
															<Link href="https://www.linkedin.com/">
																<i className="fa-brands fa-linkedin-in"></i>
															</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										<i className="fa-solid fa-shield-check"></i> Cloud ERP for
										modern operations
									</p>
								</div>
								<div className="copyright-text">
									<p>
										© 2025 <Link href="/"> MERIDEUM Systems </Link> All rights
										reserved.
									</p>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="/contact">Policy & privacy</Link>
										</li>
										<li>
											<Link href="/contact">Terms & conditions</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- start: back to top --> */}
			<BackToTop type={4} className={"h7-back-to-top-wrapper"} />
			{/* <!-- end: back to top --> */}
		</footer>
	);
};

export default Footer10;
