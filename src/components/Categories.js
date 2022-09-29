import Category from "./Category";

const Categories = () => {
  return (
    <div className="categories-grid">
      <Category
        key="events"
        category="events"
      />
      <Category
        key="news"
        category="news"
      />
      <Category
        key="legislation"
        category="legislation"
      />
      <Category
        key="hellp"
        category="help"
      />
    </div>
  );
};

export default Categories;
