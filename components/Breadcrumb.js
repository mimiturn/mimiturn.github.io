const Breadcrumb = ({ text }) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h1>{text}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Breadcrumb;
