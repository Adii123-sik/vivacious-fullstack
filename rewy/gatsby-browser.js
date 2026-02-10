import React from "react";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil"

import './src/styles/css/bootstrap.min.css';
import "./src/styles/css/animate.min.css"
import "./src/styles/css/boxicons.min.css"
import "./src/styles/css/flaticon.css"
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-18-image-lightbox/style.css';
import "/node_modules/aos/dist/aos.css";
import "swiper/css"
import "swiper/css/bundle"

// Global style
import "./src/styles/css/style.css" 
import "./src/styles/css/responsive.css" 

export const wrapRootElement = ({ element }) => (
  <RecoilRoot>
    {element}

    {/* 🔥 CUSTOM TOAST ROOT (CSS-PROOF) */}
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
