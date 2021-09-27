import React from "react";
import { Card, CardBody, Badge, Button } from "reactstrap";

import { Fade } from "react-reveal";

const EdutionCard = ({ education }) => {
	return (
		<Fade right duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">
								{education.schoolName}
							</h5>
							<h6>{education.subHeader}</h6>
							<Badge color="info" className="mr-1">
								{education.duration}
							</Badge>
							<div className="btn-wrapper my-4">
								<Button
									className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
									color="default"
									href={education.diplomLink}
									target="_blank"
								>
									<span className="btn-inner--icon mr-1">
										<i className="fa fa-file" />
									</span>
									<span className="btn-inner--text">
										See My Diploma
									</span>
								</Button>
							</div>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default EdutionCard;
