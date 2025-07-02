import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import PaymentMethods from "@/components/PaymentMethods";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <ProductCatalog />
      <PaymentMethods />
    </div>
  );
};

export default Index;
