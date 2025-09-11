import { Card } from 'pixel-retroui';

const RetroCards = ({ title, desc, source, tags = [], children }) => {
  return (
    <Card
      className="p-4 flex flex-col justify-between"
      bg="#fefcd0"
      textColor="black"
      borderColor="black"
      shadowColor="#c381b5"
    >
      {/* Image */}
      <img src={source} alt={title} className="rounded mb-3" />

      {/* Title */}
      <h2
        className="font-bold flex items-center justify-center text-lg mb-2"
        style={{ fontFamily: 'heading' }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        className="items-center justify-center flex text-sm mb-4 px-2 text-center"
        style={{ fontFamily: 'regular' }}
      >
        {desc}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-pink-600 text-white text-xs px-2 py-1 rounded-full " style={{ fontFamily: 'button_text' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {/* Extra content like Start Quest button */}
      <div className="flex justify-center">{children}</div>
    </Card>
  );
};

export default RetroCards;
