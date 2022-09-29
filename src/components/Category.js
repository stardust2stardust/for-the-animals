const Category = ({ category }) => {
  let categoryName = category.toUpperCase();
  let animalImgClass = "home-category-box";
  let categoryDescription;
  if (category === "events") {
    categoryDescription = "See all upcoming events.";
    animalImgClass += " bird-pic";
  } else if (category === "news") {
    categoryDescription = "Keep up on the latest animal-related news...";
    animalImgClass += " cat-paw-pic";
  } else if (category === "legislation") {
    categoryDescription = "Stay informed on the current laws being discussed";
    animalImgClass += " pigs-pic";
  } else if (category === "help") {
    categoryDescription =
      "Want to volunteer to help animals or looking to donate money or items?";
    animalImgClass += " pig-human-pic";
  }

  return (
    <div className={animalImgClass}>
      <div className="category-text">
        <h3>{categoryName}</h3>
        <p>{categoryDescription}</p>
      </div>
    </div>
  );
};

export default Category;
