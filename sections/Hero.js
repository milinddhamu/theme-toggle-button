import Button from "../components/Button";

function Hero() {
  return (
    <section className="mt-16">
      <h1 className="text-4xl font-bold">Hello! I'm <span 
      className="font-serif dark:text-violet-800 text-6xl">Milind</span></h1>
      <h3 className="textx-4xl my-3">Im a web designer</h3>
      <p className="text-gray-700 mb-8 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type 
         specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.</p>
        <Button
        className='bg-violet-800 text-white px-6'> Contact me</Button>
    </section>
  )
}

export default Hero