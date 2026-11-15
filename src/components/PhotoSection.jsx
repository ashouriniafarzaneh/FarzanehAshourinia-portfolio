
function PhotoSection() {
  return (
    <section
      className="relative h-[85vh] min-h-[500px]
                 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/workspace.png')"
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}

export default PhotoSection;
