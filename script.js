'use strict';
import {console_color,console_red,console_orange,console_yellow,console_green,
	console_blue,console_purple,console_magenta,console_cyan} from './logColor.js';

// ---------------------------------------------------------------------------------
//*                     --- PIXELATED IMAGE WARP VERSION ---
// ---------------------------------------------------------------------------------


  // window.addEventListener('load', () => {
  //   const canvas = document.querySelector('canvas');
  //   const ctx = canvas.getContext('2d', {willReadFrequently: true});
  //   canvas.width = innerWidth;
  //   canvas.height = innerHeight;
  //   const PARTICLE_SIZE = 4;
  //   const GAP = 5;
    
  //   class Particle {
  //     constructor(effect, x, y, color) {
  //       this.effect = effect;
  //       this.x = Math.random() * this.effect.width*3 - this.effect.width;
  //       this.y = Math.random() * this.effect.height*3 - this.effect.height;
  //       this.originX = Math.floor(x);
  //       this.originY = Math.floor(y);
  //       this.color = color;
  //       this.size = PARTICLE_SIZE;
  //       this.ease = 0.03;
  //     }
  //     draw(ctx) {
  //       ctx.fillStyle = this.color;
  //       ctx.fillRect(this.x, this.y, this.size, this.size);
  //       // ctx.beginPath();
  //       // ctx.fillStyle = this.color;;
  //       // ctx.ellipse(this.x, this.y, this.size, this.size, 0, 0, Math.PI*2);
  //       // ctx.fill();
  //     }
  //     movement() {
  //       this.x += (this.originX - this.x) * this.ease;
  //       this.y += (this.originY - this.y) * this.ease;
  //     }
  //     warp() {
  //       this.x += Math.random() * 10000 - 5000;
  //       this.y += Math.random() * 10000 - 5000;
  //       this.ease = 0.01;
  //     }
  //   }

  //   class Effect {
  //     constructor(width, height) {
  //       this.width = width;
  //       this.height = height;
  //       this.ParticleArr = [];
  //       this.image = document.querySelector('.image');
  //       this.cx = this.width/2;
  //       this.cy = this.height/2;
  //       this.x = this.cx - this.image.width/2;
  //       this.y = this.cy - this.image.height/2;
  //       this.gap = GAP;
  //       this.spawnParticles(ctx); //* A
  //       this.warpBtn = document.getElementById('warp-button');
  //       this.warpBtn.addEventListener('click', () => {
  //         // this.spawnParticles(ctx); //* B
  //         this.warp(); //* A
  //       });
  //     }
  //     spawnParticles(ctx) {
  //       // this.ParticleArr = []; //* B
  //       ctx.drawImage(this.image, this.x, this.y);
  //       const pixels = ctx.getImageData(0, 0, this.width, this.height).data;
  //       for (let y = 0; y < this.height; y += this.gap) {
  //         for (let x = 0; x < this.width; x += this.gap) {
  //           const index = (y * this.width + x) * 4;
  //           const r = pixels[index];
  //           const g = pixels[index+1];
  //           const b = pixels[index+2];
  //           const alpha = pixels[index+3];
  //           const color = `rgb(${r},${g},${b})`;
  //           if(alpha > 0) {
  //             this.ParticleArr.push(new Particle(this, x, y, color));
  //           }
  //         }
  //       }
  //     }
  //     draw(ctx) {
  //       this.ParticleArr.forEach(particle => { particle.draw(ctx) });
  //     }
  //     movement() {
  //       this.ParticleArr.forEach(particle => { particle.movement() });
  //     }
  //     warp() {
  //       this.ParticleArr.forEach(particle => { particle.warp() });
  //     }
  //   }
  //   const effect = new Effect(canvas.width, canvas.height);

  //   // const warpBtn = document.getElementById('warp-button');
  //   // warpBtn.addEventListener('click', () => {
  //   //   effect.spawnParticles(ctx); //* B
  //   //   // effect.warp(); //* A
  //   // });

  //   function animate() {
  //     ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
  //     ctx.fillRect(0, 0, canvas.width, canvas.height);
  //     // ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     effect.movement();
  //     effect.draw(ctx);
  //     requestAnimationFrame(animate);
  //   } animate();
  // });


