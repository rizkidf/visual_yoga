import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <section className="flex justify-center items-center">
        <div className="container flex flex-col justify-start items-start mt-9 space-y-5">
            <h1 className="text-3xl font-semibold">Produk</h1>
            <button className="bg-[#FF0000] hover:bg-blue-700 text-white rounded-xl w-[500px] font-bold py-2 px-4 my-4" onClick={()=>navigate("/order")}>Sepeda Motor</button>
        </div>
    </section>
    )
}

export default Home