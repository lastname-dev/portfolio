import React from "react";

import "./styles/stack.css";
const Stacks = () => {
	return (
		<div className="about-left-side">
			<div className="tech-stack">
				<h2>Stack</h2>
				<div className="tech-stack-section">
					<h3 className="tech-stack-title">Backend</h3>
					<p className="tech-stack-content">
						<span>Java</span>
						<span>Spring Boot</span>
						<span>Spring JPA</span>
						<span>Spring Security</span>
					</p>
				</div>
				<div className="tech-stack-section">
					<h3 className="tech-stack-title">Frontend</h3>
					<p className="tech-stack-content">
						<span>HTML, CSS, JavaScript</span>
						<span>React</span>
					</p>
				</div>
				<div className="tech-stack-section">
					<h3 className="tech-stack-title">Database</h3>
					<p className="tech-stack-content">
						<span>MySQL</span>
						<span>Redis</span>
						<span>Elasticsearch</span>
					</p>
				</div>
				<div className="tech-stack-section">
					<h3 className="tech-stack-title">Devops</h3>
					<p className="tech-stack-content">
						<span>AWS</span>
						<span>Github Actions</span>
						<span>Docker</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Stacks;
