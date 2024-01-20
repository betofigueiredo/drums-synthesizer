const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="pb-20 pt-20">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {title}
      </h3>
    </div>
  );
};

export default PageHeader;
