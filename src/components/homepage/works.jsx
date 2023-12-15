import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ssafy.png"
								alt="ssafy"
								className="work-image"
							/>
							<div className="work-title">
								삼성 청년 SW 아카데미
							</div>
							<div className="work-subtitle">
								삼성 청년 SW 아카데미 (SSAFY) 9기
							</div>
							<div className="work-duration">
								2023.01 - 2023.12
							</div>
						</div>

						<div className="work">
							<img
								src="./hongik.png"
								alt="hongik"
								className="work-image"
							/>
							<div className="work-title">홍익대학교</div>
							<div className="work-subtitle">
								홍익대학교 컴퓨터공학과 학사
							</div>
							<div className="work-duration">
								2016.03 - 2023.02
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
