import Link from "next/link";

const Logo = () => {
	return (
		<div className="site-logo">
			<Link className="logo" href="/" style={{ textDecoration: "none" }}>
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
	);
};

export default Logo;
