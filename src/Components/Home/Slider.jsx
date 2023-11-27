import SingleSlider from "./SingleSlider";

const Slider = ({ services }) => {
  const imageData = [
    {
      id: 1,
      next: 2,
      pre: 6,
      img: "https://img.freepik.com/premium-vector/modern-youtube-thumbnail-template_521579-673.jpg",
    },
    {
      id: 2,
      next: 3,
      pre: 1,
      img: "https://images.newindianexpress.com/expressdeals/assets/images/content/2023/07/04/original/Best-Wedding-Photographers_(1).jpg",
    },
    {
      id: 3,
      next: 4,
      pre: 2,
      img: "https://mig.cc/wp-content/uploads/2020/03/Video-Production-for-Events.png",
    },
    {
      id: 4,
      next: 5,
      pre: 3,
      img: "https://media.istockphoto.com/id/1479843529/vector/family-album-concept.jpg?s=1024x1024&w=is&k=20&c=xLCe_W5Bk-LsIZO_RiJdujK56YUm2QZm960uJJFyby8=",
    },
    {
      id: 5,
      next: 6,
      pre: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVMIR78AhgPBMnZ7brFoEFuBaYS2lHYdiIQ&usqp=CAU",
    },
    {
      id: 6,
      next: 1,
      pre: 5,
      img: "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/05/a6d705c5b50078f661bf87546b092c1c.jpg",
    },
  ];
  return (
    <div className="carousel w-full mt-10">
      {imageData.map((service, idx) => (
        <SingleSlider
          key={idx}
          id={service.id}
          img={service.img}
          next={service.next}
          prev={service.pre}
        ></SingleSlider>
      ))}
    </div>
  );
};
export default Slider;
