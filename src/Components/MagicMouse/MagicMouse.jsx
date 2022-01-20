import { useEffect, useRef } from 'react'
import './MagicMouse.scss'

const MagicMouse = () => {
  const magicPointer = useRef(null)
  const magicMouseCursor = useRef(null)

  useEffect(() => {
    // window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
      if (magicMouseCursor.current !== null && magicPointer.current !== null) {
        magicMouse(magicMouseCursor.current, magicPointer.current)
      }
    }, 100)
    // })
  }, [magicPointer, magicMouseCursor])

  const magicMouse = (magicMouseCursor, magicPointer) => {
    magicMouseCursor.style.width = '30px'
    magicMouseCursor.style.height = '30px'

    let cursorOuterWidth = 30
    let cursorOuterHeight = 30
    const originalCursorWidth = 30
    const originalCursorHeight = 30

    // Update position of cursor when move:
    let outerX = 0
    let outerY = 0
    let pointerX = 0
    let pointerY = 0
    let stopFlag = false

    document.addEventListener('mousemove', function (event) {
      pointerX = event.clientX
      pointerY = event.clientY
      setTimeout(() => {
        if (!stopFlag) {
          outerX = event.clientX - cursorOuterWidth / 2
          outerY = event.clientY - cursorOuterHeight / 2
        }
      }, 100)
    })

    // Hover effects :
    const hoverEls = document.querySelectorAll('.magic-hover')
    hoverEls.forEach((item) => {
      item.addEventListener('mouseenter', event => {
        circleMove_mouseEnterHover(item, event)
      })

      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translate3d(0,0,0)'
        circleMove_mouseLeaveHover()
      })
    })

    // Move the cursorDOM:
    const movement = () => {
      magicMouseCursor.style.transform = 'matrix(1, 0, 0, 1, ' + outerX + ', ' + outerY + ')'
      magicMouseCursor.style.width = cursorOuterWidth - 2 + 'px'
      magicMouseCursor.style.height = cursorOuterHeight - 2 + 'px'

      // Move the custom pointer :
      magicPointer.style.transform = 'matrix(1, 0, 0, 1, ' + pointerX + ', ' + pointerY + ') translate3d(-50%, -50%, 0)'
      requestAnimationFrame(movement)
    }

    requestAnimationFrame(movement)

    const circleMove_mouseEnterHover = (item, event) => {
      stopFlag = true
      magicMouseCursor.style.transition = 'transform 0.2s, width 0.3s, height 0.3s, border-radius 0.2s'
      magicMouseCursor.classList.add('is-hover')
      const elem = event.currentTarget
      const elementPos = elem.getBoundingClientRect()

      if (item.classList.contains('magic-hover__around')) {
        magicMouseCursor.classList.add('cursor-around')
        outerX = elementPos.left
        outerY = elementPos.top
        cursorOuterWidth = elementPos.width
        cursorOuterHeight = elementPos.height
      } else {
        outerX = elementPos.left
        outerY = elementPos.top
        cursorOuterWidth = elementPos.width
        cursorOuterHeight = elementPos.height
      }
      magicPointer.classList.add('is-hover')
    }

    const circleMove_mouseLeaveHover = () => {
      stopFlag = false
      cursorOuterWidth = originalCursorWidth
      cursorOuterHeight = originalCursorHeight
      magicMouseCursor.style.transition = 'transform 0.07s, width 0.3s, height 0.3s, border-radius 0.2s'
      magicMouseCursor.classList.remove('cursor-around')
      magicMouseCursor.classList.remove('is-hover')
      magicPointer.classList.remove('is-hover')
    }
  }

  return (
        <>
            <div ref={magicPointer} id="magicPointer"></div>
            <div ref={magicMouseCursor} id="magicMouseCursor"></div>
        </>
  )
}

export default MagicMouse
