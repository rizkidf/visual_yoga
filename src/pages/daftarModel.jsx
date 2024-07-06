import { useLocation, useNavigate } from "react-router-dom"
import { dataMotor } from "../utils/data-motor"

const DaftarModel = () => {
    const navigate = useNavigate()
    
    const location = new URLSearchParams(useLocation().search);
    const params = location.get("category")
    
    let dataFiltered = dataMotor.filter(motor => motor.category === params)
    return (
        <section className="flex justify-center items-center w-full mb-11">
            <div className="container flex flex-col justify-start items-start mt-9 space-y-5">
                <h1 className="text-3xl font-semibold">Daftar Model</h1>
                {dataFiltered.map((motor, index) => (
                    <div key={index} className="w-full border-t-2 border-black">
                        <h1 className="text-xl my-6">{motor.name}</h1>
                        <div className="grid grid-cols-3 w-full text-start items-center">
                            <div className="w-[200px] h-[200px] bg-slate-300 col-span-1">
                                <img src={motor.image} className="w-full h-full object-contain"/>
                            </div>
                            <div className="col-span-2 space-y-4">
                                <p>Tahun : {motor.tahun}</p>
                                <p>Warna : {motor.warna}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div>
                    <button className="bg-[#FF0000] hover:bg-blue-700 text-white rounded-xl w-[500px] font-bold py-2 px-4 mt-10" onClick={() => navigate("/order")}>Kembali</button>
                </div>
            </div>
        </section>
    )
}

export default DaftarModel