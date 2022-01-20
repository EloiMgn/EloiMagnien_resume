import { createContext, useEffect, useState } from 'react'
// import { fetchGet } from '../../utils/fetchData'
// import { getLocalStorage, removeLocalStorage, setLocalStorage } from '../../utils/localStorage'
// import { isToday, localStorageDateToNewDate } from '../../utils/tools'

// import ErrorLocalStorage from '../../pages/ErrorLocalStorage/ErrorLocalStorage'

export const Store = createContext({})

// export const StoreProvider = ({ children }) => {
//   // DEFAULT VALUE
//   const [localStorageAvailable, setIsLocalStorageAvailable] = useState(true)
//   const [location, setLocation] = useState(null)
//   const [theme, setTheme] = useState(null)
//   const [allCountryInfo, setAllCountryInfo] = useState([])

//   const getDataUrl = 'https://www.api.oneyearago.info/getData'
//   const ipDevUrl = 'https://www.api.oneyearago.info/getFakeData'
//   const ipProdUrl = 'https://ipinfo.io/json?token=6839255a3d4105' // https://ipinfo.io/account/home

//   const defaultLocation = 'fr'
//   const defaultTheme = 'dark'

//   useEffect(() => {
//     isLocalStorageAvailable()
//     if (localStorageAvailable) {
//       userTouchLocalStorageListener()
//       init()
//     }
//   }, [])

//   /**
//      * Check availability to use localStorage
//      */
//   const isLocalStorageAvailable = () => {
//     const test = 'test'
//     try {
//       localStorage.setItem(test, test)
//       localStorage.removeItem(test)
//       setIsLocalStorageAvailable(true)
//     } catch (e) {
//       setIsLocalStorageAvailable(false)
//     }
//   }

//   /**
//      * Avoid user to touch localStorage
//      */
//   const userTouchLocalStorageListener = () => {
//     window.addEventListener('storage', () => {
//       console.log('Please do not touch your localStorage without it 📰OneYearAgo.info doesn\'t work 😉 \nMore question : bastien.duseaux@gmail.com')
//       setIsLocalStorageAvailable(false)
//     })
//   }

//   const getLocation = async (allCountryData) => {
//     let newLocation = defaultLocation
//     // on récupère les newsPapers

//     // récupère toutes les locals de l'api nodeJS
//     const allLocals = []
//     allCountryData.forEach(e => { allLocals.push(e.code) })

//     // on set l'url de l'api IP pour le dev ou la prod
//     const url = window.location.href.search('localhost') >= 0 ? ipDevUrl : ipProdUrl
//     const IPinfo = await fetchGet(url)

//     if (IPinfo) {
//       // si il l'API renvoie une bonne réponse
//       if (IPinfo.country) {
//         // et que l'IP se trouve dans le range autorisé
//         if (allLocals.indexOf(IPinfo.country.toLowerCase()) >= 0) {
//           // on set une nouvelle location
//           newLocation = IPinfo.country.toLowerCase()
//         }
//       }
//     }
//     return newLocation
//   }

//   /**
//      * Update localStorage + provider
//      */
//   const updateStores = async (localStorage) => {
//     // on récupère les nouvelles Data
//     const allCountryData = await fetchGet(getDataUrl)

//     let getLocation
//     let theme

//     // si l'user est déjà venu on récupère la location et le theme
//     if (localStorage) {
//       // eslint-disable-next-line no-const-assign
//       location = localStorage.location
//       theme = localStorage.theme
//     // eslint-disable-next-line brace-style
//     }
//     // sinon c'est qu'il faut tout initialiser (1er visite)
//     else {
//       theme = defaultTheme
//       // eslint-disable-next-line no-const-assign
//       location = await getLocation(allCountryData)
//     }
//     // on update le localStorage
//     setLocalStorage({ date: new Date(), location, theme, allCountryInfo: allCountryData })

//     // on update le provider
//     setLocation(location)
//     setTheme(theme)
//     setAllCountryInfo(allCountryData)
//   }

//   const resetStores = async () => {
//     removeLocalStorage()
//     updateStores()
//     setIsLocalStorageAvailable(true)
//   }

//   const init = async () => {
//     // check localStorage
//     const rawLocalStorage = getLocalStorage()
//     // si il y a quelqueChose dans le localStorage
//     if (rawLocalStorage !== null) {
//       const localStorage = JSON.parse(rawLocalStorage)

//       // si l'user est déja venu aujourd'hui
//       if (isToday(localStorageDateToNewDate(localStorage.date))) {
//         setLocation(localStorage.location)
//         setAllCountryInfo(localStorage.allCountryInfo)
//         setTheme(localStorage.theme)
//       // eslint-disable-next-line brace-style
//       }
//       // sinon on met à jours le localStorage + Store
//       else {
//         console.log('toto')

//         updateStores(localStorage)
//       }
//     // eslint-disable-next-line brace-style
//     }
//     // si c'est la première visite de l'utilisateur, il faut tout initialiser localStorage + Provider
//     else {
//       updateStores()
//     }
//   }

//   const changeTheme = () => {
//     if (location !== null) {
//       if (theme === 'light') {
//         setTheme('dark')
//         setLocalStorage({ date: new Date(), location, theme: 'dark', allCountryInfo })
//       } else {
//         setTheme('light')
//         setLocalStorage({ date: new Date(), location, theme: 'light', allCountryInfo })
//       }
//     }
//   }

//   const changeLocation = (newLocation) => {
//     setLocation(newLocation)
//     if (theme !== null) {
//       setLocalStorage({ date: new Date(), location: newLocation, theme, allCountryInfo })
//     }
//   }

//   return (
//         // value = contenu du state disponible aux `Consumers` de l'application
//         <Store.Provider value={{ location: (location || defaultLocation), theme: (theme || defaultTheme), allCountryInfo, changeTheme, changeLocation }}>
//             {/* [TODO] : page error with logo ...etc... */}
//             {localStorageAvailable ? children : <ErrorLocalStorage />}
//         </Store.Provider>
//   )
// }

// export default StoreProvider
