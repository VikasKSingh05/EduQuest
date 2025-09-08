import { Bubble } from 'pixel-retroui';

function RetroBubble({dir,desc,bg}) {
  return (
    <Bubble direction={dir}  bg={bg}>
      <span style={{ fontFamily: 'heading' }}>
        {desc}
      </span>
    </Bubble>
  );
}

export default RetroBubble;
