import './About.scss'
import CV from '../../Utils/Assets/docs/CV_EloiMagnien_développeur_French.pdf'
import Portrait from '../../Utils/Assets/img/Photo_CV1.jpg'

const About = () => (
  // <!-- Section About -->
  <div className="about" id="section-about">
    {/* // <!-- title -->  */}
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
          Je suis un développeur passionné par la conception de sites Web et
          d&apos;applications. Auparavant agent de voyage en Asie, j&apos;ai
          profité de la crise touristique due au COVID-19 pour me reconvertir
          dans le développement web. Je maitrise les langages de base comme le
          HTML5, CSS3/SASS et javascript mais aussi les frameworks javascript
          tel que React et la bibliothèque de test jest. J&apos;ai pour objectif
          de m&apos;épanouir dans ce milieu et d&apos;améliorer le Web en
          concevant de superbes expériences.
        </p>
        <ul className="about__content__desc--info-list">
          <li className="list">
            <div className="list__title"><p>Résidence:</p></div>{' '}
            <div className="list__content"><p>France</p></div>
          </li>
          <li className="list">
            <div className="list__title">Où me trouver:</div>{' '}
            <div className="list__content"><p>Soissons - 02200</p></div>
          </li>
          <li className="list">
            <div className="list__title"><p>Découvrir mes projets:</p></div>{' '}
            <div className="list__content">
              <a
                className="list__content__link magic-hover magic-hover__around"
                href="https://github.com/EloiMgn?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </li>
        </ul>
        <div className="about__content__desc--resume magic-hover magic-hover__around">
          <a
            href={CV}
            target="_blank"
            rel="noreferrer"
            className="about__content__desc--resume_lnk"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default About
