import MagicMouse from '../../Components/MagicMouse/MagicMouse'
import { is_touch_device } from '../../Utils/tools'
import './ErrorLocalStorage.scss'

const ErrorLocalStorage = () => {
  return (
    <div className='Error'>
    {!is_touch_device() && <MagicMouse /> }

      <div className="ErrorLocalStorage">
        <p>
          🧑‍💻 eloimagnien.com 🧑‍💻 need access to the localStorage, please turn it on
          and do not touch it 😉
          Please refresh your page to see the content
        </p>
        <p>
          🧑‍💻 eloimagnien.com 🧑‍💻 a besoin d&apos;avoir accès à votre localStorage, merci de le rendre disponible et de ne pas y toucher 😉
          Veuillez rafraichir votre page pour accéder au contenu
        </p>
      </div>
    </div>
  )
}

export default ErrorLocalStorage
