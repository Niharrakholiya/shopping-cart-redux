import { useAppSelector,useAppDispatch } from "@/redux/hooks";
import { PacmanLoader } from "react-spinners";
import { useEffect } from "react";
import { fetchProducts } from "../redux/slices/productslice";
import HeroSection from "@/components/HeroSection";
import { Toaster } from "sonner";

function HomePage(){
    const dispatch = useAppDispatch();
    const {  status, error } = useAppSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === "loading") {
        return (
            <div className="flex justify-center items-center h-screen w-screen dark:bg-gray-900">
                <PacmanLoader color="#4A148C" />
            </div>
        );
    }

    if (status === "failed") {
        return <p className="text-center text-red-600 dark:text-red-400">Error: {error}</p>;
    }

    return (
        <main className="flex-grow bg-slate-50 dark:bg-gray-900 p-4">
            <Toaster position="top-right" richColors />
            <HeroSection/>
        </main>
    );
};

export default HomePage;
