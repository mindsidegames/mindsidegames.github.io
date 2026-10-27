import Title from '../modules/title'
import Footer from '../modules/footer'

export const useHeader= false
export const useFooter= true

export function Render(root) {
  const title= Title()
  root.appendChild(title.section)
  title.Awake()
}

export const GetTitle= ()=> null;