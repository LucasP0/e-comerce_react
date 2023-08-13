interface props {
  children: JSX.Element | JSX.Element[]
}


export const BackgroundComponent:React.FC<props> = ({ children }) => {
  return(
    <div className='bg-pd flex flex-col font-inter z-'>
      {children}
    </div>
  )
}