import React, { useEffect, useState } from "react";

function RadioGroupQuiz(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const [randomItems, setRandomItems] = useState([]);
  const handleOptionChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value);
    // console.log(changeEvent.target.value);
    props.setAnswerHandler((existingItems) => {
      return [
        ...existingItems.slice(0, props.numbering),
        (existingItems[props.numbering] = changeEvent.target.value),
        ...existingItems.slice(props.numbering + 1),
      ];
    });
  };

  const getRandomItems = () => {
    let allItems = props.quiz.answer;
    const randomCount = 5;

    const randomItems = [];
    for (let i = 0; i < randomCount; i++) {
      const randomIndex = Math.floor(Math.random() * allItems.length);
      const randomItem = allItems.splice(randomIndex, 1)[0];
      randomItems.push(randomItem);
    }
    setRandomItems(randomItems);
    return randomItems;
  };

  useEffect(() => {
    getRandomItems();
  }, []);

  const optionsABC = ["A", "B", "C", "D", "E"];

  return (
    <>
      <div className="mb-5 fw-bold">
        {props.numbering + 1}.
        <span
          dangerouslySetInnerHTML={{
            __html: props.quiz.question,
          }}
        />{" "}
      </div>
      {randomItems.map((randomItem, index) => {
        return (
          <div key={randomItem + index} className="radio">
            <label>
              <input
                className="mr-5"
                type="radio"
                value={randomItem}
                checked={selectedOption === randomItem}
                onChange={handleOptionChange}
              />
              <b>{optionsABC[index]}.</b>{" "}
              {randomItem ? (
                <span dangerouslySetInnerHTML={{ __html: randomItem }}></span>
              ) : (
                "Option"
              )}
            </label>
          </div>
        );
      })}
    </>
  );
}

export default RadioGroupQuiz;
