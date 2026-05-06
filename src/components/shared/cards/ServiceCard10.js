import Link from "next/link";

const ServiceCard10 = ({ service, idx, lastItem }) => {
	const { title, shortDesc, iconName, id, totalProject, img, svg } = service || {};
	return (
		<div className="h10-service-item wow fadeInUp" data-wow-delay=".3s">
			<div className="service-content-wrap">
				<div className="service-title">
					<div className="service-icon">
						<i className={iconName ? iconName : "tji-optimization"}></i>
					</div>
					<h4 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h4>
				</div>
				<div className="service-content">
					<p className="desc">
						{shortDesc ||
							"A connected ERP module that streamlines daily operations and improves visibility across your business."}
					</p>
				</div>
				<div className="service-btn">
					<Link className="text-btn-2" href={`/services/${id}`}>
						<span className="icon">
							<i className="fa-solid fa-angle-right"></i>
						</span>
						<span className="text">Learn more</span>
						<span className="icon">
							<i className="fa-solid fa-angle-right"></i>
						</span>
					</Link>
				</div>
			</div>
			<div
				className="service-reveal-bg"
				style={{
					backgroundImage: `url('${
						img ? img : "/images/service/h1-service-1.webp"
					}')`,
				}}
			></div>
		</div>
	);
};

export default ServiceCard10;
