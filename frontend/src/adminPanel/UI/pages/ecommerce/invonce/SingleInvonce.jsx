const SingleInvonce = ({ data }) => {
  return (
    <>
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto ">
        <header className="mb-5 pb-5 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700">
          <h2 className="text-2xl font-semibold text-gray-800 ">Invoice</h2>
          <div className="inline-flex gap-x-2">
            <button
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => window.print()}
            >
              <svg
                className="shrink-0 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect width="12" height="8" x="6" y="14" />
              </svg>
              <p className="max-[600px]:hidden">Print</p>
            </button>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-3">
          <section>
            <div className="grid space-y-3">
              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Billed to:
                </dt>
                <dd className="text-gray-800 ">
                  <a
                    className="inline-flex items-center gap-x-1.5 text-blue-600 hover:underline dark:text-blue-500"
                    href="mailto:sara@site.com"
                  >
                    {data[0].email}
                  </a>
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Shipping details:
                </dt>
                <dd className="font-medium text-gray-800 ">
                  <span className="block font-semibold">{data[0].name}</span>
                  <address className="not-italic font-normal">
                    {data[0].address}
                  </address>
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Billing details:
                </dt>
                <dd className="font-medium text-gray-800 ">
                  <span className="block font-semibold">Start Library</span>
                  <address className="not-italic font-normal">
                    280 New River,
                    <br />
                    Ahemdabad, OR 45801,
                  </address>
                </dd>
              </dl>
              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Contact Number:
                </dt>
                <dd className="font-medium text-gray-800 ">
                  +91 {data[0].contact}
                </dd>
              </dl>
            </div>
          </section>

          <section>
            <div className="grid space-y-3">
              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Invoice number:
                </dt>
                <dd className="font-medium text-gray-800 ">{data[0]._id}</dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Currency:
                </dt>
                <dd className="font-medium text-gray-800 ">INR</dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Due date:
                </dt>
                <dd className="font-medium text-gray-800 ">{data[0].date}</dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Payment method:
                </dt>
                <dd className="font-medium text-gray-800 ">Cash On Dilivry</dd>
              </dl>
              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Pin Code:
                </dt>
                <dd className="font-medium text-gray-800 ">
                  {data[0].pinCode}
                </dd>
              </dl>
            </div>
          </section>
        </div>

        <section className="mt-6 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
          <div className="hidden sm:grid sm:grid-cols-5">
            <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
              Item
            </div>
            <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
              Qty
            </div>
            <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
              Rate
            </div>
            <div className="text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
              Amount
            </div>
          </div>

          <div className="hidden sm:block border-b border-gray-200 dark:border-neutral-700"></div>
          {data[0].arrayObj
            ? data[0].arrayObj.map((v, index) => (
                <SingleOrder key={index} order={v} />
              ))
            : null}

          <div className="sm:hidden border-b border-gray-200 dark:border-neutral-700"></div>

          <div className="sm:hidden border-b border-gray-200 dark:border-neutral-700"></div>
        </section>

        <section className="mt-8 flex sm:justify-end">
          <div className="w-full max-w-2xl sm:text-end space-y-2">
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
              <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                <dt className="col-span-3 text-gray-500 dark:text-neutral-500">
                  Items:
                </dt>
                <dd className="col-span-2 font-medium text-gray-800 ">
                  {data[0].items}
                </dd>
              </dl>

              <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                <dt className="col-span-3 text-gray-500 dark:text-neutral-500">
                  Included Tax:
                </dt>
                <dd className="col-span-2 font-medium text-gray-800 ">10%</dd>
              </dl>

              <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                <dt className="col-span-3 text-gray-500 dark:text-neutral-500">
                  Amount paid:
                </dt>
                <dd className="col-span-2 font-medium text-gray-800 ">
                  ₹{data[0].amount}
                </dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const SingleOrder = ({ order }) => {
  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        <div className="col-span-full sm:col-span-2">
          <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
            Item
          </h5>
          <p className="font-medium text-gray-800 ">{order.name}</p>
        </div>
        <div>
          <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
            Qty
          </h5>
          <p className="text-gray-800 ">{order.cartQuantity}</p>
        </div>
        <div>
          <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
            Rate
          </h5>
          <p className="text-gray-800 ">₹{order.sellPrice}</p>
        </div>
        <div>
          <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
            Amount
          </h5>
          <p className="sm:text-end text-gray-800 ">
            ₹{Number(order.sellPrice) * Number(order.cartQuantity)}
          </p>
        </div>
      </div>
    </>
  );
};
export default SingleInvonce;
