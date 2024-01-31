import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useState} from "react";



function Display({ ModalOpen, CloseModal ,handleModalData}) {

    if (!ModalOpen) {
        return null;
    }

    const [values, setValues] = useState({
        title: "",
        description: "",
        IsChecked:false
      });
    const handleValues = (e) => {
        if (e.target.name === "title") {
          setValues((prev) => ({ ...prev, title: e.target.value }));
        } else if (e.target.name === "description") {
          setValues((prev) => ({ ...prev, description: e.target.value }));
        }
        console.log(values,"values")
        
      };

      const handleModal = (e) => {

        console.log(values,"get")
        handleModalData(values)
        CloseModal(true)
      }
   
    return (
        <div >

            <div className={`"flex flex-col justify-center items-center gap-[20px] " `}>
                <div className=" flex  absolute w-[100%]  top-0 left-[0%]  justify-center align-center m-auto h-[100%] bg-[#252525B2]"
                 
                >
                    <div className="popup w-[600px] h-[225px] bg-[#fff] m-[auto]  rounded-[10px] flex flex-col  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); shadow-xl">

                        <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-[20px] justify-center items-center m-auto">
                            <form onSubmit={(e)=>handleModal(e)} className="flex flex-col gap-[20px]" >
                                <div className="flex flex-col gap-[10px]">

                                    <Input
                                        placeholder="Title"
                                        type="text"
                                        name="title"
                                      className=" !w-[400px] !h-[20px]"
                                     onChange={handleValues}
                                    />
                                    <Input
                                        placeholder="Description"
                                        type="text"
                                        name="description"
                                        className=" !w-[400px] !h-[20px]"
                                        onChange={handleValues}
                                    />

                                </div>
                                <div>
                                    <Button btn_type="submit" btn_name="Add" className="bg-[#24243E] w-[80px] h-[43px] border-5 text-[#FFF] rounded-md"  />
                                </div>





                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Display;
