import React from "react";
import { faBriefcase, faAward } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Prizes = () => {
	return (
		<div className="works">
			<Card
				icon={faAward}
				title="Prize"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./shinhan.png"
								alt="shinhan"
								className="work-image"
							/>
							<div className="work-title">신한 해커톤 우수상</div>
							<div className="work-subtitle">
								신한은행 해커톤 우수상 (3위 / 190팀)
							</div>
							<div className="work-duration">2023.09</div>
						</div>

						<div className="work">
							<img
								src="./ssafy.png"
								alt="ssafy"
								className="work-image"
							/>
							<div className="work-title">
								SSAFY 우수 프로젝트
							</div>
							<div className="work-subtitle">
								SSAFY 우수 프로젝트 선정 (2위 / 10팀)
							</div>
							<div className="work-duration">2023.08</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Prizes;
