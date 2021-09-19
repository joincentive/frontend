import * as THREE from 'three'
import React, { useMemo } from 'react'

const fontJson = require('./font_data.json')
const font = new THREE.Font(fontJson)

const Text = ({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#000000', ...props }) => {
  const config = useMemo(() => ({ font, size: 40, height: 50 }), [])
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.02]}>
      <mesh onUpdate={(self) => {
        const size = new THREE.Vector3()
        self.geometry.computeBoundingBox()
        self.geometry.boundingBox.getSize(size)
        self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
        self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
      }}>
        <textGeometry attach="geometry" args={[children, config]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    </group>
  )
}

export default Text
