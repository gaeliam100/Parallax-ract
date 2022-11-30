import { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import moon from './moon.png';
import land from './land.png';
import cat from './cat.gif';
import{Parallax,ParallaxLayer} from '@react-spring/parallax';
function App() {
  const ref = useRef();
  return (
<div style={{backgroundcolor:`black`}}>
<Parallax pages={2.5} ref={ref}>
<ParallaxLayer
offset={0}
speed={1}
factor={4}
style={{
  backgroundImage:`url(${land})`,
  backgroundSize:'cover',
}}
></ParallaxLayer>
<ParallaxLayer
offset={0}
speed={4}
factor={2}
style={{
  backgroundImage:`url(${moon})`,
  backgroundSize:'cover',
}}
></ParallaxLayer>
<ParallaxLayer
          sticky={{ start: 0.3, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.5}
          speed={0.05}
          onClick={() => ref.current.scrollTo(2)}
        >
          <h2 style={{color:`white`,textAlign:`center`,fontSize:`90px`}}>Aprendiendo React </h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2 style={{color:`white`,textAlign:`center`,fontSize:`90px`}} >Hola a todos</h2>
        </ParallaxLayer>
  </Parallax>
</div>
  );
}

export default App;
