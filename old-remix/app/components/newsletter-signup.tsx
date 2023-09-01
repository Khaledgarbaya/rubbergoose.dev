export default function NewsletterSignup() {
  return (
    <div className="p-6 max-w-2xl  mx-auto  flex flex-col items-center">
      <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
        <img
          src="/images/envelop.png"
          alt="Envelope with a newsletter"
          className="h-full xl:w-full lg:w-1/2 w-full "
        />
      </div>
      <div className="w-full">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-amber-600 mb-4 text-center mt-4">
          Subscribe
        </h1>
        <p className="text-base leading-normal text-white text-center xl:text-left">
          Whether article spirits new her covered hastily sitting her. Money
          witty books nor son add.
        </p>
        <div className="mt-12">
          <form className="flex items-stretch">
            <input
              className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
              type="email"
              placeholder="Your Email"
            />
            <button className="w-32 rounded-l-none hover:bg-amber-600 bg-amber-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
