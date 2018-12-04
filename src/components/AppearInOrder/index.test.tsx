import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  flushEffects,
  wait
} from "react-testing-library";
import AppearInOrder from ".";

afterEach(cleanup);

describe("initial rendering", () => {
  it("renders none of the children", () => {
    const { queryByText } = render(
      <AppearInOrder>
        <AppearInOrder.Element priority={1}>
          <div>1</div>
        </AppearInOrder.Element>
        <AppearInOrder.Element priority={2}>
          <div>2</div>
        </AppearInOrder.Element>
      </AppearInOrder>
    );

    expect(queryByText("1")).toBeNull();
    expect(queryByText("2")).toBeNull();
  });
});

describe("transitions", () => {
  describe("default keys", () => {
    it("lets the elements appear in order after arrow down keydown event", () => {
      const arrowDown = 40;
      const { container, queryByText } = render(
        <AppearInOrder>
          <AppearInOrder.Element priority={1}>
            <div>1</div>
          </AppearInOrder.Element>
          <AppearInOrder.Element priority={2}>
            <div>2</div>
          </AppearInOrder.Element>
        </AppearInOrder>
      );

      expect(queryByText("1")).toBeNull();
      expect(queryByText("2")).toBeNull();

      fireEvent.keyDown(container, { which: arrowDown });
      flushEffects();

      expect(queryByText("1")).not.toBeNull();
      expect(queryByText("2")).toBeNull();

      fireEvent.keyDown(container, { which: arrowDown });
      flushEffects();

      expect(queryByText("1")).not.toBeNull();
      expect(queryByText("2")).not.toBeNull();
    });

    it("lets the elements disappear when arrow up event is fired", async () => {
      const arrowDown = 40;
      const arrowUp = 38;

      const { debug, container, queryByText } = render(
        <AppearInOrder>
          <AppearInOrder.Element priority={1}>
            <div>1</div>
          </AppearInOrder.Element>
          <AppearInOrder.Element priority={2}>
            <div>2</div>
          </AppearInOrder.Element>
        </AppearInOrder>
      );

      expect(queryByText("1")).toBeNull();
      expect(queryByText("2")).toBeNull();

      fireEvent.keyDown(container, { which: arrowDown });
      flushEffects();

      expect(queryByText("1")).not.toBeNull();
      expect(queryByText("2")).toBeNull();

      fireEvent.keyDown(container, { which: arrowUp });
      flushEffects();
      await wait(() => expect(queryByText("1")).toBeNull());
      expect(queryByText("2")).toBeNull();
    });
  });

  describe("custom keys", () => {
    it("lets the elements appear in order after arbitrary keydown event", () => {
      const incrementKey = 12;

      const { container, queryByText } = render(
        <AppearInOrder incrementKey={incrementKey}>
          <AppearInOrder.Element priority={1}>
            <div>1</div>
          </AppearInOrder.Element>
          <AppearInOrder.Element priority={2}>
            <div>2</div>
          </AppearInOrder.Element>
        </AppearInOrder>
      );

      expect(queryByText("1")).toBeNull();
      expect(queryByText("2")).toBeNull();

      fireEvent.keyDown(container, { which: incrementKey });
      flushEffects();

      expect(queryByText("1")).not.toBeNull();
      expect(queryByText("2")).toBeNull();

      fireEvent.keyDown(container, { which: incrementKey });
      flushEffects();

      expect(queryByText("1")).not.toBeNull();
      expect(queryByText("2")).not.toBeNull();
    });

    it("lets the elements disappear when decrement key event is fired", async () => {
      const incrementKey = 13;
      const decrementKey = 12;

      const { container, queryByText } = render(
        <AppearInOrder incrementKey={incrementKey} decrementKey={decrementKey}>
          <AppearInOrder.Element priority={1}>
            <div>1</div>
          </AppearInOrder.Element>
          <AppearInOrder.Element priority={2}>
            <div>2</div>
          </AppearInOrder.Element>
        </AppearInOrder>
      );

      expect(queryByText("1")).toBeNull();
      expect(queryByText("2")).toBeNull();

      fireEvent.keyDown(container, { which: incrementKey });
      flushEffects();

      expect(queryByText("1")).not.toBeNull();
      expect(queryByText("2")).toBeNull();

      fireEvent.keyDown(container, { which: decrementKey });
      flushEffects();

      await wait(() => expect(queryByText("1")).toBeNull());
      expect(queryByText("2")).toBeNull();
    });
  });
});
