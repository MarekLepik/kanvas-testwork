//This component is used for grid of products

export const Products = (props) => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:gap-10 gap-6">
      {props.products.map((post) => {
        return post.state === "Current bid" ? (
          <div className="bg-white pt-12 pb-8 pl-4 pr-4 shadow-md rounded-xl">
            <div className="mx-auto space-y-4" key={post.id}>
              <h2 className="bg-kanvas-blue rounded-2xl text-center text-white w-1/2 mx-auto -mt-14 mb-9">
                {post.bidtime}
              </h2>
              <img className="mx-auto" src={post.img} alt="" />
              <h2>{post.artistname}</h2>
              <h2>{post.artworkname}</h2>
              <p className="text-gray-300">{post.state}</p>
              <h1 className="text-kanvas-blue text-xl font-bold">
                {`${post.value}` + `${post.currency}`}
              </h1>
            </div>
          </div>
        ) : (
          <div className="bg-white pt-12 pb-8 pl-4 pr-4 shadow-md rounded-xl">
            <div className="mx-auto space-y-4" key={post.id}>
              <img className="mx-auto" src={post.img} alt="" />
              <h2>{post.artistname}</h2>
              <h2>{post.artworkname}</h2>
              <p className="text-gray-300">{post.state}</p>
              <h1 className="text-kanvas-blue text-xl font-bold">
                {`${post.value}` + `${post.currency}`}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};
