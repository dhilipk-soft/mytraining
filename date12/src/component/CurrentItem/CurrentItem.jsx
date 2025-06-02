import './CurrentItem.css';

export default function CurrentItem({ currentItem }) {
  if (!currentItem) {
    return <div className="currentItem">No Item Selected</div>;
  }

  return (
    <div className="currentItem-card">
      <h1 className="currentItem-title">{currentItem.name}</h1>
      <img
        className="currentItem-image"
        src={currentItem.image}
        alt={currentItem.name}
      />

      <div className="currentItem-info">
        <p><strong>Cuisine:</strong> {currentItem.cuisine}</p>
        <p><strong>Difficulty:</strong> {currentItem.difficulty}</p>
        <p><strong>Prep Time:</strong> {currentItem.prepTimeMinutes} min</p>
        <p><strong>Calories:</strong> {currentItem.caloriesPerServing} kcal</p>
        <p><strong>Servings:</strong> {currentItem.servings}</p>
        <p><strong>Rating:</strong> ⭐ {currentItem.rating} ({currentItem.reviewCount} reviews)</p>
      </div>

      <div className="currentItem-section">
        <h3>Ingredients</h3>
        <ul>
          {currentItem.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="currentItem-section">
        <h3>Instructions</h3>
        <ol>
          {currentItem.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
