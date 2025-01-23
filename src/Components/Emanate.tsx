const EmanatingRing = () => {
  return (
    <>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={`emanate `}
            style={{ animationDelay: `${index * 0.05}s` }}
          ></div>
        ))}
    </>
  );
};

export default EmanatingRing;
