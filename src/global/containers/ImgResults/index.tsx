type props = {
  children: React.ReactNode;
};
export const ImgResults = ({ children }: props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 justify-items-center pt-6 pb-5">
      {children}
    </div>
  );
};
