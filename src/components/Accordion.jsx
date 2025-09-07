import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'pixel-retroui';

function RetroAccordion() {
  return (
    <Accordion style={{fontFamily:'heading'}}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is it?</AccordionTrigger>
        <AccordionContent>It helps you learn with fun and games.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it good?</AccordionTrigger>
        <AccordionContent>Yes, just like you!</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
export default RetroAccordion