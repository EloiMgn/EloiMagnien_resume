import './About.scss';
import CV from '../../Utils/Assets/CV_EloiMagnien_développeur_French.pdf';
import Portrait from '../../Utils/Assets/Photo_CV1.jpg';


const About = () => (
  // <!-- Section About -->
  <div className="about" id="section-about">
    {/* <!-- title --> */}
    <div className="about__title">
      <div className="about__title_inner"> À Propos</div>
    </div>

    <div className="about__content">
      {/* <!-- image --> */}
      <div className="about__content__pic">
        <img className="about__content__pic--img" src={Portrait} alt="" />
      </div>

      {/* <!-- desc --> */}
      <div className="about__content__desc">
        <p className="about__content__desc--intro">
          Je suis un développeur passionné par la conception de sites 
          Web et d&apos;applications. Auparavant agent de voyage en Asie,
           j&apos;ai profité de la crise touristique due au COVID-19 pour 
           me reconvertir dans le développement web. Je maitrise les 
           langages de base comme le HTML5, CSS3/SASS et javascript 
           mais aussi les frameworks javascript tel que React et 
           la bibliothèque de test jest. J&apos;ai pour objectif 
           de m&apos;épanouir dans ce milieu et d&apos;améliorer 
           le Web en concevant de superbes expériences.
        </p>
        <ul className="about__content__desc--info-list">
            <li><strong>Résidence:</strong> France</li>
            <li><strong>Où me trouver:</strong> Soissons - 02200</li>
            <li><strong>Découvrir mes projets:</strong> <a href="https://github.com/EloiMgn?tab=repositories">GitHub</a></li>
        </ul>
        <div className="about__content__desc--resume">
          <a
            href={CV} target='_blank' rel="noreferrer"
            className="about__content__desc--resume_lnk"
          >
            <span className="circle"></span>
            Télécharger mon CV
            {/* <span className="about__content__desc--resume_lnk">Télécharger mon CV</span> */}
          </a>
        </div>
      </div>
    </div>
  </div>

  );

export default About;


