import { Card } from 'pixel-retroui';

const RetroCards = ({ title, desc, source, tags = [], children }) => {
  return (
    <Card
      className="p-4 flex flex-col justify-between h-full min-h-[400px]"
      bg="#fefcd0"
      textColor="black"
      borderColor="black"
      shadowColor="#c381b5"
    >
      {/* Image with fixed height */}
      <div className="h-32 mb-3 overflow-hidden rounded">
        <img 
          src={source} 
          alt={title} 
          className="w-full h-full object-cover rounded" 
        />
      </div>
      
      {/* Title with fixed height */}
      <h2
        className="font-bold flex items-center justify-center text-lg mb-2 h-12"
        style={{ fontFamily: 'heading' }}
      >
        {title}
      </h2>
      
      {/* Description with fixed height */}
      <p
        className="items-center justify-center flex text-sm mb-4 px-2 text-center h-16 overflow-hidden"
        style={{ fontFamily: 'regular' }}
      >
        {desc}
      </p>
      
      {/* Tags with fixed height */}
      <div className="h-12 flex items-center justify-center">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-pink-600 text-white text-xs px-2 py-1 rounded-full" 
                style={{ fontFamily: 'button_text' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Button area with fixed height */}
      <div className="flex justify-center h-12 items-center">{children}</div>
    </Card>
  );
};

export default RetroCards;
