import { Link } from "react-router-dom";



const Error = () => {
    return (
        <section className="rounded-full bg-cyan-400 border-r-4">
        <div className="container mx-auto px-5">
            <div className="flex flex-col justify-center items-center min-h-[calc(100vh-7rem)]">
                <div className="space-y-5 text-center">
                    <h2 className="text-3xl font-extrabold">Opps!</h2>
                    <p className="text-red-500 text-xl font-extrabold">404 not found</p>
                </div>
                <Link  className="font-serif text-3xl text-green-600 underline hover:text-amber-500" to="/">Go back to Home</Link>

            </div>
        </div>
    </section>
    );
};

export default Error;