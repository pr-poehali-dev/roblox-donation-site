import TrollSite from "@/components/TrollSite";
import AnnoyingAds from "@/components/AnnoyingAds";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-yellow-400 to-blue-500 animate-pulse">
      <TrollSite />
      <AnnoyingAds />
    </div>
  );
};

export default Index;
