function Card({ card }) {
  return (
    <div
      className="
        w-60
        min-h-35
        bg-white
        p-4
        flex
        flex-col
        justify-center
        items-center
        text-center
        shadow-md
        rounded-lg
      "
    >
      <p className="text-lg text-red-500 font-semibold">Step {card.step}</p>
      <p className="text-xl font-bold">{card.title}</p>
    </div>
  );
}

export default Card;
