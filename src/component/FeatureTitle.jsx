import {useRef,useEffect} from 'react'
import { useInView } from 'framer-motion'

const FeatureTitle = ({content,onInView}) => {
    const ref = useRef(null)
    const isInView = useInView(ref,{margin:'-50% 0px -50% 0px'})
    useEffect(() => {
      if (isInView&&content) {
        onInView(content)
      }
    }, [isInView])
    
  return (
    <p ref={ref} className={`md:text-5xl text-3xl font-Leckerli-One text-right py-24 lg:py-10 ease-in-out duration-100 font-outline-2 ${isInView?'text-warning-content':'text-transparent'}`}>{content}</p>

  )
}

export default FeatureTitle