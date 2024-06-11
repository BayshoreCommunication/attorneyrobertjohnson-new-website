const SectionLayoutBlog = ({ children, img, bg }) => {
  return (
    <section
      className={`${img} ${bg} mx-auto flex justify-center items-center w-full `}
    >
      <div className='container mx-5 lg-mx-0'>{children}</div>
    </section>
  );
};

export default SectionLayoutBlog;
