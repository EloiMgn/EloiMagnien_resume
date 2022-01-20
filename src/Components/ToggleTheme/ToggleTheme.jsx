import { useContext } from 'react'
import { Store } from '../Provider/Provider'

import './ToggleTheme.scss'

const ToggleTheme = () => {
  const { theme, changeTheme } = useContext(Store)

  return (
    <div
      onClick={changeTheme}
      className={`magic-hover magic-hover__around switchContainer mode-${theme}`}
      >
      <div className="point"></div>
      <div className="theme">{theme}</div>
    </div>
  )
}

export default ToggleTheme
