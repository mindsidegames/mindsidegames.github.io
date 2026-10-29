import CreateTitle from '../modules/title'

export function CreatePage() {
  const master= CreateTitle()
  return {
    useHeader: false,
    element: master.element,
    Start: ()=> master.Start(),
    Dispose: ()=> master.Dispose()
  }
}
