import React from "react";
import { useGlobalState } from "../context/GlobalState";
import TransactionItem from "./TransactionItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function TransactionList() {
  const { transactions } = useGlobalState();
  return (
    <div className="transactions-container w-full container  pb-2">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={false}
        centerMode={false}
        className=""

        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1040,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 780,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1040,
              min: 780,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </Carousel>
    </div>
  );
}

export default TransactionList;
