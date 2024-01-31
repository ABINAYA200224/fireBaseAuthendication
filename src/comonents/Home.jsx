import React, { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from 'firebase/firestore';
import { databse } from "../firebase";
import Input from "./Input";
function Page() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {

    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }




  const handleModalData = async (data) => {
    await addDoc(collection(databse, "employee"), data)

    getTitleDescription()
  }







  const [titleName, setTitlename] = useState([])


  const getTitleDescription = async () => {
    const q = query(collection(databse, "employee"));
    console.log(q, "get")
    const querysnapshot = await getDocs(q);
    console.log(querysnapshot, ":querysnapshot")
    let titleNames = []
    querysnapshot.forEach((doc) => {
      console.log(doc.data(), "doc")
      titleNames.push({ ...doc.data(), id: doc.id })

    });
    setTitlename(titleNames)
  }
  useEffect(() => {
    getTitleDescription()
  }, [])

  const deleteEmploye = async (id) => {
    await deleteDoc(doc(databse, "employee", id))
    getTitleDescription()
  }
  const handleCheckBox = async (data) => {
  console.log(data,"wdgy")
    await updateDoc(doc(databse, "employee", data.id), { ...data, IsChecked: true })
    getTitleDescription()

  }



  return (
    <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-[30px]">
      <div onClick={(e) => e.stopPropagation()} >
        <div className="flex justify-center">
          <Button btn_name="Add todo" onClick={openModal} ></Button>

        </div>


        <Display ModalOpen={showModal} CloseModal={closeModal} handleModalData={handleModalData} />

      </div>
      <div className="">
        <div className=" grid grid-cols-3 grid-rows-3 gap-[40px]">



          {
            titleName.map((TitleName) => {
              return (<div key={TitleName.id} >
                <div className={`" w-[300px] h-[100px] box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) shadow-md bg-[#FFF] rounded-lg 
                ${TitleName.IsChecked==true?"cursor-no-drop border-2 border-[#575DFB] bg-[#D3D3D3] text-[#25252580]":" "}
                "`} >


                  <div className=" flex justify-end items-end mr-[5px]">
                    <button className={`"text-[25px] text-red-700 rounded  ${TitleName.IsChecked==true?"hover:z-[20] ":" "}`}  onClick={() => deleteEmploye(TitleName.id)}>x</button>
                  </div>




                  <div className="flex flex-col">
                    <div className="flex ml-[10px]">
                      <div className="w-[30px] h-[30px] flex justify-center items-center">
                        <Input type="checkbox" name="checkbox" 
                          checked={TitleName.IsChecked} onChange={() => handleCheckBox(TitleName)} />
                      </div >
                      <div className="flex justify-center items-center">
                        <h1 className="text-start font-bold text-[15px] px-[10px]">{TitleName.title}</h1>
                      </div>
                    </div>

                    <div className="flex ml-[10px]">
                      <h1 className="text-start text-[13px] font-bold px-[10px]">{TitleName.description}</h1>
                    </div>
                  </div>
                </div>






              </div>
              )
            })
          }

        </div>
      </div>
    </div >


  );
}

export default Page;
