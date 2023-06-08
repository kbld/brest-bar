import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const Title = "L'arena Brasserie";
  const Description = "Brasserie";



  return (
    <main className=" ">
      <Head>
        <title>My page title</title>
      </Head>
      <header className=" z-50 w-full flex items-center justify-center bg-white shadow-md">
        <div className="w-full  ">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-black text-2xl">
                🍺 Brest{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-t text-pink-700">
                  Bar
                </span>
              </h1>

              <a className="bg-pink-700 rounded-md p-2">🙋 Faire une demande</a>
            </div>
          </div>
        </div>
      </header>
      <section className="flex bg-white shadow-xl h-screen">
        <section className="w-96 h-full p-10 shadow-xl  border-2 border-gray-100 rounded-xl">
          <h1 className="font-bold text-2xl mb-10 text-black ">
            Trouvez le bar qu'il vous faut
            <span className="bg-clip-text text-transparent text-pink-700">
              <br></br>selon votre humeur
            </span>
          </h1>
          <h2 className="font-bold text-xl mb-2 text-black">
            Où boire à Brest ?
          </h2>
          <div className="flex w-full items-center justify-between max-w-sm">
            <div className="flex-col flex items-center cursor-pointer hover:bg-slate-100 p-2 rounded-md">
              <div className="bg-white rounded-xl p-6 text-4xl shadow-xl">
                🍹
              </div>
              <span className="font-bold text-black">Bar</span>
            </div>
            <div className="flex-col flex items-center cursor-pointer hover:bg-slate-100 p-2 rounded-md ">
              <div className="bg-white rounded-xl p-6 text-4xl shadow-xl">
                🍺
              </div>
              <span className="font-bold text-black">Brasserie</span>
            </div>
            <div className="flex-col flex items-center cursor-pointer hover:bg-slate-100 p-2 rounded-md">
              <div className="bg-white rounded-xl p-6 text-4xl shadow-xl">
                🍷
              </div>
              <span className="font-bold text-black">Cave</span>
            </div>
          </div>
          <div className="flex font-bold align-center justify-between cen pt-5">
            <div className="text-black">Explorer</div>
            <a className="bg-pink-700 rounded-md p-2">Filter ✍️</a>
          </div>
          <div className="bg-gray-900 rounded-xl">
          <h1>{Description}</h1>
            <h1>{Title}</h1>
          </div>
        </section>
        <section className="w-3/4 h-full bg-red-500 rounded-md"></section>
      </section>
    </main>
  );
}
