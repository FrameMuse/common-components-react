import "./Loader.scss"

import { classMerge } from "utils"

interface LoaderProps {
  className?: string
}

function Loader(props: LoaderProps) {
  return (
    <div className={classMerge("loader", props.className)} />
  )
}

export default Loader
