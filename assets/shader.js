export const vertex = `


uniform float time;
uniform vec2 imageResolution;
varying vec2 vUv;
varying vec3 vecPos; 
varying vec3 v_position;
void main() {
  vUv = uv;

  v_position = position.xyz; 
  v_position.x = position.x + sin(v_position.y +v_position.x); 
  v_position.y = position.y + sin(v_position.y +v_position.x); 
  vecPos = (modelViewMatrix * vec4(v_position, 1.0)).xyz; 
  gl_Position = projectionMatrix * vec4(vecPos, 1.0);
}


`;

export const fragment = `


varying vec2 vUv;
varying vec4 textur;
uniform sampler2D texture;
uniform vec2 imageResolution;
uniform float time;
uniform vec2 u_resolution;
void main() {
	vec2 aspectRatio = vec2(
    min((u_resolution.x / u_resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
    min((u_resolution.y / u_resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
  );
  vec2 uv1 = vUv;
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  uv1.x += sin(uv1.x * 10. + time * 0.6) * 0.0032;
  uv1.y += sin(uv1.y * 4. + time * 0.9) * 0.0038;
	uv1 += sin(uv1.y * 3. + uv1.x * 3. + time * 0.8) * 0.002;
  uv1 += sin(uv1.y * 5. - uv1.x * 5. + time * 0.8) * 0.001;
  vec4 textur = texture2D(texture,uv1);
	gl_FragColor = vec4(textur.r,textur.g,textur.b, 1.);
}


`;
