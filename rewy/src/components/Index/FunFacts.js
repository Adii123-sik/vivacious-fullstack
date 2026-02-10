import React, { useEffect, useState } from "react"
import icon1 from "../../images/funfacts/fun-icon1.png"
import icon2 from "../../images/funfacts/fun-icon2.png"
import icon3 from "../../images/funfacts/fun-icon3.png"
import icon4 from "../../images/funfacts/fun-icon4.png"
import { getSettings } from "../../utils/api"

const FunFacts = () => {
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings()
        setSettings(data)
      } catch (error) {
        console.error("❌ SETTINGS FETCH ERROR:", error)
      }
    }

    fetchSettings()
  }, [])

  if (!settings) return null

  const counters = [
    {
      icon: icon1,
      number: settings.point1,
      label: settings.value1,
    },
    {
      icon: icon2,
      number: settings.point2,
      label: settings.value2,
    },
    {
      icon: icon3,
      number: settings.point3,
      label: settings.value3,
    },
    {
      icon: icon4,
      number: "24/7",
      label: "Support Available",
    },
  ].filter(item => item.number && item.label)

  return (
    <section className="funfacts-area bg-image pt-100 pb-70">
      <div className="container">
        <div className="row">
          {counters.map((item, index) => (
            <div key={index} className="col-lg-3 col-sm-3 col-6">
              <div className="single-funfacts-item">
                <div className="icon">
                  <img src={item.icon} alt="funfact" />
                </div>
                <h3>{item.number}+</h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FunFacts
