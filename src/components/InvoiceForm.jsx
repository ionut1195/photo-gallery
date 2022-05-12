import React from 'react'

export default function InvoiceForm() {
  return (
    <div className="container w-full grid max-w-[90vw] md:max-w-[60vw] lg:max-w-[50vw] xl:max-w-[40vw] p-6 mx-auto mt-4 bg-white rounded-lg shadow-lg">
  <form>
    <div className="mb-6 form-group">
      <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-hover-color focus:outline-none" id="exampleInput7"
        placeholder="Name" />
    </div>
    <div className="mb-6 form-group">
      <input type="email" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-hover-color focus:outline-none" id="exampleInput8"
        placeholder="Email address" />
    </div>
    <div className="mb-6 form-group">
      <textarea
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-hover-color focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Message"
    ></textarea>
    </div>
    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-border-dark
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-hover-color hover:shadow-lg
      focus:bg-hover-color focus:shadow-lg focus:outline-none focus:ring-0
      transition
      duration-150
      ease-in-out">Send</button>
  </form>
</div>
  )
}
