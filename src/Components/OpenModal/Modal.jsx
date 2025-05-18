import "./modal.css"

export default function Modal({ header, body, footer , close }) {
  return (
    <div className="fixed bg-black bg-opacity-40 flex justify-center items-center top-0 left-0 w-full h-full">
      <div className="sm:w-2/3 md:w-1/2 lg:w-1/3 modal-content font-semibold text-center bg-white rounded-lg shadow-lg p-3 py-5">
        <div className="flex justify-end">
          <i onClick={close} className="fas fa-xmark-circle text-red-700 fa-xl cursor-pointer"></i>
        </div>
        <header className="my-2 text-2xl">{header}</header>
        <div className="body my-2 ">{body}</div>
        <footer className="my-2 text-lg ">{footer}</footer>
      </div>
    </div>
  );
}
