import Image from "next/image";
import axios from "axios";

export default function Home() {
  const Data1 = "Bar";
  const Data2 = "Brasserie";
  const Data3 = "Cave";
  const Data4 = "⚽️ Sportif";
  const Data5 = "🌊 Vue mer";
  const Data6 = "🔥 Au chaud";

  const Title = "L'arena Brasserie";
  const Description = "Brasserie";

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.brest.bar/items/bars');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchData();

  return (
    <main>
      <header className=" fixed z-50 w-full flex items-center justify-center bg-white shadow-md">
        <div className="w-full  ">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-black text-2xl">
                🍺 Brest
                <span className="font-bold text-pink-700">
                  Bar
                </span>
              </h1>
              <a className="bg-pink-700 rounded-full px-4 py-2 cursor-pointer">
                🙋 Faire une demande
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="flex bg-gray-100 shadow-xl h-screen pt-20">
        <section className="w-96 h-full p-6  border-2   bg-white">
          <h1 className="font-bold text-2xl mb-10 text-black ">
            Trouvez le bar qu'il vous faut
            <span className="bg-clip-text text-transparent text-pink-700">
              &nbsp;selon votre humeur
            </span>
          </h1>
          <div className="py-10">
            <h2 className="font-bold text-xl mb-2 text-black">
              Où boire à Brest ?
            </h2>
            <div className="flex w-full items-center justify-between max-w-sm ">
              <div className="flex-col flex items-center cursor-pointer hover:bg-slate-100 p-2 rounded-xl border-2 border-gray-200">
                <div className=" rounded-xl p-4 text-3xl">🍹</div>
                <span className="font-bold text-black">{Data1}</span>
              </div>
              <div className="flex-col flex items-center cursor-pointer hover:bg-slate-100 p-2 rounded-xl border-2 border-gray-200 ">
                <div className=" rounded-xl p-4 text-3xl">🍺</div>
                <span className="font-bold text-black">{Data2}</span>
              </div>
              <div className="flex-col flex items-center cursor-pointer hover:bg-slate-100 p-2 rounded-xl border-2 border-gray-200 ">
                <div className=" rounded-xl p-4 text-3xl">🍷</div>
                <span className="font-bold text-black">{Data3}</span>
              </div>
            </div>
          </div>

          <div className="flex font-bold align-center justify-between ">
            <div className="text-black text-xl">Explorer</div>
            <a className="bg-pink-700 rounded-full px-4 py-2 cursor-pointer">
              Filter ✍️
            </a>
          </div>

          <div className="max-h-96 overflow-y-scroll">
            <div className="bg-gray-900 rounded-xl flex p-6 mt-2 justify-between">
              <div>
                <h1 className="text-l">{Description}</h1>
                <h1 className="text-2xl font-bold">{Title}</h1>
                <div className="flex flex-wrap">
                  <span className="bg-blue-400 p-2 rounded-full text-xs mt-2 mr-2">
                    {Data4}
                  </span>
                  <span className="bg-orange-400 p-2 rounded-full text-xs mt-2 mr-2">
                    {Data5}
                  </span>
                  <span className="bg-yellow-400 p-2 rounded-full text-xs mt-2 mr-2">
                    {Data6}
                  </span>
                </div>
              </div>
              <a className="flex justify-center items-center bg-white p-2 rounded-full cursor-pointer h-16 w-16 ">
                👀
              </a>
            </div>
            <div className="bg-gray-900 rounded-xl flex p-6 mt-2 justify-between">
              <div>
                <h1 className="text-l">{Description}</h1>
                <h1 className="text-2xl font-bold">{Title}</h1>
                <div className="flex flex-wrap">
                  <span className="bg-blue-400 p-2 rounded-full text-xs mt-2 mr-2">
                    {Data4}
                  </span>
                  <span className="bg-orange-400 p-2 rounded-full text-xs mt-2 mr-2">
                    {Data5}
                  </span>
                  <span className="bg-yellow-400 p-2 rounded-full text-xs mt-2 mr-2">
                    {Data6}
                  </span>
                </div>
              </div>
              <a className="flex justify-center items-center bg-white p-2 rounded-full cursor-pointer h-16 w-16 ">
                👀
              </a>
            </div>
            <div className="bg-gray-900 rounded-xl flex p-6 mt-2 justify-between">
              <div>
                <h1 className="text-l">{Description}</h1>
                <h1 className="text-2xl font-bold">{Title}</h1>
                <div className="flex flex-wrap">
                  <span className="bg-blue-400 p-2 rounded-full text-xs mt-2 mr-2">
                    {Data4}
                  </span>
                  <span className="bg-orange-400 p-2 rounded-full text-xs mt-2 mr-2">
                    {Data5}
                  </span>
                  <span className="bg-yellow-400 p-2 rounded-full text-xs mt-2 mr-2">
                    {Data6}
                  </span>
                </div>
              </div>
              <a className="flex justify-center items-center bg-white p-2 rounded-full cursor-pointer h-16 w-16 ">
                👀
              </a>
            </div>
            <div className="bg-gray-900 rounded-xl flex p-6 mt-2 justify-between">
              <div>
                <h1 className="text-l">{Description}</h1>
                <h1 className="text-2xl font-bold">{Title}</h1>
                <div className="flex flex-wrap">
                  <span className="bg-blue-400 p-2 rounded-full text-xs mt-2 mr-2">
                    {Data4}
                  </span>
                  <span className="bg-orange-400 p-2 rounded-full text-xs mt-2 mr-2">
                    {Data5}
                  </span>
                  <span className="bg-yellow-400 p-2 rounded-full text-xs mt-2 mr-2">
                    {Data6}
                  </span>
                </div>
              </div>
              <a className="flex justify-center items-center bg-white p-2 rounded-full cursor-pointer h-16 w-16 ">
                👀
              </a>
            </div>

            
          </div>
        </section>
        <section className="w-3/4 h-full bg-gray-100 rounded-md">Maps</section>
      </section>
    </main>
  );
}
