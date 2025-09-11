export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
}
