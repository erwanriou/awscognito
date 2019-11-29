import { useMediaQuery } from "react-responsive"

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 })
  return isDesktop ? children : null
}
export const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({ minWidth: 1000, maxWidth: 1200 })
  return isLaptop ? children : null
}
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 450, maxWidth: 1000 })
  return isTablet ? children : null
}
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 450 })
  return isMobile ? children : null
}
export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 450 })
  return isNotMobile ? children : null
}
