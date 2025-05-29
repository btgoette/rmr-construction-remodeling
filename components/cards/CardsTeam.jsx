/* Team Component */

//  React Components
import { Row, Col, Image} from "react-bootstrap";
export default function Team({team}) {

    return (
        <Row className={team.justify + " team"}>
            {team.roster.map(({ img, name, title, text }, i) => (
                <Col md={6} lg={team.col} key={i} className="px-md-5">
                    <div
                        itemScope
                        itemType="https://schema.org/Person"
                        className="team-member"
                   >
                        <div className="text-center">
                            <figure className="hvr-grow team-photo">
                                <Image loading="lazy"  src={img.src} height={img.height} width={img.width}  alt={img.alt} style={{backgroundImage: `url(${img.lowres})`}} />
                            </figure>
                            <div className="team-title">
                                <p itemProp="name" className="team-name">
                                    {name}
                                </p>
                                <p itempProp="jobTitle" className="team-job-title">
                                    {title}
                                </p>
                            </div>
                        </div>
                        <div className="team-content">
                            {text.map(({ p }, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
};
