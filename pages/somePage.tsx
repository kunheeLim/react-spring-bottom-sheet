import React, { useState } from 'react'
import { BottomSheet } from '../src/index'

type SomePageProps = {}

const SomePage = (props: SomePageProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button onClick={() => setOpen(true)}>open</button>

      <BottomSheet
        open={open}
        blocking={false}
        snapPoints={({ maxHeight }) => [120, 280, maxHeight - 188]}
        defaultSnap={({ snapPoints, lastSnap }) =>
          lastSnap ?? Math.min(...snapPoints)
        }
        expandOnContentDrag
      >
        <div style={{ height: '3000px' }}>bottomSheet contents</div>
      </BottomSheet>
    </div>
  )
}

export default SomePage
