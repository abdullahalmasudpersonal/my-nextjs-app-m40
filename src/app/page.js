import Link from "next/link";

export const metadata = {
  title: "Home page",
  description: "This is my home page",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 30,
    },
  });
  const shoes = await res.json();
  /// console.log(data);
  throw new Error("Error from error page");

  return (
    <div className="text-center mb-4">
      <h1 className="text-4xl text-center bg-gray-400">
        My next js app home page m-40
      </h1>
      <div className="flex justify-between p-5">
        {shoes.slice(0, 4).map((shoe) => (
          <div key={shoe.id} className="card w-80 bg-base-100 shadow-xl ">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Buy Now</button>
                <button className="btn btn-outline btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/all-shoes">
        <button className="btn btn-outline btn-primary">All Shoes</button>
      </Link>
    </div>
  );
};

export default HomePage;
