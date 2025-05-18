import { useState } from "react";
import Modal from "./Modal";

export default function OpenModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="container">
        <h1 className="text-center text-3xl my-3">
          Click To Open My Awesome Modal
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="text-lg bg-gray-800 text-white px-3 py-1 rounded-md mx-auto block"
        >
          Open Modal
        </button>
      </div>
      {showModal && (
        <Modal
          header={"Awesome Modal !"}
          body={"this is my awesome modal"}
          footer={"created by ek"}
          close={() => setShowModal(false)}
        />
      )}
    </>
  );
}
