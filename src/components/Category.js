const Category = (category) => {
  let categoryName = category;
  let animalPic;
  let categoryDescription;
  if (categoryName === "events") {
    animalPic = "bird home-category-box";
    categoryDescription = "See all upcoming events. ";
  }

  return (
    <div>
      <h3>{categoryName}</h3>
      <p></p>
    </div>
  );
};

export default Category;
