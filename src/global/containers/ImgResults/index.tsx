type props = {
  children: React.ReactNode;
};
export const ImgResults = ({ children }: props) => {
  return <div className="flex flex-wrap gap-5  py-5">{children}</div>;
};
