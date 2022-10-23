import './App.css';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const imgStyle = {
  width: "200px",
  height: "auto",
  objectFit: "cover",
  display: "none",
  opacity: "0.0",
}

function App() {
  const tl = useRef();
  const tl2 = useRef();
  const parent = useRef();
  const q = gsap.utils.selector(parent)



  useEffect(() => {
    gsap.to(".box", 1, {
      scale: 0.1, 
      y: 60,
      yoyo: true, 
      repeat: -1, 
      ease: "power1.inOut",
      delay: 1,
      stagger: {
        amount: 1.5, 
        grid: "auto",
        from: "center"
      }
    })
  }, [])
  



  useEffect(() => {
    setTimeout (() =>{
    const parentBoxes = gsap.utils.toArray(".parent-container > *");
    const childBoxes = gsap.utils.toArray(".child-container > *");
    const childContainer = document.querySelector(".child-container");

    let index = parentBoxes.indexOf(childContainer);
    let parentBoxesTwo = parentBoxes.splice(index + 1);

    parentBoxes.splice(-1);


    let tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: "power4.out",
        stagger: {
          from: "start",
          each: 0.3
        }
      }
    });

    tl
      .to(parentBoxes, {
        keyframes: [
          { scale: 3.5, rotation: 75},
          { scale: 1, rotation: 0 }
        ]
      })
      .to(childBoxes, {
        duration: 2,
        ease: "back.out",
        stagger: {
          from: "edges",
          each: 0.05
        },
        keyframes: [{ scale: 2 }, { scale: 1 }]
      }, "+=2")
      .to(parentBoxesTwo, {
        keyframes: [
          { scale: 3.5, rotation: 75 },
          { scale: 1, rotation: 0 }
        ]
      }, 1.5)
    },8000.0)
  }, [])

  useEffect(() => {
    setTimeout (() =>{

    tl2.current = gsap.timeline()
        gsap.to(q('#resto'),{rotation: 27, x: 100, duration: 1.5});
        gsap.to("#i0", {rotation: 27, x: 100, duration: 1.5});
        gsap.to("#i1", {rotation: 27, x: 100, duration: 1.5});
        gsap.to("#i2", {rotation: 27, x: 100, duration: 1.5});
        gsap.to("#i3", {rotation: 27, x: 100, duration: 1.5});
        gsap.to("#i4", {rotation: 27, x: 100, duration: 1.5});
        gsap.to("#i5", {rotation: 27, x: 100, duration: 1.5});
        gsap.to("#i6", {rotation: 27, x: 100, duration: 1.5});
        gsap.to("#i7", {rotation: 27, x: 100, duration: 1.5});
        gsap.to("#i8", {rotation: 27, x: 100, duration: 1.5});
      },8000.0)

      setTimeout (() =>{
        tl2.current = gsap.timeline()
            gsap.to(q('#resto'),{rotation: 0, x: 100, duration: 1.0});
            gsap.to("#i0", {rotation: 0, x: 100, duration: 1.5});
            gsap.to("#i1", {rotation: 0, x: 100, duration: 1.5});
            gsap.to("#i2", {rotation: 0, x: 100, duration: 1.5});
            gsap.to("#i3", {rotation: 0, x: 100, duration: 1.5});
            gsap.to("#i4", {rotation: 0, x: 100, duration: 1.5});
            gsap.to("#i5", {rotation: 0, x: 100, duration: 1.5});
            gsap.to("#i6", {rotation: 0, x: 100, duration: 1.5});
            gsap.to("#i7", {rotation: 0, x: 100, duration: 1.5});
            gsap.to("#i8", {rotation: 0, x: 100, duration: 1.5});
          },11500.0)     


      setTimeout (()=>{   
      tl2.current = gsap.timeline()
      gsap.to(q('#resto'),{opacity:"0.0",duration:1.0});
    },14500.0) 
    },[])

  useEffect(() => {
    setTimeout (() =>{
    const getRandomPosition = () => {
      const width = 800;
      const height = 600;
    
      return {
        x: Math.random() * width,
        y:Math.random() * height
      }
    }

        setInterval(() => {
          console.log(window.outerWidth)
          tl.current = gsap.timeline()
          .to(q('#i0'), getRandomPosition())
          .to(q('#i1'), getRandomPosition())
          .to(q('#i2'), getRandomPosition())
          .to(q('#i3'), getRandomPosition())
          .to(q('#i4'), getRandomPosition())
          .to(q('#i5'), getRandomPosition())
          .to(q('#i6'), getRandomPosition())
          .to(q('#i7'), getRandomPosition())
          .to(q('#i8'), getRandomPosition())
        }, 1500)
      },13500)
    },[])


  return (
    <div className="App" ref={parent} style={{overflow: 'hidden', height: '100vh'}}>
      <body>
        <div id="wrap">
          <div class="parent-container container">
            <img id = 'i0' src={'/img0.jpg'}></img>
            <img id = 'i1' src={'/img1.jpg'}></img>
            <img id = 'i2' src={'/img2.jpg'}></img>
            <img id = 'i3' src={'/img3.jpg'}></img>
            <img id = 'i4' src={'/img0.jpg'}></img>
            <img id = 'i5' src={'/img1.jpg'}></img>
            <img id = 'i6' src={'/img2.jpg'}></img>
            <img id = 'i7' src={'/img3.jpg'}></img>
            <img id = 'i8' src={'/img0.jpg'}></img>
            <img id = 'resto' src={'/img1.jpg'}></img>
            <img id = 'resto' src={'/img2.jpg'}></img>
            <img id = 'resto' src={'/img3.jpg'}></img>
            <img id = 'resto' src={'/img0.jpg'}></img>
            <img id = 'resto' src={'/img1.jpg'}></img>
            <img id = 'resto' src={'/img2.jpg'}></img>
          </div>
        </div>
      </body>
    </div>
  );
}



export default App;