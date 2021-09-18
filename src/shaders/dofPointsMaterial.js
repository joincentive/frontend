import * as THREE from 'three'
import { extend } from '@react-three/fiber'

class DofPointsMaterial extends THREE.ShaderMaterial {
	constructor() {
		super({
			vertexShader: `uniform sampler2D positions;
      uniform float uTime;
      uniform float uFocus;
      uniform float uFov;
      uniform float uBlur;
      varying float vDistance;
      void main() { 
        vec3 pos = texture2D(positions, position.xy).xyz;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        vDistance = abs(uFocus - -mvPosition.z);
        gl_PointSize = (step(1.0 - (1.0 / uFov), position.x)) * vDistance * uBlur;
      }`,
			fragmentShader: `uniform float uOpacity;
      varying float vDistance;
      void main() {
        vec2 cxy = 2.0 * gl_PointCoord - 1.0;
        if (dot(cxy, cxy) > 1.0) discard;
        vec3 fg = vec3(0.1367, 0.1367, 0.32);
        vec3 bg = vec3(0.875, 0.468, 0.761);
        float clamped = clamp(vDistance * 1.5, 0.0, 1.0);
        gl_FragColor = vec4(mix(bg, fg, clamped), (1.04 - clamped));
      }`,
			uniforms: {
				positions: { value: null },
				uTime: { value: 0 },
				uFocus: { value: 5.1 },
				uFov: { value: 50 },
				uBlur: { value: 30 },
			},
			transparent: true,
			blending: THREE.NormalBlending,
			depthWrite: false,
		})
	}
}

extend({ DofPointsMaterial })
