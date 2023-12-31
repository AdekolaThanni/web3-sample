import React from "react";

const useCursorEffect = () => {
  React.useEffect(() => {
    // dots is an array of Dot objects,
    // mouse is an object used to track the X and Y position
    // of the mouse, set with a mousemove event listener below
    let dots = [],
      mouse = {
        x: 0,
        y: 0,
      };

    // The Dot object used to scaffold the dots
    const Dot = function () {
      this.x = 0;
      this.y = 0;
      this.node = (function () {
        const n = document.createElement("div");
        n.className = "trail";
        document.body.appendChild(n);
        return n;
      })();
    };
    // The Dot.prototype.draw() method sets the position of
    // the object's <div> node
    Dot.prototype.draw = function () {
      this.node.style.left = this.x + "px";
      this.node.style.top = this.y + "px";
    };

    // Creates the Dot objects, populates the dots array
    for (let i = 0; i < 20; i++) {
      const d = new Dot();
      dots.push(d);
    }

    // This is the screen redraw function
    function draw() {
      // Make sure the mouse position is set everytime
      // draw() is called.
      let x = mouse.x,
        y = mouse.y;

      // This loop is where all the 90s magic happens
      dots.forEach(function (dot, index, dots) {
        let nextDot = dots[index + 1] || dots[0];

        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * 0.6;
        y += (nextDot.y - dot.y) * 0.6;
      });
    }

    document.addEventListener("mousemove", function (event) {
      //event.preventDefault();
      mouse.x = event.pageX;
      mouse.y = event.pageY;
    });

    // animate() calls draw() then recursively calls itself
    // everytime the screen repaints via requestAnimationFrame().
    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    // And get it started by calling animate().
    animate();
  }, []);
};

export default useCursorEffect;
