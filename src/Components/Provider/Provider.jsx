/* eslint-disable brace-style */
import { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../../Utils/localStorage'
import { isToday, localStorageDateToNewDate } from '../../Utils/tools'

import ErrorLocalStorage from '../../Pages/ErrorLocalStorage/ErrorLocalStorage'

export const Store = createContext({})

export const StoreProvider = ({ children }) => {
  // DEFAULT VALUE
  const [localStorageAvailable, setIsLocalStorageAvailable] = useState(true)
  const [theme, setTheme] = useState(null)

  const defaultTheme = 'dark'

  useEffect(() => {
    isLocalStorageAvailable()
    if (localStorageAvailable) {
      userTouchLocalStorageListener()
      init()
    }
  }, [])

  /**
   * Check availability to use localStorage
   */
  const isLocalStorageAvailable = () => {
    const test = 'test'
    try {
      localStorage.setItem(test, test)
      localStorage.removeItem(test)
      setIsLocalStorageAvailable(true)
    } catch (e) {
      setIsLocalStorageAvailable(false)
    }
  }

  /**
   * Avoid user to touch localStorage
   */
  const userTouchLocalStorageListener = () => {
    window.addEventListener('storage', () => {
      console.log(
        'Please do not touch your localStorage without it 🧑‍💻 eloimagnien.com 🧑‍💻 doesn\'t work 😉 \nMore question : eloi.magnien@gmail.com'
      )
      setIsLocalStorageAvailable(false)
    })
  }

  /**
   * Update localStorage + provider
   */
  const updateStores = async (localStorage) => {
    // on récupère les nouvelles Data
    let theme

    // si l'user est déjà venu on récupère la location et le theme
    if (localStorage) {
      theme = localStorage.theme
    }
    // sinon c'est qu'il faut tout initialiser (1er visite)
    else {
      theme = defaultTheme
    }
    // on update le localStorage
    setLocalStorage({ date: new Date(), theme })

    // on update le provider
    setTheme(theme)
  }

  const init = async () => {
    // check localStorage
    const rawLocalStorage = getLocalStorage()
    // si il y a quelqueChose dans le localStorage
    if (rawLocalStorage !== null) {
      const localStorage = JSON.parse(rawLocalStorage)

      // si l'user est déja venu aujourd'hui
      if (isToday(localStorageDateToNewDate(localStorage.date))) {
        setTheme(localStorage.theme)
      }
      // sinon on met à jours le localStorage + Store
      else {
        console.log('toto')

        updateStores(localStorage)
      }
    }
    // si c'est la première visite de l'utilisateur, il faut tout initialiser localStorage + Provider
    else {
      updateStores()
    }
  }

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      setLocalStorage({ date: new Date(), theme: 'dark' })
    } else {
      setTheme('light')
      setLocalStorage({ date: new Date(), theme: 'light' })
    }
  }

  return (
    // value = contenu du state disponible aux `Consumers` de l'application
    <Store.Provider value={{ theme: theme || defaultTheme, changeTheme }}>
      {/* [TODO] : page error with logo ...etc... */}
      {localStorageAvailable ? children : <ErrorLocalStorage/> }
    </Store.Provider>
  )
}

export default StoreProvider
