import React from "react";

const Article = () => {
  return (
    <div className="max-w-7xl">
      {/* <article className="bg-whit md:w-[70%] m-auto mx-2 sm:mx-8 border border-gray-300 rounded-lg overflow-hidden">
        <a href="/blogs/about/regenerative-agriculture" className="block">
          <img
            src="//primalpastures.com/cdn/shop/articles/PastureBird-3.jpg?v=1722896295&width=2000"
            alt="A close-up black and white image of a cow, symbolizing the quality and natural origin of grass-fed meats."
            srcSet="//primalpastures.com/cdn/shop/articles/PastureBird-3.jpg?v=1722896295&width=375 375w,
              //primalpastures.com/cdn/shop/articles/PastureBird-3.jpg?v=1722896295&width=550 550w,
              //primalpastures.com/cdn/shop/articles/PastureBird-3.jpg?v=1722896295&width=720 720w,
              //primalpastures.com/cdn/shop/articles/PastureBird-3.jpg?v=1722896295&width=990 990w,
              //primalpastures.com/cdn/shop/articles/PastureBird-3.jpg?v=1722896295&width=1200 1200w,
              //primalpastures.com/cdn/shop/articles/PastureBird-3.jpg?v=1722896295&width=1500 1500w,
              //primalpastures.com/cdn/shop/articles/PastureBird-3.jpg?v=1722896295&width=2000 2000w"
            sizes="(min-width: 768px) 80vw, (min-width: 900px) 900px, 100vw"
            className="w-full h-64 object-cover"
          />
        </a>
        <div className="p-4 bg-gray-200">
          <h2 className="text-xl font-bold mb-2">
            <a
              href="/blogs/about/regenerative-agriculture"
              className="text-gray-900 hover:underline"
            >
              Regenerative Agriculture
            </a>
          </h2>
          <p className="text-gray-700 mb-2">
            By moving animals around in a controlled manner, farmers and
            ranchers can help to promote the growth of healthy grasses...
          </p>
          <a
            href="/blogs/about/regenerative-agriculture"
            className="text-blue-600 hover:underline"
          >
            Read more
          </a>
        </div>
      </article> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-4 bg-gray-100">
        <article className="bg-white border border-gray-300 rounded-lg overflow-hidden">
          <a href="/blogs/about/our-chicken" className="block">
            <img
              src="//primalpastures.com/cdn/shop/articles/SPRING2022-4386.jpg?v=1688626525&width=2000"
              alt="Our Chicken"
             
              sizes="50vw"
              className="w-full h-64 object-cover"
            />
          </a>
          <div className="p-4 bg-gray-200">
            <h2 className="text-xl font-bold mb-2">
              <a
                href="/blogs/about/our-chicken"
                className="text-gray-900 hover:underline"
              >
                Our Chicken
              </a>
            </h2>
            <p className="text-gray-700 mb-2">
              Our poultry program has been the staple of Primal Pastures since
              2012, and something we're incredibly proud of. We offer chicken...
            </p>
          
          </div>
        </article>

        <article className="bg-white border border-gray-300 rounded-lg overflow-hidden">
          <a href="/blogs/about/our-beef" className="block">
            <img
              src="//primalpastures.com/cdn/shop/articles/Cow.jpg?v=1688628227&width=2000"
              alt="Our Beef"
             
              sizes="50vw"
              className="w-full h-64 object-cover"
            />
          </a>
          <div className="p-4 bg-gray-200">
            <h2 className="text-xl font-bold mb-2">
              <a
                href="/blogs/about/our-beef"
                className="text-gray-900 hover:underline"
              >
                Our Beef
              </a>
            </h2>
            <p className="text-gray-700 mb-2">
              We raise and source beef with an exacting standard that less than
              0.01% of American beef would qualify for. Pasture...
            </p>
            
          </div>
        </article>

        <article className="bg-white border border-gray-300 rounded-lg overflow-hidden">
          <a href="/blogs/about/farmer-rob" className="block">
            <img
              src="//primalpastures.com/cdn/shop/articles/Rob.jpg?v=1688629699&width=2000"
              alt="Farmer Rob"
             
              sizes="50vw"
              className="w-full h-64 object-cover"
            />
          </a>
          <div className="p-4 bg-gray-200">
            <h2 className="text-xl font-bold mb-2">
              <a
                href="/blogs/about/farmer-rob"
                className="text-gray-900 hover:underline"
              >
                Farmer Rob
              </a>
            </h2>
            <p className="text-gray-700 mb-2">
              Farmer Rob has the distinct vantage point of living two lives -
              one as the owner and co-founder of Primal...
            </p>
         
          </div>
        </article>

        
      </div>
    </div>
  );
};

export default Article;
