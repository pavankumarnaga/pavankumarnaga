import React, { useState } from 'react';
import './help.css';
const HelpSupportModal = () => {
   const [answerVisibility, setAnswerVisibility] = useState({});
  const handleToggleAnswers = (questionId) => {
    setAnswerVisibility((prevVisibility) => ({
      ...prevVisibility,
      [questionId]: !prevVisibility[questionId],
    }));
  };

  return (
    <div>
      <div className="mainb">
        <div className='nav'>
          <h1>WELCOME TO HELPDESK</h1>
        </div>
        <fieldset>
          <div className='container'>
            <div className='column-left'>
            </div>
            <div className='column-right'>
            </div>
          </div>

          <div>
            <h2>Frequently asked questions</h2>
            <div className="question">
              <span className="dropdown-toggle" onClick={() => handleToggleAnswers(1)}>
                1. What the first step of the home buying process ? {answerVisibility[1] ? '<' : '>'}
              </span>
              {answerVisibility[1] && (
                <div className="answer">
                  <p>Getting pre-approved for a mortgage is the first step of the home buying process. Getting a pre-approval letter from a lender get the ball rolling in the right direction.</p>
                </div>
              )}
            </div>

            <div className="question">
              <span className="dropdown-toggle" onClick={() => handleToggleAnswers(2)}>
                2. How long does it take to buy a home ? {answerVisibility[2] ? '<' : '>'}
              </span>
              {answerVisibility[2] && (
                <div className="answer">
                  <p>From start (searching online) to finish (closing escrow), buying a home takes about 10 to 12 weeks. Once a home is selected an the offer is accepted, the average time to complete the escrow period on a home is 30 to 45 days (under normal market conditions).</p>
                </div>
              )}
            </div>
            <div className="question">
              <span className="dropdown-toggle" onClick={() => handleToggleAnswers(3)}>
                3.What is a seller’s market ?  {answerVisibility[3] ? '<' : '>'}
              </span>
              {answerVisibility[3] && (
                <div className="answer">
                  <p>In sellers’ markets, increasing demand for homes drives up prices. Here are some of the drivers of demand:.</p>
                </div>
              )}
            </div>
            <div className="question">
              <span className="dropdown-toggle" onClick={() => handleToggleAnswers(4)}>
                4.  What is a buyer’s market ? {answerVisibility[4] ? '<' : '>'}
              </span>
              {answerVisibility[4] && (
                <div className="answer">
                  <p>A buyer’s market is characterized by declining home prices and reduced demand. Several factors may affect long-term and short-term buyer demand, like: Economic disruption - a big employer shuts down operations, laying off their workforce.</p>
                </div>
              )}
            </div>
            <div className="question">
              <span className="dropdown-toggle" onClick={() => handleToggleAnswers(5)}>
                5. What is a stratified market ? {answerVisibility[5] ? '<' : '>'}
              </span>
              {answerVisibility[5] && (
                <div className="answer">
                  <p>A stratified market happens where supply and demand characteristics differ by price point, in the same area (typically by city). For example, home sales for properties above $1.5M may be brisk (seller’s market) while homes under $750k may be sluggish (buyer’s market). </p>
                </div>
              )}
            </div>
            <div className="question">
              <span className="dropdown-toggle" onClick={() => handleToggleAnswers(6)}>
                6. How much do I have to pay an agent to help me buy a house ? {answerVisibility[6] ? '<' : '>'}
              </span>
              {answerVisibility[6] && (
                <div className="answer">
                  <p>Home shoppers pay little or no fees to an agent to buy a home.

</p>
                </div>
              )}
            </div>
            <div className="question">
              <span className="dropdown-toggle" onClick={() => handleToggleAnswers(7)}>
                7.  What kind of credit score do I need to buy a home ? {answerVisibility[7] ? '<' : '>'}
              </span>
              {answerVisibility[7] && (
                <div className="answer">
                  <p>Most loan programs require a FICO score of 620 or better. Borrowers with higher credit scores represent less risk to the lender, often resulting in a lower the down payment requirement and better interest rate.</p>
                </div>
              )}
            </div>
            <div className="question">
              <span className="dropdown-toggle" onClick={() => handleToggleAnswers(8)}>
                8. How much do I need for a down payment ? {answerVisibility[8] ? '<' : '>'}
              </span>
              {answerVisibility[8] && (
                <div className="answer">
                  <p>The national average for down payments is 11%. But that figure includes first time and repeat buyers. Let’s take a closer look.</p>
                </div>
              )}
            </div>
            <div className="question">
              <span className="dropdown-toggle" onClick={() => handleToggleAnswers(9)}>
                9.  Should I sell my current home before buying a new one ? {answerVisibility[9] ? '<' : '>'}
              </span>
              {answerVisibility[9] && (
                <div className="answer">
                  <p>If the built-up equity in your current home will be applied to the down payment on the new home, naturally the former will need to be sold first.</p>
                </div>
              )}
            </div>
            <div className="question">
              <span className="dropdown-toggle" onClick={() => handleToggleAnswers(10)}>
                10.  How many homes should I view before buying one ? {answerVisibility[10] ? '<' : '>'}
              </span>
              {answerVisibility[10] && (
                <div className="answer">
                  <p>That’s up to you! For sure, home shopping today is easier today than ever before. </p>
                </div>
              )}
            </div>

            {/* Add more questions here with the same pattern */}
            
          </div>

          <br />
          New query:
          <input type='text'></input>
          <button name='submit'> submit </button>
        </fieldset>
      </div>
    </div>
  );
};

export default HelpSupportModal;
