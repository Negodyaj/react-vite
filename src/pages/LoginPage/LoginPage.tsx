import React from 'react';

export function LoginPage() {
  return (
    <form>
      <label>
        Email: <input type="email" name="email" />
      </label>
      <label>
        Password: <input type="password" name="password" />
      </label>
    </form>
  );
}
