import React, { useState } from 'react'
import { BottomSheet } from '../src/index'
import styles from '../testStyle/somePage.module.css'
import cx from 'classnames'

type SomePageProps = {}

const SomePage = (props: SomePageProps) => {
  const [open, setOpen] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <div
      style={{
        height: '500px',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <button onClick={() => setPopupOpen(true)}>open</button>

      <BottomSheet
        onChangeTargetSnapHeight={(height) => {
          console.log('=> somePage.tsx:25 ~ height', height)
        }}
        onScroll={() => {
          console.log('=> somePage.tsx:25 ~ onscroll')
        }}
        onDrag={() => {
          console.log('=> somePage.tsx:28 ~ ondrag')
        }}
        onDragStart={() => {
          console.log('=> somePage.tsx/:30 ~ dragstart')
        }}
        onTouchStart={() => {
          console.log('=> somePage.tsx:34 ~ ontouchstart')
        }}
        scrollLocking={false}
        open
        blocking={false}
        snapPoints={({ maxHeight }) => [120, 280, maxHeight - 188]}
        defaultSnap={({ snapPoints, lastSnap }) =>
          lastSnap ?? Math.min(...snapPoints)
        }
        expandOnContentDrag
      >
        <div style={{ height: '3000px' }}>bottomSheet contents</div>
      </BottomSheet>

      {popupOpen && (
        <div className={cx(styles.popup)}>
          <div className={cx(styles.item)}>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
            <button
              style={{ minHeight: '300px' }}
              onClick={() => setPopupOpen(false)}
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SomePage
