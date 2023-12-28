import React from "react";
import "./styles/contentList.css"; // CSS 파일을 불러옵니다.
const ContentsList = ({ contents }) => {
	return (
		<div className="contents-container">
			{contents.map((content, index) => (
				<div key={index} className="content-section">
					<h3 className="content-title">{content.title}</h3>
					{content.image && (
						<img
							src={content.image}
							alt={content.title}
							className="content-image"
						/>
					)}
					<p className="content-description">{content.description}</p>

					<ul className="content-description-list">
						{content.description2.map((item, itemIndex) => (
							<li key={itemIndex}>{item}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default ContentsList;
