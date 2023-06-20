import { fireEvent, render } from '@testing-library/react';
import CheckboxWithLabel from '../components/CheckboxWithLabel';

it('CheckboxWithLabel changes the text after click', () => {
  const {queryByLabelText, getByLabelText} = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );

  expect(queryByLabelText("Off")).toBeTruthy();

  fireEvent.click(getByLabelText("Off"));

  expect(queryByLabelText("On")).toBeTruthy();

  fireEvent.click(getByLabelText("On"));

  expect(queryByLabelText("Off")).toBeTruthy();
});