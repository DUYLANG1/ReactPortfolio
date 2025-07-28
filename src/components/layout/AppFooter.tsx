const AppFooter = () => {
  return (
    <div className="text-center my-3">
      {new Date().getFullYear()} - Striving for growth{" "}
      <span
        style={{
          color: "#e25555",
        }}
      >
        ♥
      </span>
    </div>
  );
};

export default AppFooter;
