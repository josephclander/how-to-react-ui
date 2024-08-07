export const solutionCss = `.container {
  position: relative;
  background-color: #bfe6de;
  width: 100%;
  height: 500px;
  display: grid;
  place-content: center;
}

.open {
  padding: 5px;
  cursor: pointer;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  padding: 5px;
  cursor: pointer;
}

.modalContainer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  place-content: center;
}

.modal {
  position: relative;
  background-color: rgb(224, 224, 224);
  width: 200px;
  height: 200px;
  display: grid;
  place-content: center;
}
`;
