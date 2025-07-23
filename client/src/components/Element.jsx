import React from "react";

const Element = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <section 
        className="bg-cover bg-center py-20 relative" 
        style={{ backgroundImage: "url('img/breadcrumb_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#f9f8f3]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-black">Elements</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Text Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-2xl font-bold mb-4">Text Sample</h3>
          <p className="text-gray-700 leading-relaxed">
            Every avid independent filmmaker has <b>Bold</b> about making that{" "}
            <i>Italic</i> interest documentary, or short film to show off their
            creative prowess. Many have great ideas and want to "wow" the
            <sup>Superscript</sup> scene, or video renters with their big
            project. But once you have the<sub>Subscript</sub> "in the can" (no
            easy feat), how do you move from a <del>Strike</del> through of
            master DVDs with the <u>"Underline"</u> marked hand-written title
            inside a secondhand CD case, to a pile of cardboard boxes full of
            shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting
            on your doorstep? You need to create eye-popping artwork and have
            your project replicated. Using a reputable full service DVD
            Replication company like PacificDisc, Inc. to partner with is
            certainly a helpful option to ensure a professional end result, but
            to help with your DVD replication project, here are 4 easy steps to
            follow for good DVD replication results:
          </p>
        </div>
      </section>

      {/* Button Area */}
      <section className="py-20 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-2xl font-bold mb-4">Sample Buttons</h3>
          
          {/* Solid Buttons */}
          <div className="flex flex-wrap gap-4 mb-4">
            <button className="px-6 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
              Default
            </button>
            <button className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
              Primary
            </button>
            <button className="px-6 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition">
              Success
            </button>
            <button className="px-6 py-2 rounded bg-blue-400 text-white hover:bg-blue-500 transition">
              Info
            </button>
            <button className="px-6 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition">
              Warning
            </button>
            <button className="px-6 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition">
              Danger
            </button>
            <button className="px-6 py-2 rounded bg-transparent text-blue-600 hover:underline transition">
              Link
            </button>
            <button className="px-6 py-2 rounded bg-gray-200 text-gray-400 cursor-not-allowed">
              Disable
            </button>
          </div>
          
          {/* Outline Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="px-6 py-2 rounded border border-gray-300 text-gray-800 hover:bg-gray-100 transition">
              Default
            </button>
            <button className="px-6 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
              Primary
            </button>
            <button className="px-6 py-2 rounded border border-green-600 text-green-600 hover:bg-green-50 transition">
              Success
            </button>
            <button className="px-6 py-2 rounded border border-blue-400 text-blue-400 hover:bg-blue-50 transition">
              Info
            </button>
            <button className="px-6 py-2 rounded border border-yellow-500 text-yellow-500 hover:bg-yellow-50 transition">
              Warning
            </button>
            <button className="px-6 py-2 rounded border border-red-600 text-red-600 hover:bg-red-50 transition">
              Danger
            </button>
            <button className="px-6 py-2 rounded border border-transparent text-blue-600 hover:underline transition">
              Link
            </button>
            <button className="px-6 py-2 rounded border border-gray-300 text-gray-400 cursor-not-allowed">
              Disable
            </button>
          </div>
          
          {/* Rounded Solid Buttons */}
          <div className="flex flex-wrap gap-4 mb-4">
            <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
              Default
            </button>
            <button className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
              Primary
            </button>
            <button className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
              Success
            </button>
            <button className="px-6 py-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition">
              Info
            </button>
            <button className="px-6 py-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition">
              Warning
            </button>
            <button className="px-6 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition">
              Danger
            </button>
            <button className="px-6 py-2 rounded-full bg-transparent text-blue-600 hover:underline transition">
              Link
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-400 cursor-not-allowed">
              Disable
            </button>
          </div>
          
          {/* Rounded Outline Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100 transition">
              Default
            </button>
            <button className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
              Primary
            </button>
            <button className="px-6 py-2 rounded-full border border-green-600 text-green-600 hover:bg-green-50 transition">
              Success
            </button>
            <button className="px-6 py-2 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-50 transition">
              Info
            </button>
            <button className="px-6 py-2 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-50 transition">
              Warning
            </button>
            <button className="px-6 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-50 transition">
              Danger
            </button>
            <button className="px-6 py-2 rounded-full border border-transparent text-blue-600 hover:underline transition">
              Link
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-400 cursor-not-allowed">
              Disable
            </button>
          </div>
          
          {/* Button Sizes */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <button className="px-8 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 transition text-lg">
              Extra Large
            </button>
            <button className="px-6 py-3 rounded bg-green-600 text-white hover:bg-green-700 transition">
              Large
            </button>
            <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
              Default
            </button>
            <button className="px-4 py-1 rounded bg-green-600 text-white hover:bg-green-700 transition text-sm">
              Medium
            </button>
            <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition text-xs">
              Small
            </button>
          </div>
          
          {/* Outline Button Sizes */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-4 rounded border border-blue-600 text-blue-600 hover:bg-blue-50 transition text-lg">
              Extra Large
            </button>
            <button className="px-6 py-3 rounded border border-green-600 text-green-600 hover:bg-green-50 transition">
              Large
            </button>
            <button className="px-4 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
              Default
            </button>
            <button className="px-4 py-1 rounded border border-green-600 text-green-600 hover:bg-green-50 transition text-sm">
              Medium
            </button>
            <button className="px-3 py-1 rounded border border-blue-600 text-blue-600 hover:bg-blue-50 transition text-xs">
              Small
            </button>
          </div>
        </div>
      </section>

      {/* Align Area */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Left Aligned */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8">Left Aligned</h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <img
                  src="img/elements/d.jpg"
                  alt=""
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-700 leading-relaxed">
                  Recently, the US Federal government banned online casinos from
                  operating in America by making it illegal to transfer money to
                  them through any US bank or payment system. As a result of this
                  law, most of the popular online casino networks such as Party
                  Gaming and PlayTech left the United States. Overnight, online
                  casino players found themselves being chased by the Federal
                  government. But, after a fortnight, the online casino industry
                  came up with a solution and new online casinos started taking
                  root. These began to operate under a different business
                  umbrella, and by doing that, rendered the transfer of money to
                  and from them legal. A major part of this was enlisting
                  electronic banking systems that would accept this new
                  clarification and start doing business with me. Listed in this
                  article are the electronic banking systems that accept players
                  from the United States that wish to play in online casinos.
                </p>
              </div>
            </div>
          </div>

          {/* Right Aligned */}
          <div className="mb-20 text-right">
            <h3 className="text-2xl font-bold mb-8">Right Aligned</h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/4 order-2 md:order-1">
                <p className="text-gray-700 leading-relaxed">
                  Over time, even the most sophisticated, memory packed computer
                  can begin to run slow if we don't do something to prevent it.
                  The reason why has less to do with how computers are made and
                  how they age and more to do with the way we use them. You see,
                  all of the daily tasks that we do on our PC from running
                  programs to downloading and deleting software can make our
                  computer sluggish. To keep this from happening, you need to
                  understand the reasons why your PC is getting slower and do
                  something to keep your PC running at its best. You can do this
                  through regular maintenance and PC performance optimization
                  programs
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Before we discuss all of the things that could be affecting
                  your PC's performance, let's talk a little about what symptoms
                </p>
              </div>
              <div className="md:w-1/4 order-1 md:order-2">
                <img
                  src="img/elements/d.jpg"
                  alt=""
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>

          {/* Definition */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8">Definition</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Definition 01</h4>
                <p className="text-gray-700 leading-relaxed">
                  Recently, the US Federal government banned online casinos from
                  operating in America by making it illegal to transfer money to
                  them through any US bank or payment system. As a result of
                  this law, most of the popular online casino networks
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Definition 02</h4>
                <p className="text-gray-700 leading-relaxed">
                  Recently, the US Federal government banned online casinos from
                  operating in America by making it illegal to transfer money to
                  them through any US bank or payment system. As a result of
                  this law, most of the popular online casino networks
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Definition 03</h4>
                <p className="text-gray-700 leading-relaxed">
                  Recently, the US Federal government banned online casinos from
                  operating in America by making it illegal to transfer money to
                  them through any US bank or payment system. As a result of
                  this law, most of the popular online casino networks
                </p>
              </div>
            </div>
          </div>

          {/* Block Quotes */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8">Block Quotes</h3>
            <div className="bg-gray-100 p-8 border-l-4 border-blue-600">
              <p className="text-gray-700 italic leading-relaxed">
                "Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks such as Party
                Gaming and PlayTech left the United States. Overnight, online
                casino players found themselves being chased by the Federal
                government. But, after a fortnight, the online casino industry
                came up with a solution and new online casinos started taking
                root. These began to operate under a different business umbrella,
                and by doing that, rendered the transfer of money to and from
                them legal. A major part of this was enlisting electronic banking
                systems that would accept this new clarification and start doing
                business with me. Listed in this article are the electronic
                banking"
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8">Table</h3>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div className="grid grid-cols-4 gap-4 bg-gray-100 p-4 font-bold">
                  <div>#</div>
                  <div>Countries</div>
                  <div>Visits</div>
                  <div>Percentages</div>
                </div>
                
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200 items-center">
                    <div>0{item}</div>
                    <div className="flex items-center">
                      <img
                        src={`img/elements/f${item}.jpg`}
                        alt="flag"
                        className="w-6 h-4 mr-2"
                      />
                      Canada
                    </div>
                    <div>645032</div>
                    <div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            item === 1
                              ? "bg-blue-600"
                              : item === 2
                              ? "bg-green-600"
                              : item === 3
                              ? "bg-yellow-500"
                              : item === 4
                              ? "bg-red-600"
                              : item === 5
                              ? "bg-purple-600"
                              : item === 6
                              ? "bg-pink-600"
                              : item === 7
                              ? "bg-indigo-600"
                              : "bg-gray-600"
                          }`}
                          style={{
                            width: `${[80, 30, 55, 60, 40, 70, 30, 60][item - 1]}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8">Image Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="relative group overflow-hidden rounded">
                  <img
                    src={`img/elements/g${item}.jpg`}
                    alt={`Gallery ${item}`}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography and Lists */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Headers */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Typography</h3>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold">This is header 01</h1>
                  <h2 className="text-3xl font-bold">This is header 02</h2>
                  <h3 className="text-2xl font-bold">This is header 03</h3>
                  <h4 className="text-xl font-bold">This is header 04</h4>
                  <h5 className="text-lg font-bold">This is header 05</h5>
                  <h6 className="text-base font-bold">This is header 06</h6>
                </div>
              </div>

              {/* Unordered List */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Unordered List</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fta Keys</li>
                  <li>For Women Only Your Computer Usage</li>
                  <li>
                    Facts Why Inkjet Printing Is Very Appealing
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>
                        Addiction When Gambling Becomes
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                          <li>Protective Preventative Maintenance</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Dealing With Technical Support 10 Useful Tips</li>
                  <li>Make Myspace Your Best Designed Space</li>
                  <li>Cleaning And Organizing Your Computer</li>
                </ul>
              </div>

              {/* Ordered List */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Ordered List</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Fta Keys</li>
                  <li>For Women Only Your Computer Usage</li>
                  <li>
                    Facts Why Inkjet Printing Is Very Appealing
                    <ol className="list-[lower-alpha] pl-5 mt-2 space-y-2">
                      <li>
                        Addiction When Gambling Becomes
                        <ol className="list-[lower-roman] pl-5 mt-2 space-y-2">
                          <li>Protective Preventative Maintenance</li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li>Dealing With Technical Support 10 Useful Tips</li>
                  <li>Make Myspace Your Best Designed Space</li>
                  <li>Cleaning And Organizing Your Computer</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Form Elements */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Form Element</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <select className="w-full pl-10 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                      <option value="">City</option>
                      <option value="1">Dhaka</option>
                      <option value="1">Dilli</option>
                      <option value="1">Newyork</option>
                      <option value="1">Islamabad</option>
                    </select>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <select className="w-full pl-10 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                      <option value="">Country</option>
                      <option value="1">Bangladesh</option>
                      <option value="1">India</option>
                      <option value="1">England</option>
                      <option value="1">Srilanka</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Primary color"
                      className="w-full px-4 py-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Accent color"
                      className="w-full px-4 py-2 border border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Secondary color"
                      className="w-full px-4 py-2 border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </form>
              </div>

              {/* Switches and Checkboxes */}
              <div>
                <div className="space-y-8">
                  {/* Switches */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Switches</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <p>01. Sample Switch</p>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex justify-between items-center">
                        <p>02. Primary Color Switch</p>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked
                          />
                          <div className="w-11 h-6 bg-blue-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex justify-between items-center">
                        <p>03. Confirm Color Switch</p>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked
                          />
                          <div className="w-11 h-6 bg-green-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Selectboxes */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Selectboxes</h3>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                      <option value="">English</option>
                      <option value="1">Spanish</option>
                      <option value="1">Arabic</option>
                      <option value="1">Portuguise</option>
                      <option value="1">Bengali</option>
                    </select>
                  </div>

                  {/* Checkboxes */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Checkboxes</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <p>01. Sample Checkbox</p>
                        <input
                          type="checkbox"
                          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p>02. Primary Color Checkbox</p>
                        <input
                          type="checkbox"
                          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                          checked
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p>03. Confirm Color Checkbox</p>
                        <input
                          type="checkbox"
                          className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p>04. Disabled Checkbox</p>
                        <input
                          type="checkbox"
                          className="w-5 h-5 text-gray-400 rounded focus:ring-gray-500"
                          disabled
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p>05. Disabled Checkbox active</p>
                        <input
                          type="checkbox"
                          className="w-5 h-5 text-gray-400 rounded focus:ring-gray-500"
                          checked
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  {/* Radios */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Radios</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <p>01. Sample radio</p>
                        <input
                          type="radio"
                          name="radio-sample"
                          className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p>02. Primary Color radio</p>
                        <input
                          type="radio"
                          name="radio-sample"
                          className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                          checked
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p>03. Confirm Color radio</p>
                        <input
                          type="radio"
                          name="radio-sample"
                          className="w-5 h-5 text-green-600 focus:ring-green-500"
                          checked
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p>04. Disabled radio</p>
                        <input
                          type="radio"
                          name="radio-sample"
                          className="w-5 h-5 text-gray-400 focus:ring-gray-500"
                          disabled
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p>05. Disabled radio active</p>
                        <input
                          type="radio"
                          name="radio-sample"
                          className="w-5 h-5 text-gray-400 focus:ring-gray-500"
                          checked
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Element;