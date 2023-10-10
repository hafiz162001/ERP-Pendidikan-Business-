import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function HeroColaborationTab() {
  return (
    <div className="">
      <Accordion allowMultipleExpanded="true" allowZeroExpanded="true">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Syarat Pendaftaran</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="bg-light">
            Masih Kosong.
          </AccordionItemPanel>
        </AccordionItem>
        {/* <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Details Couse
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Course ini dilaksanakan oleh dan sebagai gantinya memungkinkan kita
                        untuk bisa belajar tentang tanaman dan hal lain menariknay hal ini sangat diinginkan oleh orang lain
                    </p>
                </AccordionItemPanel>
            </AccordionItem> */}
      </Accordion>
    </div>
  );
}

export default HeroColaborationTab;
