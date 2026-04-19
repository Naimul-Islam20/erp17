"use client";

import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ecommerceSections = [
  {
    heading: "Catalog & storefront",
    subText:
      "List products with variants, images, categories, and SEO-friendly URLs—your storefront stays fast on ERP17 Cloud.",
    list: [
      "Unlimited categories, tags, and featured collections for campaigns.",
      "Stock levels per warehouse or outlet with low-stock alerts.",
      "Mobile-ready storefront theme you can brand with your logo and colors.",
    ],
    img: "/img/products/ecommerce/catalog.svg",
    imgRight: false,
  },
  {
    heading: "Cart, checkout & payments",
    subText:
      "Customers add to cart, apply coupons, and pay with the methods you enable—reconciliation stays inside ERP17.",
    list: [
      "Guest checkout or customer accounts with order history.",
      "Support for cards, mobile wallets, and bank transfer where available.",
      "Tax and shipping rules applied automatically at checkout.",
    ],
    img: "/img/products/ecommerce/checkout.svg",
    imgRight: true,
  },
  {
    heading: "Orders & fulfillment",
    subText:
      "From paid order to packed shipment—statuses, invoices, and delivery updates in one pipeline.",
    list: [
      "Pick/pack lists and partial shipments for multi-item orders.",
      "Email or SMS notifications when an order ships or is ready for pickup.",
      "Returns and refunds tracked against the original sale.",
    ],
    img: "/img/products/ecommerce/catalog.svg",
    imgRight: false,
  },
];

const EcommercePage = () => {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-orange-50 pt-10 md:pt-14 pb-10 md:pb-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-100/60 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        <div
          className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block"
          style={{
            backgroundImage: "radial-gradient(#ea580c 1.5px, transparent 1.5px)",
            backgroundSize: "15px 15px",
          }}
        />
        <div
          className="absolute bottom-20 right-1/2 w-48 h-48 opacity-10 hidden md:block"
          style={{
            backgroundImage: "radial-gradient(#ea580c 2px, transparent 2px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />

        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z"
              fill="url(#paint0_linear_eco)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_eco"
                x1="100"
                y1="0"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ea580c" />
                <stop offset="1" stopColor="#ea580c" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                ERP17 · eCommerce
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Sell online <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  with a store you control
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                Launch and scale your digital shop on ERP17: catalog, promotions, checkout, and post-purchase
                workflows—without juggling five different tools.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <button
                  type="button"
                  className="px-8 py-4 bg-orange-600 text-white font-bold rounded-2xl hover:bg-orange-700 shadow-xl shadow-orange-200 transition-all hover:scale-105 active:scale-95 text-sm md:text-base"
                >
                  Contact Us
                </button>
                <button
                  type="button"
                  className="px-8 py-4 bg-white text-orange-600 font-bold rounded-2xl border-2 border-orange-100 hover:bg-orange-50 transition-all text-sm md:text-base"
                >
                  View Demo
                </button>
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="relative z-10">
                <ProductImage
                  src="/img/products/ecommerce/hero.svg"
                  alt="eCommerce storefront illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container space-y-24 md:space-y-32">
          {ecommerceSections.map((sec, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div
                className={`flex-1 space-y-6 text-center md:text-left order-2 ${
                  sec.imgRight ? "md:order-1" : "md:order-2"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{sec.heading}</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{sec.subText}</p>
                <div className="grid gap-4 pt-2">
                  {sec.list.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-orange-50 p-1 rounded-full flex-shrink-0 mt-1">
                        <AiOutlineCheckCircle className="text-orange-600 w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <p className="text-gray-700 text-sm md:text-base font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`flex-1 w-full order-1 ${sec.imgRight ? "md:order-2" : "md:order-1"}`}>
                <div className="w-full">
                  <ProductImage
                    src={sec.img}
                    alt={sec.heading}
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default EcommercePage;
