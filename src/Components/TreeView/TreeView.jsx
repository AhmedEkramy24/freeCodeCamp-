import menus from "./data";
import MenuList from "./MenuList";

export default function TreeVeiw() {
  let list = menus;
  return (
    <>
    <div className="relative">
      <div className="fixed h-screen w-56 bg-gray-800 text-white p-2 text-xl">
         <MenuList list={list} />
      </div>
    </div>
     
    </>
  );
}
