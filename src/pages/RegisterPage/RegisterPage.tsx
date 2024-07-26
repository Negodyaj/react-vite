import React from 'react';
import './RegisterPage.scss';

export function RegisterPage(): React.JSX.Element {
  return (
    <form>
      RegisterPage <br />
      <label>
        Name:
        <input type="text" />
      </label>
    </form>
  );
}
