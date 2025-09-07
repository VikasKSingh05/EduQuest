import { Card } from 'pixel-retroui';

const RetroCards = ({title,desc,source}) => {
  return (
    <Card className="p-4" bg="#fefcd0"
  textColor="black"
  borderColor="black"
  shadowColor="#c381b5">
      <img src={source} alt="course" />
      <h2 className='font-bold flex items-center justify-center' style={{fontFamily:'heading'}}>{title}</h2>
      <p className='items-center justify-center flex p-5'style={{fontFamily:'regular'}}>{desc}</p>
    </Card>
  );
}
export default RetroCards;    