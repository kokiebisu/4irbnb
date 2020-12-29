declare global {
  interface String {
    capitalize(): string;
  }
}

String.prototype.capitalize = function () {
  console.log("this", this);
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export {};
