const Overlay = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
      {children}
    </div>
  );
};
export default Overlay;
