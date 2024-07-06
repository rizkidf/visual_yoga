import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Order = () => {
    const [category, setCategory] = useState()
    const navigate = useNavigate()
    return (
        <section className="flex justify-center items-center">
            <div className="container flex flex-col justify-start items-start mt-9 space-y-5">
                <h1 className="text-3xl font-semibold">Cari Nama Model</h1>
                <form action="" className="w-[780px] flex flex-col space-y-5">
                    <div className="w-full grid grid-cols-2 bg-slate-400 rounded-xl">
                        <label htmlFor="" className="p-4 text-start rounded-s-xl">Kapasitas Mesin</label>
                        <input type="text" value={"150 - 250 cc"} className="bg-white p-4 text-end bg-inherit rounded-e-xl" disabled />
                    </div>
                    <div className="w-full grid grid-cols-2 bg-slate-400 rounded-xl ">
                        <label htmlFor="" className="p-4 text-start rounded-s-xl">Nama Model</label>
                        <select className="bg-white p-4 text-end bg-inherit rounded-e-xl" onChange={(e) => setCategory(e.target.value)}>
                            <option value="" selected={category === ""}> - </option>
                            <option value="yamaha" selected={category === "yamaha"}>Yamaha</option>
                            <option value="honda" selected={category === "honda"}>Honda</option>
                            <option value="kawasaki" selected={category === "kawasaki"}>Kawasaki</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-[#FF0000] hover:bg-blue-700 text-white rounded-xl w-[500px] font-bold py-2 px-4" onClick={() => navigate("/daftar-model?category=" + category + "")} disabled={category === "" || category === undefined}>Cari</button>
                </form>
            </div>
        </section>
    )
}

export default Order