// ---------------------------------------------------------------------------------
//*                  --- PIXELATED IMAGE MOUSEMOVE VERSION 1.---
// ---------------------------------------------------------------------------------


  // window.addEventListener('load', () => {
  //   const canvas = document.querySelector('canvas');
  //   const ctx = canvas.getContext('2d', {willReadFrequently: true});
  //   canvas.width = innerWidth;
  //   canvas.height = innerHeight;
  //   const PARTICLE_SIZE = 4;
  //   const GAP = 5;
  //   let IntervalId;

  //   class Particle {
  //     constructor(effect, x, y, color) {
  //       this.effect = effect;
  //       this.x = x;
  //       this.y = y;
  //       this.originX = Math.floor(x);
  //       this.originY = Math.floor(y);
  //       this.color = color;
  //       this.size = PARTICLE_SIZE;
  //       this.power = 20; // bc10
  //       this.ease = 0.01; //bc 0.03
  //       this.random = Math.random() * 10000 - 5000;
  //     }
  //     draw(ctx) {
  //       ctx.fillStyle = this.color;
  //       ctx.fillRect(this.x, this.y, this.size, this.size);
  //       // ctx.beginPath();
  //       // ctx.fillStyle = this.color;;
  //       // ctx.ellipse(this.x, this.y, this.size, this.size, 0, 0, Math.PI*2);
  //       // ctx.fill();
  //     }
  //     movement() {
  //       const dx = this.effect.mouse.x - this.x;
  //       const dy = this.effect.mouse.y - this.y;
  //       const distance = Math.hypot(dx, dy);
  //       const angle = Math.atan2(dy, dx);
  //       const force = distance / this.effect.mouse.radius;
  //       if(distance < this.effect.mouse.radius) {
  //         // this.x += Math.cos(angle) * this.random;
  //         // this.y += Math.sin(angle) * this.random;
  //         this.x += -Math.cos(angle) * force * this.power;
  //         this.y += -Math.sin(angle) * force * this.power;
  //       }
  //       this.x += (this.originX - this.x) * this.ease; //* original
  //       this.y += (this.originY - this.y) * this.ease; //* original
  //     }
  //     warp() {
  //       this.x += Math.random() * 10000 - 5000;
  //       this.y += Math.random() * 10000 - 5000;
  //       // this.x = Math.random() * this.effect.width*3 - this.effect.width;
  //       // this.y +=  Math.random() * this.effect.height*3 - this.effect.height;
  //       // this.ease = 0.01;
  //     }
  //     timeLagReproduction() {
  //       this.x += (this.originX - this.x) * this.ease;
  //       this.y += (this.originY - this.y) * this.ease;
  //     }
  //   }

  //   class Effect {
  //     constructor(width, height) {
  //       this.width = width;
  //       this.height = height;
  //       this.ParticleArr = [];
  //       this.image = document.querySelector('.image');
  //       this.cx = this.width/2;
  //       this.cy = this.height/2;
  //       this.x = this.cx - this.image.width/2;
  //       this.y = this.cy - this.image.height/2;
  //       this.gap = GAP;
  //       this.spawnParticles(ctx);
  //       this.mouse = {
  //         radius: 30,
  //         x: undefined,
  //         y: undefined
  //       }
  //       document.addEventListener('mousemove', (e) => {
  //         effect.mouse.x = e.clientX;
  //         effect.mouse.y = e.clientY;

  //         // clearInterval(IntervalId); //* timeLagReproduction
  //         // let i = 0; 
  //         // IntervalId = setInterval(() => { 
  //         //   this.timeLagReproduction(); 
  //         //   i++;
  //         //   console.log(i);
  //         //   if(i >200){ clearInterval(IntervalId) };
  //         // }, 20);  //* timeLagReproduction

  //       });
  //     }
  //     spawnParticles(ctx) {
  //       ctx.drawImage(this.image, this.x, this.y);
  //       const pixels = ctx.getImageData(0, 0, this.width, this.height).data;
  //       for (let y = 0; y < this.height; y += this.gap) {
  //         for (let x = 0; x < this.width; x += this.gap) {
  //           const index = (y * this.width + x) * 4;
  //           const r = pixels[index];
  //           const g = pixels[index+1];
  //           const b = pixels[index+2];
  //           const alpha = pixels[index+3];
  //           const color = `rgb(${r},${g},${b})`;
  //           // const color = `rgb(${r},${g},${b})`;
  //           if(alpha > 0) {
  //             this.ParticleArr.push(new Particle(this, x, y, color));
  //           }
  //         }
  //       }
  //     }
  //     draw(ctx) {
  //       this.ParticleArr.forEach(particle => { particle.draw(ctx) });
  //     }
  //     movement() {
  //       this.ParticleArr.forEach(particle => { particle.movement() });
  //     }
  //     warp() {
  //       this.ParticleArr.forEach(particle => { particle.warp() });
  //     }
  //     timeLagReproduction() {
  //       this.ParticleArr.forEach(particle => { particle.timeLagReproduction() });
  //     }
  //   }

  //   const effect = new Effect(canvas.width, canvas.height);

  //   const warpBtn = document.getElementById('warp-button');
  //   warpBtn.addEventListener('click', () => {
  //     effect.warp();
  //   });


  //   function animate() {
  //     // ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
  //     // ctx.fillRect(0, 0, canvas.width, canvas.height);
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     effect.movement();
  //     effect.draw(ctx);
  //     requestAnimationFrame(animate);
  //   } animate();
  // });




