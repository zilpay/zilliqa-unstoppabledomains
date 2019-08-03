<template>
  <div class="input">
    <input class="input__text"
           type="text"
           :placeholder="placeholder">
    <div class="input__btn-icon">
      <span class="input__icon">
          <svg height="40" viewBox="0 0 40 40" width="40"><path d="m32.6397148 29.8112877 10.7744988 10.7744987-2.8284272 2.8284272-10.7744987-10.7744988c-2.7093674 2.106122-6.1138648 3.3602852-9.8112877 3.3602852-8.836556 0-16-7.163444-16-16s7.163444-16 16-16 16 7.163444 16 16c0 3.6974229-1.2541632 7.1019203-3.3602852 9.8112877zm-12.6397148 2.1887123c6.627417 0 12-5.372583 12-12s-5.372583-12-12-12-12 5.372583-12 12 5.372583 12 12 12z" fill="#7b7a9c" fill-opacity="0.301403" fill-rule="evenodd" transform="translate(-4 -4)"></path></svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: String
  }
}
</script>

<style>
.input {
    width: 100%;
    color: black;
    height: 80px;
    max-width: 1200px;
    font-size: 24px;
    text-align: left;
    font-weight: 400;
    padding-left: 48px;
    border-radius: 40px;
    padding-right: 1em;
    background-color: rgba(123, 122, 156, 0.08);
    cursor: text;
    display: inline-flex;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.1875em;
    align-items: center;
}
.input__text {
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 6px 0 7px;
  display: block;
  min-width: 0;
  box-sizing: content-box;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 50%;
  text-align: center;
  outline:none;
}
.input__btn-icon {
  flex: 0 0 auto;
  color: rgba(0, 0, 0, 0.54);
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
}
.input__icon {
  cursor: pointer;
}
</style>
