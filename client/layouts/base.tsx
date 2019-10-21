const baseLayout = Page => {
    return () => (
      <div className="container">
        <Page />
      </div>
    );
  };
  
  export default baseLayout;