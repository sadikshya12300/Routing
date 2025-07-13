
// import { FaFacebook } from "react-icons/fa";
// import NewCard from "../components/newCard";
// import Modal from "../components/modal";
// const Contact = () => {
//     return(
// <>
// <h1>Contact Me</h1>
// <div>
// <FaFacebook className="text-5xl text-blue-500" />
// </div>
// <NewCard/>

// </>
//     )
// }
// export default Contact;


import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "../components/modal";
import NewCard from "../components/newCard";
// import SimpleForm from "../forms/simpleform";
import AddProductForm from "../forms/addForm";


function Contact() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {openModal ? (
        <Modal>
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircle
                onClick={() => setOpenModal(false)}
                className="text-red-500 text-xl cursor-pointer"
              />
            </div>

            {/* <h1>Form will opened here</h1> */}
            {/* <SimpleForm/> */}
            <AddProductForm/>
          </div>
        </Modal>
      ) : null}

      <div className="border-b-2 border-black">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-red-500 rounded-md p-2 m-4 text-white bold"
        >
          Add new product
        </button>
      </div>
      <NewCard />
    </div>
  );
}

export default Contact;