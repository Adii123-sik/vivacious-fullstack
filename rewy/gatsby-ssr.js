import React from "react"
import { RecoilRoot } from "recoil"
import { Toaster } from "react-hot-toast"

export const wrapRootElement = ({ element }) => (
  <RecoilRoot>
    {element}

    <div
      id="toast-root"
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 9999999,
        pointerEvents: "none",
      }}
    >
      <Toaster />
    </div>
  </RecoilRoot>
)

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" })
}
