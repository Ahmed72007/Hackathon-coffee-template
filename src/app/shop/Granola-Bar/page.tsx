export const Demo_page = async () => {
    return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Granola-Bar</h1>
      <p className="text-xl text-gray-600">Price:$3</p>
      <p className="text-md text-gray-500">Category: Snacks</p>
      <p className="mt-4">A healthy and delicious granola bar packed with nuts and honey.</p>

      {/* Displaying product image if available */}
     <img src="blog4.png" alt="product" />
     <button className="text-white bg-red-600 px-2 py-2">Order Now</button>
    </main>
  );
};
export default Demo_page