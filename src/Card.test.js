import React, { Children } from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Card from "./Card";
import Carousel from "./Carousel";

it("renders properly", function(){
    render(<Card />)
  })


  it("handles arrows", function(){
    const {queryByTestId } = render (<Carousel />)
    const leftBtn = queryByTestId("left-arrow")
    const rightBtn = queryByTestId("right-arrow")
    expect(leftBtn).not.toBeInTheDocument()

    fireEvent.click(rightBtn)
    fireEvent.click(rightBtn)

    expect(rightBtn).not.toBeInTheDocument()

  }
  
  )