const Homepage = () => {
  const image =
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <div className="display-4">
      <div>
        heeeellooooo!
        <img src={image} alt="shop image" />
      </div>
      Yes! We are open!
    </div>
  );
};

export default Homepage;
