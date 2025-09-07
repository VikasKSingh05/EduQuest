import { TextArea } from 'pixel-retroui';

function RetroArea() {
  return (
    <TextArea style={{fontFamily:'regular'}}
      placeholder ="Enter your text here..." 
      onChange={(e) => console.log(e.target.value)}
    />
  );
}
export default RetroArea;