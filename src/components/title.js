export function SetupReactive3D(element, xfactor, yfactor) {
  const styles= element.style
  const UpdatePosition = (x,y) => {
    const 
      box= element.getBoundingClientRect(),
      viewport= root.getBoundingClientRect(),
      fw= 1.0 / viewport.width,
      fh= 1.0 / viewport.height,
      cx= (box.x + box.width * .5) * fw,
      cy= (box.y + box.height * .5) * fh,
      musx= x*fw - cx,
      musy= y*fh - cy,
      rx= musy * yfactor,
      ry= musx * xfactor

    styles.setProperty('--rxd', rx + "deg")
    styles.setProperty('--ryd', ry + "deg")
  }

  function _Update(e) { UpdatePosition(e.clientX, e.clientY) }

  document.addEventListener('mousemove', _Update)
  UpdatePosition(0,0)

  return { 
    Dispose: ()=> document.removeEventListener('mousemove', _Update)
  }
}

export function SetupWaterPanner(element, interval, { ref }) {
  const 
    pxh= 40,
    style= element.style
  let box, factor, value= 0;

  function _Clear() { if(ref != null) clearInterval(ref) }

  _Clear()
  ref= setInterval(()=>{ 
    box= element.getBoundingClientRect()
    factor= box.height / pxh
    value= (value - factor) % (factor*pxh)
    style.setProperty("--wy", value + "px") 
  }, interval)
  style.setProperty("--wy", "0px");

  return {
    Dispose: _Clear
  }
}
