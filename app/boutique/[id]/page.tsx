import ProductClient from "./ProductClient";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = parseInt(id, 10);

  return <ProductClient id={productId} />;
}
