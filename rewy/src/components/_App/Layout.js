import * as React from "react"
import AOS from "aos"
import GoTop from "./GoTop"
import WhatsAppFloating from "../Common/WhatsAppFloating"

const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <main>{children}</main>

      <WhatsAppFloating />
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  )
}

export default Layout
