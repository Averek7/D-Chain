import Manufacturer from "@/components/Manufacturer";
import Supplier from "@/components/Supplier";
import Retailer from "@/components/Retailer";
import { useGlobalContext } from "@/context/GlobalContext";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const { userRole } = useGlobalContext();

  return (
    <>
      <div className="flex flex-col lg:flex-row text-white w-full overflow-hidden relative overflow-x-hidden ">
        <div className="flex flex-1 flex-col pt-0 md:pt-0">
          {userRole === "Manufacturer" && (
            <Manufacturer />
          )}

          {userRole === "Supplier" && (
            <Supplier />
          )}

          {userRole === "Retailer" && (
            <Retailer />
          )}

          {userRole === "" && (
            <Dashboard />
          )}
        </div>
      </div>
    </>
  );
}
