import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';

const skills = [
  { icon: 'devicon-react-original colored', label: 'React' },
  { icon: 'devicon-flask-plain colored', label: 'Flask' },
  { icon: 'devicon-express-original colored', label: 'Express' },
  { icon: 'devicon-nextjs-original colored', label: 'Next.js' },
  { icon: 'devicon-typescript-plain colored', label: 'Typescript' },
  { icon: 'devicon-angularjs-plain colored', label: 'Angular' },
   { icon: 'devicon-nodejs-plain colored', label: 'Node.js' },
  { icon: 'devicon-python-plain colored', label: 'Python' },
  { icon: 'devicon-streamlit-original colored', label: 'Streamlit' },
  { icon: 'devicon-flutter-plain colored', label: 'Flutter' },
  { icon: 'devicon-git-plain', label: 'Git' },
  { icon: 'devicon-javascript-original colored', label: 'JS' },
  { icon: 'devicon-gitlab-plain colored', label: 'Gitlab' },
  { icon: 'devicon-github-original colored', label: 'Github' },
  { icon: 'devicon-postgresql-plain colored', label: 'Postgres' },
  { icon: 'devicon-docker-plain colored', label: 'Docker' },
  { icon: 'devicon-java-plain colored', label: 'Java' },
  { icon: 'devicon-c-plain colored', label: 'C' },
  { icon: 'devicon-cplusplus-plain colored', label: 'C++' },
  { icon: 'devicon-html5-plain colored', label: 'HTML' },
  { icon: 'devicon-css3-plain colored', label: 'CSS' },
  { icon: 'devicon-mongodb-plain colored', label: 'MongoDB' },
  { icon: 'devicon-mysql-plain colored', label: 'MySQL' },
  { icon: 'devicon-firebase-plain colored', label: 'Firebase' },
  { icon: 'devicon-amazonwebservices-original colored', label: 'AWS' },
  { icon: 'devicon-django-plain', label: 'Django' },
  { icon: 'devicon-figma-plain colored', label: 'Figma' },
  { icon: 'devicon-vscode-plain colored', label: 'VSCode' },
  { icon: 'devicon-threejs-original colored', label: 'Three.js' },
];

function shuffle(array) {
  // Fisher-Yates shuffle
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getSphereCoords(count, radius) {
  // Fibonacci sphere algorithm for even distribution
  const points = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push([x * radius, y * radius, z * radius]);
  }
  return points;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function RotatingSphere({ children, cursorOffset }) {
  const group = useRef();
  const lerpedOffset = useRef({ x: 0, y: 0 });
  useFrame(({ clock }) => {
    if (group.current) {
      // Lerp the offset for smoothness
      lerpedOffset.current.x = lerp(lerpedOffset.current.x, cursorOffset.x, 0.07);
      lerpedOffset.current.y = lerp(lerpedOffset.current.y, cursorOffset.y, 0.07);
      // Always auto-rotate (faster)
      const baseY = clock.getElapsedTime() * 0.70;
      const baseX = Math.sin(clock.getElapsedTime() * 0.1) * 0.18;
      // Add cursor offset
      group.current.rotation.y = baseY + lerpedOffset.current.y;
      group.current.rotation.x = baseX + lerpedOffset.current.x;
    }
  });
  return <group ref={group}>{children}</group>;
}

const Skills3DCloud = () => {
  const radius = 5.2; // Adjusted to keep icons in frame
  const shuffledSkills = useMemo(() => shuffle(skills), []);
  const positions = useMemo(() => getSphereCoords(shuffledSkills.length, radius), [shuffledSkills, radius]);
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0 });
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const containerRef = useRef();

  // Mouse move handler
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setCursorOffset({
      x: y * 0.4, // less aggressive
      y: x * 0.7, // less aggressive
    });
  };

  // Reset offset when mouse leaves
  const handleMouseLeave = () => {
    setCursorOffset({ x: 0, y: 0 });
    setHoveredIdx(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: 600,
        height: 600,
        margin: '0 auto',
        background: 'rgba(255,255,255,0.35)',
        borderRadius: '2rem',
        boxShadow: '0 8px 32px 0 rgba(80, 120, 255, 0.18), 0 0 40px 0 #a5b4fc33',
        border: '1.5px solid #e0e0e0',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'box-shadow 0.2s',
      }}
    >
      <Canvas camera={{ position: [0, 0, 12] }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.8} />
        <RotatingSphere cursorOffset={cursorOffset}>
          {shuffledSkills.map((skill, idx) => (
            <Html
              key={idx}
              position={positions[idx]}
              center
              style={{ pointerEvents: 'auto', position: 'relative' }}
            >
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <i
                  className={skill.icon}
                  title={skill.label}
                  style={{
                    fontSize: 40,
                    cursor: 'pointer',
                    filter: 'drop-shadow(0 2px 8px #0002)',
                    transition: 'transform 0.2s, filter 0.2s',
                  }}
                  onMouseOver={() => setHoveredIdx(idx)}
                  onMouseOut={() => setHoveredIdx(null)}
                  tabIndex={0}
                  aria-label={skill.label}
                />
                <span className={`skills-tooltip${hoveredIdx === idx ? ' show' : ''}`}>{skill.label}</span>
              </div>
            </Html>
          ))}
        </RotatingSphere>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};

export default Skills3DCloud; 