// ---------------------------------------------------------------------------------
//*                  --- PIXELATED IMAGE MOUSEMOVE VERSION 2.---
// ---------------------------------------------------------------------------------


  window.addEventListener('load', () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d', {willReadFrequently: true});
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const PARTICLE_SIZE = 4;
    const GAP = 4;
    class Particle {
      constructor(effect, x, y, color) {
        this.effect = effect;
        this.x = x;
        this.y = y;
        this.originX = Math.floor(x);
        this.originY = Math.floor(y);
        this.color = color;
        this.size = PARTICLE_SIZE;
        this.vx = 0;
        this.vy = 0;
        this.power = 10;
        this.ease = 0.03;
        this.friction = 0.98;
        this.random = Math.random() * 10000 - 5000;
        this.rand = Math.random() * 2;
      }
      draw(ctx) {
        // ctx.fillStyle = this.color;
        // ctx.font = "3px Arial"; // PARTICLE_SIZE = 10 GAP = 3
        // ctx.textAlign = "center"; 
        // ctx.fillText(Math.floor(this.rand), this.x, this.y, this.size, this.size);

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        // ctx.beginPath();
        // ctx.fillStyle = this.color;;
        // ctx.ellipse(this.x, this.y, this.size, this.size, 0, 0, Math.PI*2);
        // ctx.fill();
      }
      movement() {
        const dx = this.effect.mouse.x - this.x;
        const dy = this.effect.mouse.y - this.y;
        const distance = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        const force = distance / this.effect.mouse.radius;
        if(distance < this.effect.mouse.radius) {
          this.vx += -Math.cos(angle) * force * this.power;
          this.vy += -Math.sin(angle) * force * this.power;
        }
        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease; 
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease; 
      }
      warp() {
        // this.x += Math.random() * 10000 - 5000;
        // this.y += Math.random() * 10000 - 5000;
        // this.vx = this.random;
        // this.vy = this.random;
        // this.vx = this.random * this.power;
        // this.vy = this.random * this.power;
        this.vx = Math.random() * this.effect.width*3 - this.effect.width;
        this.vy = Math.random() * this.effect.height*3 - this.effect.height;
      }
    }

    class Effect {
      constructor(width, height) {
        this.width = width;
        this.height = height;
        this.ParticleArr = [];
        this.image = document.querySelector('.image');
        this.cx = this.width/2;
        this.cy = this.height/2;
        this.x = this.cx - this.image.width/2;
        this.y = this.cy - this.image.height/2;
        this.gap = GAP;
        this.spawnParticles(ctx);
        this.mouse = {
          radius: 100,
          x: undefined,
          y: undefined
        }
        document.addEventListener('mousemove', (e) => {
          this.mouse.x = e.clientX;
          this.mouse.y = e.clientY;
          console.log(this.mouse.x);
        });
        //* mobile event ---
        document.addEventListener('touchmove', (e) => {
          this.mouse.radius = 30;
          this.mouse.x = e.touches[0].clientX;
          this.mouse.y = e.touches[0].clientY;
        });
        document.addEventListener('touchend', () => {
          setTimeout(() => {
            this.mouse.x = -this.mouse.radius;
            this.mouse.y = -this.mouse.radius;
          }, 100);
        });
        //* fullSize ---
        // document.addEventListener('mouseleave', () => { 
        //   this.mouse.x = -this.mouse.radius;
        //   this.mouse.y = -this.mouse.radius;
        // });
      }
      spawnParticles(ctx) {
        // ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height); //* fullSize
        ctx.drawImage(this.image, this.x, this.y);
        const pixels = ctx.getImageData(0, 0, this.width, this.height).data;
        for (let y = 0; y < this.height; y += this.gap) {
          for (let x = 0; x < this.width; x += this.gap) {
            const index = (y * this.width + x) * 4;
            const r = pixels[index];
            const g = pixels[index+1];
            const b = pixels[index+2];
            const alpha = pixels[index+3];
            const color = `rgb(${r},${g},${b})`;
            if(alpha > 0) {
              this.ParticleArr.push(new Particle(this, x, y, color));
            }
          }
        }
      }
      draw(ctx) {
        this.ParticleArr.forEach(particle => { particle.draw(ctx) });
      }
      movement() {
        this.ParticleArr.forEach(particle => { particle.movement() });
      }
      warp() {
        this.ParticleArr.forEach(particle => { particle.warp() });
      }
      resize() {
        this.ParticleArr = [];
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        this.width = canvas.width;
        this.height = canvas.height;
        this.cx = this.width/2;
        this.cy = this.height/2;
        this.x = this.cx - this.image.width/2;
        this.y = this.cy - this.image.height/2;
        this.spawnParticles(ctx);
      }
    }

    const effect = new Effect(canvas.width, canvas.height);

    const warpBtn = document.getElementById('warp-button');
    warpBtn.addEventListener('click', () => {
      effect.warp();
      //* added for mobile ---
      effect.mouse.x = -effect.mouse.radius;
      effect.mouse.y = -effect.mouse.radius;
    });

    function animate() {
      // ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.movement();
      effect.draw(ctx);
      requestAnimationFrame(animate);
    } animate();

    window.addEventListener('resize', () => {
      effect.resize();
    });
  });

// ---------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------
//*                       --- IMAGE TO BASE64 TO IMAGE ---
// ---------------------------------------------------------------------------------


  // const image = document.querySelector('.image');
  // const cvs = document.querySelector('canvas');
  // const ctx = cvs.getContext('2d');
  // cvs.width = image.width;
  // cvs.height = image.height;
  // ctx.drawImage(image, 0, 0);
  // let base64String = [];
  // base64String.push(cvs.toDataURL("image/jpg"));
  // console.log(base64String);
  // cvs.remove();
  // image.remove();

  // function setBase64ToImage() {
  //   const newCvs = document.createElement('canvas');
  //   document.body.appendChild(newCvs);
  //   const newCtx = newCvs.getContext('2d');
  //   const img = new Image();
  //   img.src = base64String[0]; 
  //   newCvs.width = image.width;
  //   newCvs.height = image.height;
  //   img.onload = function() {
  //     newCtx.drawImage(img, 0, 0, newCvs.width/2, newCvs.height/2);
  //   }
  // } 
  // setBase64ToImage();



// -------------------------------------------------------------------------------------------










