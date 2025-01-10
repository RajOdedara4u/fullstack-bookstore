import ShowBook from "./ShowBook";
import products from "./populorSalesData";
const populorSales = () => {
  return (
    <>
      <div className="flex flex-col bg-[#1c213e] md:pb-20 pb-10">
        <h1 className="text-2xl sm:text-4xl font-bold font-serif pb-2 sm:pb-5 px-2 sm:px-4 text-[#8b91bf]">
          Populor Sale's
        </h1>
        <div className="pt-3 w-full flex gap-6 flex-wrap justify-center items-center">
          {products.map((obj, index) => (
            <ShowBook
              key={index}
              name={obj.name}
              image={obj.image}
              realPrice={obj.realPrice}
              author={obj.author}
              year={obj.year}
              discount={obj.discount}
              rating={obj.rating}
              sellPrice={obj.sellPrice}
              catagory={obj.catagory}
              desc={obj.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default populorSales;
