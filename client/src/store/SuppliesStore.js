import { makeAutoObservable } from "mobx";

export default class SuppliesStore {
  constructor() {
    this._supplies = [];
    makeAutoObservable(this);
  }

  setSupplies(supplies) {
    this.supplies = supplies;
  }

  get supplies() {
    return this._supplies;
  }
}
