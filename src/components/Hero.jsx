
export const Hero = ({ title, heightSize }) => {

  const height = heightSize ? `h-[${heightSize}px]` : 'h-screen';


  return (
    <section className={`${height} w-full bg-background-hero bg-no-repeat bg-cover`} >
      <div className="bg-black/30 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-7xl text-center font-extrabold">{title}</h1>
      </div>
    </section>
  )
}
