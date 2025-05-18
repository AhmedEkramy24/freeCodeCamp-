import MenuItem from "./MenuItem";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 p-2">
        <div className="container">
          <div className="logo">
            <h1 className="text-white text-2xl text-center">
              freeCodeCamp(<i className="fa-solid fa-fire-flame-curved"></i>)
            </h1>
          </div>
        </div>
      </nav>
      <div className="bg-slate-200 p-2">
        <div className="container">
          <ul className="flex space-x-2 flex-wrap">
            <MenuItem to={"accordian"} title={"Accordian"} />
            <MenuItem to={"randomcolorgenerator"} title={"Random Color Generator"} />
            <MenuItem to={"starrating"} title={"Star Rating"} />
            <MenuItem to={"imagesslider"} title={"Images Slider"} />
            <MenuItem to={"loadingmoreproducts"} title={"Loading More Products"} />
            <MenuItem to={"treeveiw"} title={"Tree Veiw"} />
            <MenuItem to={"qrgenerator"} title={"QR Generator"} />  
            <MenuItem to={"darkmodenative"} title={"Dark Mode Native"} />  
            <MenuItem to={"darkmodetailwind"} title={"Dark Mode Tailwind"} />  
            <MenuItem to={"scrollindecators"} title={"Scroll Indecator"} />  
            <MenuItem to={"navandtabs"} title={"Nav And Tabs"} />  
            <MenuItem to={"openmodal"} title={"Open Modal"} />  
          </ul>
        </div>
      </div>
    </>
  );
}
