import { Component } from "react";

import './about-us.scss';

class About extends Component {

    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="about__title">About Us</div>
                    <div className="about__dividers">
                        <div className="about__divider"></div>
                        <img className="about__img" src={require('../../icon/beans_black_white/bean__black.png')} alt="coffe-beans" />
                        <div className="about__divider"></div>
                    </div>
                    <div className="about__descr">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                                    is song that held help face.
                                                    
                                                                            <br></br>
                                                                            <br></br>

                                                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                                    horrible but confined day end marriage. Eagerness furniture set preserved far
                                                    recommend. Did even but nor are most gave hope. Secure active living depend son
                                                    repair day ladies now.
                    </div>
                </div>
            </div>
        )
    }
}

export default About;