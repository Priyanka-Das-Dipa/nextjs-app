import Footer from "@/components/shared/Footer";

const AdminLayOut = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default AdminLayOut;
